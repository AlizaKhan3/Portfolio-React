
// import React, { useRef, useState,Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial, Preload } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';
// import styled from 'styled-components';

// const StyledCanvasWrapper = styled.div`
// width:100%;
// height:auto;
// position:absolute;
// inset:0;
// `;

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state,delta) => {ref.current.rotation.x -=delta/10;
//     ref.current.rotation.y -=delta/15;
//   })
//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial transparent color="#f272c8" size={0.002}  sizeAttenuation={true} depthWrite={false} />
//       </Points>
//     </group>
//   );
// };

// const StyledStarCanvas = () => {
//     return(
//         <StyledCanvasWrapper>
//             <Canvas camera={{position: [0,0,1]}}>
//                 <Suspense fallback={null}>
//                   <Stars/>
//                 </Suspense>
//                 <Preload all />
//             </Canvas>
//         </StyledCanvasWrapper>
//     )
// }

// export default StyledStarCanvas;



import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

// Bubbles Component
const Bubbles = () => {
  const ref = useRef();
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(500), { radius: 1.5 }) // 500 bubbles
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group ref={ref}>
      {Array.from({ length: positions.length / 3 }, (_, i) => (
        <mesh
          key={i}
          position={[
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
          ]}
        >
          <sphereGeometry args={[0.015, 16, 16]} /> {/* bubble size */}
          <meshStandardMaterial
            color="#87CEEB"
            transparent
            opacity={0.6}
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

// Main Canvas Wrapper
const BubblesBackground = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Bubbles />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default BubblesBackground;
