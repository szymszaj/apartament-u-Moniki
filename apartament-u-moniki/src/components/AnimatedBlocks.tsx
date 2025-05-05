import { useEffect, useRef } from "react";

const AnimatedBlocks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSources = [
    "/img/kuchnia.jpg",
    "/img/ogrod4.jpg",
    "/img/salon.jpg",
    "/img/salon2.jpg",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const blocks = container.querySelectorAll(".animated-block");

      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = (mouseX - containerCenterX) / 50;
      const moveY = (mouseY - containerCenterY) / 50;

      blocks.forEach((block, index) => {
        const htmlBlock = block as HTMLElement;
        const factor = index % 2 === 0 ? 1 : -1;

        htmlBlock.style.transform = `
          translateX(${moveX * factor}px) 
          translateY(${moveY * factor}px) 
          translateZ(${10 + index * 5}px)
        `;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
