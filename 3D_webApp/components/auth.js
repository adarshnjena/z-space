"use client"; // this is a client component 👈🏽
import { useRef } from "react";
import style from "../styles/auth.module.css";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  getAuth,
  signInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Auth() {
  const ParentCrad = useRef();
  const provider = new GoogleAuthProvider();
  const cards = useRef([]);
  const pushRef = (el) => cards.current.push(el);
  const router = useRouter();

  const auth = getAuth();
  return (
    <div className={style.auth}>
      <div
        className={style.cards}
        ref={ParentCrad}
        onMouseMove={async (e) => {
          for (const card of cards.current) {
            const rect = await card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        }}
      >
        <div
          className={style.card}
          ref={pushRef}
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                  GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(auth);
                console.log(user);
                router.push("/world");
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GoogleAuthProvider.credentialFromError(error);
                // ...
              });
          }}
        >
          <div className={style.cardBorder}></div>
          <div className={style.cardContent}>
            <div className={style.cardTitle}>Login via account</div>
            <Player
              autoplay
              speed={1}
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_pwwZiL9I3Y.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
            <p className=" text-center m-8 mt-2 mb-2">
              Connect your account to fully enjoy Decentraland!
            </p>
          </div>
        </div>
        <div
          className={style.card}
          ref={pushRef}
          onClick={() => {
            signInAnonymously(auth)
              .then(() => {
                console.log(auth);
                router.push("/world", undefined, { shallow: true });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
              });
          }}
        >
          <div className={style.cardBorder}></div>
          <div className={style.cardContent}>
            <div className={style.cardTitle}>Play as a Guest</div>
            <Player
              autoplay
              speed={1}
              loop
              src="https://lottie.host/c351ddf0-82b2-414e-9a18-ecbf370ae881/tL5i8sareX.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
            <p className="text-center m-8 mt-2 mb-2">
              Your information will be locally stored and your experience
              limited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
