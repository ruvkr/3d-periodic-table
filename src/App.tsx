import React from "react";
import { Canvas } from "react-three-fiber";

import AtomPillar from "./components/AtomPillar";

function App() {
  return (
    <div className="App">
      <Canvas style={{ background: "#212529" }}>
        <ambientLight intensity={0.25} />
        <spotLight
          intensity={0.6}
          position={[30, 30, 50]}
          angle={0.2}
          penumbra={1}
          castShadow
        />

        <AtomPillar position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
