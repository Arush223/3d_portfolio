import {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Ufo from '../models/Ufo'
import Rocket from '../models/Rocket'
import HomeInfo from '../components/HomeInfo'
import Space from '../models/Space'
import Moon from '../models/Moon'
  
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustMoonForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1,4.7,0];

    if(window.innerWidth < 768) {
      screenScale = [0.18,0.18,0.18];
    }
    else{
      screenScale = [.2,.2,.2];

    }
    return [screenScale, screenPosition, rotation];
  }
  const adjustRocketForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    }
    else{
      screenScale = [3,3,3];
      screenPosition = [0,-4,-4];

    }
    return [screenScale, screenPosition];
  }

  const [MoonScale, MoonPosition, MoonRotation] = adjustMoonForScreenSize();
  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();


  return (
    <section className = "w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className = {`"w-full h-screen bg-transparent" ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000,}} style = {{background: "black"}}
      >
        <Suspense fallback = {<Loader />}>
          <Space isRotating = {isRotating} />
          <directionalLight position = {[1,1,1]} intensity = {2} />
          <ambientLight intensity = {[0.5]}/>
          <hemisphereLight skyColor = "#FFFFFF" groundColor= "#000000" intensity = {1}/> 
          <Ufo />
          <Rocket 
            isRotating = {isRotating}
            scale = {rocketScale}
            position = {rocketPosition}
            rotation = {[0,20,0]}
          />

           <Moon
            position = {MoonPosition}
            scale = {MoonScale}
            rotation = {MoonRotation}
            isRotating ={isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage= {setCurrentStage}
          />  


        </Suspense>
        
      </Canvas>
    </section>
  )
}

export default Home