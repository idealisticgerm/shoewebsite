import React, { useRef } from 'react'
import shoe from '../../assets/shoe.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Shoe = (props) => {
    const ref = useRef()
    const { nodes, materials } = useGLTF(shoe)
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
        ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
    })
    return (
        <group ref={ref}>
            <mesh receiveShadow castShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} {...props} />
        </group>)
}
useGLTF.preload(shoe)

export default Shoe