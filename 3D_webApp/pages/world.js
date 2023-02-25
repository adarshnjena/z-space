import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const world = () => {
  useEffect(() => {
    setTimeout(() => {
      if (!user) router.push("/");
      setLoading(false);
    }, 5000);
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Player
          autoplay
          speed={1}
          loop
          src="https://assets4.lottiefiles.com/private_files/lf30_esg1l8r1.json"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw]"
        ></Player>
      ) : (
        <Canvas
          camera={{ position: [-70, 20, 30], fov: 45 }}
          rotation={[0, 0, 2]}
          shadows
        >
          <Experience />
        </Canvas>
      )}
    </>
  );
};

export default world;
