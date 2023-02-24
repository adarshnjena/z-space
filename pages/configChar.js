/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"; // this is a client component 👈🏽
import { useRef } from "react";
import BodyConfig from "../components/BodyConfig";
import GenderSelect from "../components/genderSelect";
export default function configChar() {
  const pointerRef = useRef();
  return (
    <body
      onMouseMove={(e) => {
        pointerRef.current.style.left = e.pageX + "px";
        pointerRef.current.style.top = e.pageY + "px";
      }}
      className="bg-zinc-900"
    >
      <div class="w-full bg-gradient-to-r from-green-400 to-blue-500  h-[6vh] text-black pl-4	text-4xl font-black justify-self-center">
        Avatar
      </div>
      <div class="w-full bg-zinc-900 h-[94vh] text-black pl-4">
        <div className="flex bg-zinc-900 m-5 mt-8 gap-x-12">
          <button className="bg-zinc-700 text-white rounded-md	p-2">
            <img src="./body.png" />
          </button>
          <button className="bg-zinc-700 text-white rounded-md	p-2">
            <img src="./hair.png" />
          </button>
          <button className="bg-zinc-700 text-white rounded-md	p-2">
            <img src="./pant.png" />
          </button>
          <button className="bg-zinc-700 text-white rounded-md	p-2">
            <img src="./tshirt.png" />
          </button>
          <button className="bg-zinc-700 text-white rounded-md	p-2">
            <img src="./shoe.png" />
          </button>
        </div>
        <BodyConfig />
        <GenderSelect />
      </div>

      <div className="pointer" ref={pointerRef}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </body>
  );
}
