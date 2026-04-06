import React, { useEffect, useState } from "react";
import mantis from "/images/maskut.png";

const SplashOverlay = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);
  const [typedText, setTypedText] = useState("");
  const message = "Welcome to X-Treme Gaming Esports";

  useEffect(() => {
    let i = 0;
    const typingSpeed = 100;

    const typeInterval = setInterval(() => {
      setTypedText((prev) => {
        if (i < message.length) {
          const updatedText = prev + message.charAt(i);
          i++;
          return updatedText;
        } else {
          clearInterval(typeInterval);
          return prev;
        }
      });
    }, typingSpeed);

    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    const hideTimer = setTimeout(() => setHide(true), 5500);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        color: "#fff",
        textAlign: "center",
        padding: "0 15px", // 👈 keeps text off the edges
      }}
    >
      <img
        src={mantis}
        alt="Welcome Mantis"
        style={{
          width: "200px",
          animation: "wave 2s infinite ease-in-out",
          marginBottom: "20px",
        }}
      />

      <h2
        style={{
          fontSize: "clamp(1rem, 5vw, 1.8rem)", // 👈 responsive font size
          letterSpacing: "1px",
          whiteSpace: "normal", // 👈 allows text to wrap
          wordBreak: "break-word", // 👈 breaks long words cleanly
          fontFamily: "'Poppins', sans-serif",
          maxWidth: "90%", // 👈 ensures it never goes off-screen
          lineHeight: "1.3",
        }}
      >
        {typedText}
        <span
          className="cursor"
          style={{
            display: "inline-block",
            width: "2px",
            backgroundColor: "#fff",
            marginLeft: "3px",
            animation: "blink 0.8s infinite",
          }}
        ></span>
      </h2>

      {/* Cursor blink animation */}
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(10deg); }
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default SplashOverlay;
