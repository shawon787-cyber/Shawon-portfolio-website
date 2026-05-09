import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const points = useRef(null);
  const { mouse, viewport } = useThree();

  const [positions, sizes] = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      siz[i] = Math.random() * 0.04 + 0.01;
    }
    return [pos, siz];
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.03 + mouse.x * 0.15;
    points.current.rotation.x = mouse.y * 0.15;
    points.current.position.x +=
      (mouse.x * viewport.width * 0.02 - points.current.position.x) * 0.05;
    points.current.position.y +=
      (mouse.y * viewport.height * 0.02 - points.current.position.y) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ccff00"
        transparent
        opacity={0.25}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GeometricMesh() {
  const mesh = useRef(null);
  const { mouse } = useThree();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(4, 2);
    return new THREE.EdgesGeometry(geo);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.05 + mouse.y * 0.2;
    mesh.current.rotation.y = t * 0.07 + mouse.x * 0.2;
  });

  return (
    <lineSegments ref={mesh} geometry={geometry}>
      <lineBasicMaterial color="#ccff00" transparent opacity={0.06} />
    </lineSegments>
  );
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-0 gradient-radial" />
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <ParticleField />
        <GeometricMesh />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
    </div>
  );
}
