"use client"; // this is a client component 👈🏽
import styles from "../styles/home.module.css";
import Auth from "../components/auth";
import { useRef } from "react";


export default function Home() {
  const pointerRef = useRef();
  return (
    <body
      onMouseMove={(e) => {
        pointerRef.current.style.left = e.pageX + "px";
        pointerRef.current.style.top = e.pageY + "px";
      }}
    >
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.center}>
            <div className={styles.thirteen}>Z-Space</div>
          </div>
        </div>
        <Auth />
      </main>
      <div className="pointer" ref={pointerRef}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </body>
  );
}
