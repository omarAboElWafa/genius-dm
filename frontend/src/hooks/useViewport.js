import { useState, useEffect } from 'react';

const useViewport = () => {
  const [isXSmall, setIsXSmall] = useState(window.innerWidth);
  const [isSmall, setIsSmall] = useState(window.innerWidth);
  const [isMedium, setIsMedium] = useState(window.innerWidth);
  const [isLarge, setIsLarge] = useState(window.innerWidth);
  const [isXLarge, setIsXLarge] = useState(window.innerWidth);
  const [isXXLarge, setIsXXLarge] = useState(window.innerWidth);

  const handleViewport = () => {
    setIsXSmall(window.innerWidth < 576);
    setIsSmall(window.innerWidth >= 576 && window.innerWidth < 768);
    setIsMedium(window.innerWidth >= 768 && window.innerWidth < 992);
    setIsLarge(window.innerWidth >= 992 && window.innerWidth < 1200);
    setIsXLarge(window.innerWidth >= 1200 && window.innerWidth < 1400);
    setIsXXLarge(window.innerWidth >= 1400);
  };

  useEffect(() => {
    window.addEventListener('resize', handleViewport);
    return () => window.removeEventListener('resize', handleViewport);
  });

  return { isXSmall, isSmall, isMedium, isLarge, isXLarge, isXXLarge };
};

export default useViewport;
