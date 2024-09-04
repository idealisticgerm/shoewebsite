import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from "three";
import img from '../../assets/img.png'
import { useFrame } from '@react-three/fiber';


const Cyl = () => {
    let tex = useTexture(img);
    let cyl = useRef();
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;

    })

    return (
        <group><mesh ref={cyl}>
            <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
            <meshStandardMaterial
                map={tex} // Base color texture
                transparent
                side={THREE.DoubleSide}

            />
        </mesh></group>

    )
}

export default Cyl