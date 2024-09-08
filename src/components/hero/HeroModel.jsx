import {ContactShadows, OrbitControls} from "@react-three/drei";
import Shoe from "./Shoe.jsx";
import {Canvas} from "@react-three/fiber";
import React from "react";

function HeroModel({fov}) {
    return(
        <>
        <Canvas camera={{ position: [0, 0, 4], fov: fov }}>
            <ambientLight intensity={5} />
             {/*<OrbitControls enableZoom={false} />*/}
            <spotLight intensity={2} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
            <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={15} blur={2} far={0.8} />
            <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
        </Canvas>
        </>
    )
}

export default HeroModel;