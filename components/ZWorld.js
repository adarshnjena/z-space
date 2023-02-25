import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const ZWorld = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./Model/zworld.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Light"
          position={[4.08, 5.9, -1.01]}
          rotation={[1.89, 0.88, -2.05]}
        />
        <group
          name="Camera"
          position={[7.36, 4.96, 6.93]}
          rotation={[1.24, 0.33, -0.76]}
        />
        <group
          name="train"
          position={[-145.84, 3.42, 54.67]}
          rotation={[0, -0.09, 0]}
        >
          <mesh
            name="train_1"
            castShadow
            receiveShadow
            geometry={nodes.train_1.geometry}
            material={materials.custom7Clone}
          />
          <mesh
            name="train_2"
            castShadow
            receiveShadow
            geometry={nodes.train_2.geometry}
            material={materials.blueSteelClone}
          />
          <mesh
            name="train_3"
            castShadow
            receiveShadow
            geometry={nodes.train_3.geometry}
            material={materials.custom12Clone}
          />
          <mesh
            name="train_4"
            castShadow
            receiveShadow
            geometry={nodes.train_4.geometry}
            material={materials.custom14Clone}
          />
          <mesh
            name="train_5"
            castShadow
            receiveShadow
            geometry={nodes.train_5.geometry}
            material={materials.defaultMatClone}
          />
          <mesh
            name="train_6"
            castShadow
            receiveShadow
            geometry={nodes.train_6.geometry}
            material={materials.glassClone}
          />
          <mesh
            name="train_7"
            castShadow
            receiveShadow
            geometry={nodes.train_7.geometry}
            material={materials.steelClone}
          />
          <mesh
            name="train_8"
            castShadow
            receiveShadow
            geometry={nodes.train_8.geometry}
            material={materials.lightRedClone}
          />
          <mesh
            name="train_9"
            castShadow
            receiveShadow
            geometry={nodes.train_9.geometry}
            material={materials.darkClone}
          />
        </group>
        <mesh
          name="tube"
          castShadow
          receiveShadow
          geometry={nodes.tube.geometry}
          material={materials["default"]}
        />
        <mesh
          name="strip"
          castShadow
          receiveShadow
          geometry={nodes.strip.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="mountains"
          castShadow
          receiveShadow
          geometry={nodes.mountains.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="terrain"
          castShadow
          receiveShadow
          geometry={nodes.terrain.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="bird001"
          castShadow
          receiveShadow
          geometry={nodes.bird001.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="bird002"
          castShadow
          receiveShadow
          geometry={nodes.bird002.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="bird003"
          castShadow
          receiveShadow
          geometry={nodes.bird003.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="bird"
          castShadow
          receiveShadow
          geometry={nodes.bird.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade001"
          castShadow
          receiveShadow
          geometry={nodes.blade001.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade002"
          castShadow
          receiveShadow
          geometry={nodes.blade002.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade003"
          castShadow
          receiveShadow
          geometry={nodes.blade003.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade004"
          castShadow
          receiveShadow
          geometry={nodes.blade004.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade005"
          castShadow
          receiveShadow
          geometry={nodes.blade005.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade006"
          castShadow
          receiveShadow
          geometry={nodes.blade006.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="blade"
          castShadow
          receiveShadow
          geometry={nodes.blade.geometry}
          material={materials.ColorPalette}
        />
        <mesh
          name="cloud001"
          castShadow
          receiveShadow
          geometry={nodes.cloud001.geometry}
          material={materials.ColorPalette}
          position={[-8.55, 27.94, -7.84]}
          rotation={[0, 0.26, 0]}
        />
        <mesh
          name="cloud003"
          castShadow
          receiveShadow
          geometry={nodes.cloud003.geometry}
          material={materials.ColorPalette}
          position={[-8.55, 7.47, -7.84]}
        />
        <mesh
          name="cloud006"
          castShadow
          receiveShadow
          geometry={nodes.cloud006.geometry}
          material={materials.ColorPalette}
          position={[-43, 11.66, 8.15]}
        />
        <mesh
          name="cloud008"
          castShadow
          receiveShadow
          geometry={nodes.cloud008.geometry}
          material={materials.ColorPalette}
          position={[16.29, 8.22, -7.84]}
        />
        <mesh
          name="cloud010"
          castShadow
          receiveShadow
          geometry={nodes.cloud010.geometry}
          material={materials.ColorPalette}
          position={[6.63, 7.79, -7.84]}
        />
        <mesh
          name="cloud011"
          castShadow
          receiveShadow
          geometry={nodes.cloud011.geometry}
          material={materials.ColorPalette}
          position={[-8.55, -8.74, -7.84]}
        />
        <mesh
          name="cloud002"
          castShadow
          receiveShadow
          geometry={nodes.cloud002.geometry}
          material={materials.ColorPalette}
          position={[49.41, 27.94, -17.5]}
          rotation={[-Math.PI, 0.92, -Math.PI]}
        />
        <mesh
          name="cloud004"
          castShadow
          receiveShadow
          geometry={nodes.cloud004.geometry}
          material={materials.ColorPalette}
          position={[10.77, 11.73, 17]}
          rotation={[-Math.PI, 1.19, -Math.PI]}
        />
        <mesh
          name="cloud012"
          castShadow
          receiveShadow
          geometry={nodes.cloud012.geometry}
          material={materials.ColorPalette}
          position={[11.47, -16.12, -66.08]}
          rotation={[-Math.PI, 0.92, -Math.PI]}
        />
        <mesh
          name="cloud007"
          castShadow
          receiveShadow
          geometry={nodes.cloud007.geometry}
          material={materials.ColorPalette}
          position={[-8.55, 22.81, -7.84]}
          rotation={[Math.PI, -1.43, Math.PI]}
        />
        <mesh
          name="cloud009"
          castShadow
          receiveShadow
          geometry={nodes.cloud009.geometry}
          material={materials.ColorPalette}
          position={[-32.93, 17.92, -7.84]}
          rotation={[Math.PI, -0.79, Math.PI]}
        />
        <mesh
          name="cloud"
          castShadow
          receiveShadow
          geometry={nodes.cloud.geometry}
          material={materials.ColorPalette}
          position={[-66.73, -4.76, -17.35]}
          rotation={[Math.PI, -0.79, Math.PI]}
        />
        <mesh
          name="cloud005"
          castShadow
          receiveShadow
          geometry={nodes.cloud005.geometry}
          material={materials.ColorPalette}
          position={[25.95, 27.94, -23.02]}
          rotation={[-Math.PI, 0.31, -Math.PI]}
        />
        <group name="track">
          <mesh
            name="track_1"
            castShadow
            receiveShadow
            geometry={nodes.track_1.geometry}
            material={materials.ColorPalette}
          />
          <mesh
            name="track_2"
            castShadow
            receiveShadow
            geometry={nodes.track_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          name="water"
          castShadow
          receiveShadow
          geometry={nodes.water.geometry}
          material={materials.ColorPaletteWater}
        />
      </group>
    </group>
  );
}

export default ZWorld;

useGLTF.preload("./Model/zworld.glb");
