"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [phase, setPhase] = useState("visible"); // "visible" | "exit" | "done"

  useEffect(() => {
    // After the logo has grown + settled, start the exit phase
    const exitTimer = setTimeout(() => setPhase("exit"), 1600);
    // After exit animation finishes, remove from DOM
    const doneTimer = setTimeout(() => setPhase("done"), 1600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`page-loader-overlay ${phase === "exit" ? "page-loader-exit" : ""}`}
    >
      <div className={`page-loader-logo ${phase === "exit" ? "page-loader-logo-exit" : ""}`}>
        <Image
          src="/images/uplifttFavicon.svg"
          alt="Upliftt"
          width={80}
          height={80}
          priority
        />
      </div>
    </div>
  );
}
