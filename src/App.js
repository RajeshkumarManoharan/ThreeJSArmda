import React, {Suspense} from "react";
import { Canvas } from "react-three-fiber";
import Armada from "./Armada.jsx";

import { OrbitControls } from "@react-three/drei";
import "./index.css";

export default function App() {
  const [show, setShow] = React.useState(true);
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Armada />
      </Suspense>
    </Canvas>
  );
}