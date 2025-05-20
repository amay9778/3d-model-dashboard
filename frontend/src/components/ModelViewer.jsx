// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// };

// const ModelViewer = ({ url }) => {
//   return (
//     <Canvas camera={{ position: [0, 0, 5] }}>
//       <ambientLight />
//       <directionalLight position={[10, 10, 5]} intensity={1.5} />
//       <Suspense fallback={null}>
//         <Model url={url} />
//         <Environment preset="sunset" />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default ModelViewer;





import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
};

const ModelViewer = ({ url }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <Model url={url} />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
