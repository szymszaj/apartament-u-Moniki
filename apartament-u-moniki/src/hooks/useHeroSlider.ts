import { useState, useEffect } from "react";

export const useHeroSlider = (
  imagesLength: number,
  intervalTime: number = 3000
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imagesLength === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [imagesLength, intervalTime]);

  return currentImageIndex;
};
