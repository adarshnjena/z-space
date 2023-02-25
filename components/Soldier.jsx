import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import useInputs from "@/hooks/useInputs";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";


let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();


const directionOffset = ({ forward, backward, left, right }) => {
    var directionOffset = 0;

    if(forward) {
        if(left) {
            directionOffset = Math.PI / 4;
        } else if (right) {
            directionOffset = -Math.PI / 4;
        }
    } else if (backward) {
        if (left) {
            directionOffset = Math.PI / 4 + Math.PI / 2;
        } else if (right) {
            directionOffset = -Math.PI / 4 - Math.PI / 2;
        } else {
            directionOffset = Math.PI;
        }
    } else if (left) {
        directionOffset = Math.PI;
    } else if (right) {
        directionOffset = -Math.PI / 2;
    }

    return directionOffset;
}


const Soldier = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./Model/Soldier.glb");
  const { actions } = useAnimations(animations, group);
  const { forward, backward, left, right, shift } = useInputs();

    const currentAction = useRef("");
    const controlsRef = useRef();
    const camera = useThree((state) => state.camera);
    
    const updateCameraTarget = (moveX, moveZ) => {
        //move Camera
        camera.position.x += moveX;
        camera.position.z += moveZ;

        //update camera target
        cameraTarget.x = group.current.position.x;
        cameraTarget.y = group.current.position.y + 1;
        cameraTarget.z = group.current.position.z;
        if(controlsRef.current) controlsRef.current.target = cameraTarget;
    };

    useEffect(() => {
        let action = "";

        if(forward || backward || left || right) {
            action = "Walk";

            if(shift) {
                action = "Run";
            }
        } else {
            action = "Idle"; 
        }

        if(currentAction.current != action) {
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2);
            nextActionToPlay?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }
        
    }, [forward, backward, left, right, shift]);

    useFrame((state, delta) => {
        //camera direction
        if(currentAction.current == "Run" || currentAction.current == "Walk") {
            let angleYCameraDirection = Math.atan2(
                camera.position.x - group.current.position.x,
                camera.position.z - group.current.position.z
            );

        //diagonal movement angle offset 
        let newDirectionOffset = directionOffset({
            forward,
            backward,
            left,
            right,
        });  
        
        // rotate model
        rotateQuarternion.setFromAxisAngle(
            rotateAngle,
            angleYCameraDirection + newDirectionOffset
        );
        group.current.quaternion.rotateTowards(rotateQuarternion, 0.2)
      

        // Calculate Direction 
        camera.getWorldDirection(walkDirection);
        walkDirection.y = 0;
        walkDirection.normalize();
        walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

        // run/walk velocity
        const velocity = currentAction.current == "Run" ? 60 : 30;

        // Move model & camera
        const moveX = walkDirection.x * velocity * delta;
        const moveZ = walkDirection.z * velocity * delta;
        group.current.position.x += moveX;
        group.current.position.z += moveZ;
        updateCameraTarget(moveX, moveZ);
        }
    })

  return (
    <>
    <OrbitControls ref = {controlsRef} />
    <group ref={group} position={[-50, 0, 10]} {...props} dispose={null}>
      <group name="Scene">
        <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="vanguard_Mesh"
            geometry={nodes.vanguard_Mesh.geometry}
            material={materials.VanguardBodyMat}
            skeleton={nodes.vanguard_Mesh.skeleton}
          />
          <skinnedMesh
            name="vanguard_visor"
            geometry={nodes.vanguard_visor.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_visor.skeleton}
          />
        </group>
      </group>
    </group>
    </>
  );
}

export default Soldier;

useGLTF.preload("./Model/Soldier.glb");
