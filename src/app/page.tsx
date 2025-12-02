'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

const heroImages = [
  "/Calibes_openGraph.png",
  "/STAROUND-1.png",
  "/Thumbnail.png",
];

export default function Page() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <Image
          src="/Calibes_white_Icon.svg"
          alt="Calibes Icon"
          width={30}
          height={30}
          className={styles.logo_icon}
        />
        <Image
          src="/Calibes_white.png"
          alt="Calibes"
          width={105}
          height={30}
          className={styles.logo}
        />
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          {heroImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 1400px) 100vw, 1400px"
              className={`${styles.heroImage} ${index === currentImage ? styles.active : ""}`}
            />
          ))}

          <div className={styles.heroOverlay}></div>

          <div className={styles.dotsContainer}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`${styles.dot} ${index === currentImage ? styles.dotActive : ""}`}
                aria-label={`${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Calibes Crew</p>
      </footer>
    </div>
  );
}