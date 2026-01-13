import { useRef } from "react";
import { useParallaxMouseEffect } from "../hooks/useParallaxMouseEffect";

const AnimatedBlocks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSources = [
    "/img/kuchnia.jpg",
    "/img/jacuzzi3.jpg",
    "/img/salon.jpg",
    "/img/salon2.jpg",
  ];

  useParallaxMouseEffect({
    containerRef,
    blockSelector: ".animated-block",
    sensitivity: 50,
    depthMultiplier: 5,
  });

  return (
    <div className="relative block-animation-container" ref={containerRef}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {imageSources.map((src, index) => (
          <div
            key={index}
            className={`animated-block ${
              index % 2 === 0 ? "animate-float-slow" : "animate-float-slower"
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "200px",
              borderRadius: "8px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBlocks;
