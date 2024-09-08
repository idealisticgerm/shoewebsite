import { ContactShadows, Environment, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useStore } from '@react-three/fiber'
import React, { useRef } from 'react'
import Shoe from './Shoe';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HeroModel from "./HeroModel.jsx";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(".line", {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.7,
            duration: 1,
            ease: "power2.out",
            delay: 0.5
        })
    }, [])

    return (
        <div className=' relative'>
            {/* for desktop */}
            <div className=" relative hidden lg:block h-screen w-full  z-40 bg-[url('/src/assets/homebg.jpg')]  bg-center">
                <div className=" absolute left-[20%] text-[#092345] opacity-70 text-9xl font-sans font-bold leading-tight  grid ">
                    <span className="line"> AIR MAX</span>
                   <span className="line">PRO</span>
                </div>
                <HeroModel fov={25}/>
            </div>

            {/* for mobile */}
            <div className=" relative lg:hidden h-screen w-full  bg-[url('/src/assets/homebg.jpg')] bg-center bg-cover z-40">
                <div
                    className=" absolute left-[10%] top-[5%] text-[#092345] opacity-70 text-6xl sm:text-7xl sm:top-[12%] md:text-8xl md:top-[12%] font-sans font-bold text-center leading-tight  grid ">
                    <span className="line"> AIR MAX</span>
                    <span className="line">PRO</span>
                </div>
                <HeroModel fov={45}/>
            </div>
        </div>
    )
}
export default Hero


{/* <Canvas camera={{ fov: 35 }}>
                <ambientLight />
                <OrbitControls enableZoom={false} />
                <Cyl />
                <EffectComposer>
                    <Bloom
                        intensity={7.0}
                        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
                        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
                        mipmapBlur // Enables or disables mipmap blur.

                    />

                    <ToneMapping adaptive />
                    <BrightnessContrast contrast={0.5} brightness={0.1} />
                </EffectComposer>


            </Canvas> */}
{/* <div className='absolute h-[70vh] w-full z-0'>
            </div> */}