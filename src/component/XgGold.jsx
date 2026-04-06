// XgGold.jsx  (replace your current file)
import React from "react";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

function XgGold() {
  // tiny mouse parallax values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smallRY = useTransform(mx, [-300, 300], [12, -12]); // subtle inner tilt
  const smallRX = useTransform(my, [-200, 200], [-8, 8]);

  return (
    <section
      className="xggold"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left - rect.width / 2);
        my.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="xggold-inner">
        {/* Left Side */}
        <div className="xggold-left">
          <div className="xggold-logo">
            <img src="/images/xg-gold-logo.png" alt="XG Logo" />
          </div>

          <div className="xggold-heading">
            <motion.img
              src="/images/xg-g-herotext.png"
              alt="XG Gold Heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </div>

          <motion.div
            className="xggold-subtext"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <img src="/images/xg-g-text2.png" alt="XG Gold Description" />
          </motion.div>

          <div className="xggold-buttons">
            <NavLink to="/login">
              <button className="xg-btn primary">Log in</button>
            </NavLink>
            <NavLink to="/">
              <button className="xg-btn outline">FAQs</button>
            </NavLink>
          </div>
        </div>

        {/* Right Side */}
        <div className="xggold-right" aria-hidden={false}>
          {/* outer wrapper performs true 360° horizontal spin on schedule */}
          <motion.div
            className="big-logo-wrap"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: [0, 360] }}
            transition={{
              duration: 1.6,     // spin duration
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5,    // wait ~5s between spins
            }}
            style={{ perspective: 1400 }}
          >
            {/* inner image keeps subtle parallax and float */}
            <motion.img
              // src="/images/xg-gold.png"
              src="/images/xggold.png"
              alt="Big XG Background"
              className="big-logo"
              style={{ rotateY: smallRY, rotateX: smallRX }}
              animate={{ translateY: [0, -6, 0], scale: [1, 1.01, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              draggable={false}
            />
          </motion.div>

          {/* decorative layers */}
          <div className="hero-glow" aria-hidden />
          <div className="particles" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

export default XgGold;
