import { ContactShadows, Environment, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useStore } from '@react-three/fiber'
import React, { useRef } from 'react'
// import Cyl from './Cyl'
import { Bloom, BrightnessContrast, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import Shoe from './Shoe';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



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


            {/* for desktop */}
            <div className="hidden lg:block h-[80vh] w-full  z-40 bg-[url('/src/assets/homebg.jpg')]  bg-center">

                <Canvas camera={{ position: [0, 0, 4], fov: 25 }}>
                    <ambientLight intensity={5} />
                    {/* <OrbitControls enableZoom={false} /> */}
                    <spotLight intensity={2} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
                    {/* <Environment preset="warehouse" background blur={1} /> */}
                    <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={15} blur={2} far={0.8} />
                    {/* <Selector> */}
                    <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
                    {/* </Selector> */}
                </Canvas>

            </div>

            {/* for mobile */}

            <div className="lg:hidden h-screen w-full  bg-[url('/src/assets/homebg.jpg')] bg-center bg-cover z-40">
                <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                    <ambientLight intensity={5} />
                    {/* <OrbitControls enableZoom={false} /> */}
                    <spotLight intensity={2} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
                    {/* <Environment preset="warehouse" background blur={1} /> */}
                    <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={15} blur={2} far={0.8} />
                    {/* <Selector> */}
                    <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
                    {/* </Selector> */}
                </Canvas>


            </div>


            {/* <div className='text-white flex text-2xl md:text-5xl lg:text-8xl font-sans font-semibold justify-start items-center '>
                <p className='line w-2/3 md:w-1/2 pl-7'>
                    Step into style, comfort, and confidence.
                </p>

            </div>
            <div className='text-white text-2xl flex font-sans lg:text-8xl font-semibold md:text-5xl  justify-end items-center mt-44 md:mt-64 lg:mt-2 text-end'>

                <p className='line w-2/3 md:w-1/2 pr-7 lg:pr-4'>
                    Discover the perfect pair for every journey.
                </p>
            </div> */}
        </div>
    )
}

export default Hero