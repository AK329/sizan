import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useRef } from 'react';

function RotatingObject() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial color="#2dd4bf" wireframe />
      </mesh>
    </Float>
  );
}

export default function ThreeDScene() {
  return (
    <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#5eead4" intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#2dd4bf" intensity={1.5} />
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={0.6} />
        <RotatingObject />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
