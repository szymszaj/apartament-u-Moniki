import { useEffect, RefObject } from "react";

interface UseParallaxMouseEffectOptions {
  containerRef: RefObject<HTMLElement>;
  blockSelector?: string;
  sensitivity?: number;
  depthMultiplier?: number;
}

export const useParallaxMouseEffect = ({
  containerRef,
  blockSelector = ".animated-block",
  sensitivity = 50,
  depthMultiplier = 5,
}: UseParallaxMouseEffectOptions) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const blocks = container.querySelectorAll(blockSelector);

      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = (mouseX - containerCenterX) / sensitivity;
      const moveY = (mouseY - containerCenterY) / sensitivity;

      blocks.forEach((block, index) => {
        const htmlBlock = block as HTMLElement;
        const factor = index % 2 === 0 ? 1 : -1;

        htmlBlock.style.transform = `
          translateX(${moveX * factor}px) 
          translateY(${moveY * factor}px) 
          translateZ(${10 + index * depthMultiplier}px)
        `;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, blockSelector, sensitivity, depthMultiplier]);
};
