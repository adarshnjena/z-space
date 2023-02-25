import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";

const world = () => {
  return (
    <>
      <Canvas camera={{ position: [-70, 20, 30], fov: 45 }} rotation={[0,0,2]} shadows>
        <Experience />
      </Canvas>
    </>
  )
}

export default world