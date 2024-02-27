import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";



import ufoScene from "../assets/3d/ufo.glb";
// 3D model from: https://sketchfab.com/3d-models/animated-cartoon-flying-saucer-ufo-loop-0342da05b4ac4e459d9a9d23851d5ba6
const Ufo = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes,animations } = useGLTF(ufoScene); // animations = [hover, flight, abduction_rings]
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
      actions["hover"].play();
      actions["abduction_rings"].play();
  }, []);



   

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    group.current.position.y = Math.sin(clock.elapsedTime) * 0.01 + 2;

    // Check if the UFO reached a certain endpoint relative to the camera
    if (group.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the UFO 180 degrees on the y-axis
      group.current.rotation.y = Math.PI;
    } else if (group.current.position.x < camera.position.x - 5) {
      // Change direction to forward and reset the UFO's rotation
      group.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (group.current.rotation.y === 0) {
      // Moving forward
      group.current.position.x += 0.01;
      group.current.position.z -= 0.01;
    } else {
      // Moving backward
      group.current.position.x -= 0.01;
      group.current.position.z += 0.01;
    }
  });


  return (
    <group ref={group} {...props} scale = {[2,2,2]} dispose={null}>
      <group name='RootNode0' scale={0.01}>
        <group name='skeletal1'>
          <primitive object={nodes.root2} />
        </group>
        <group name='geo10'>
          <skinnedMesh
            name='ufo11'
            geometry={nodes.ufo11.geometry}
            material={nodes.ufo11.material}
            skeleton={nodes.ufo11.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

export default Ufo;
