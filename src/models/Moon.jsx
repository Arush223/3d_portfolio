
import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import moonScene from "../assets/3d/moon.glb";

export function Moon({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const moonRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree(); 
  const { nodes, materials } = useGLTF(moonScene);

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the moon's rotation based on the mouse/touch movement
      moonRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      moonRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      moonRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };
  const handleMouseWheelUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.deltaY < 0) {
      // deltaY < 0 indicates a mouse wheel up event
      if (!isRotating) setIsRotating(true);
  
      moonRef.current.rotation.y += 0.02 * Math.PI; 
      rotationSpeed.current = 0.03; 
    }
  };
  const handleMouseWheelDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.deltaY > 0) {
      // deltaY > 0 indicates a mouse wheel down event
      if (!isRotating) setIsRotating(true);
  
      moonRef.current.rotation.y -= 0.02 * Math.PI; 
      rotationSpeed.current = -0.03; 
    }
  }; 

  
  useEffect(() => {
    // Add event listeners for pointer, keyboard, and mouse wheel events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("wheel", handleMouseWheelUp);
    window.addEventListener("wheel", handleMouseWheelDown);
  
    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", handleMouseWheelUp);
      window.removeEventListener("wheel", handleMouseWheelDown);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleMouseWheelUp, handleMouseWheelDown]);
  

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      moonRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on moon's orientation
      const rotation = moonRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  

      // Set the current stage based on the moon's orientation
      switch (true) {
        case normalizedRotation >= 0 && normalizedRotation <= 1:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 1.75 && normalizedRotation <= 2.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 3.25 && normalizedRotation <= 3.75:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    // {moon 3D model from: https://sketchfab.com/3d-models/rocket-orbiting-moon-c613bee6fbd041e58a35d777ae87bdcb}
    <a.group ref={moonRef} scale={[0.01, 0.01, 0.01]} position={[0, -2, -4]} {...props}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring_1_Ring_0.geometry}
        material={materials.Ring}
        position={[-160.696, 8.557, 70.844]}
        rotation={[-1.546, -0.884, 2.545]}
        scale={1.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Raket_1_Raket_0.geometry}
        material={materials.Raket}
        position={[0, -59.286, 0]}
        rotation={[0, 1.236, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Subdivision_Surface_Subdivision_Surface1_0.geometry}
        material={materials["Subdivision_Surface.1"]}
        position={[6.23, 27.455, 6.83]}
        rotation={[0.015, -0.11, -2.157]}
      />
    </a.group>
  );
}

export default Moon;

