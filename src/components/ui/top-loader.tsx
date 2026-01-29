import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export function TopLoader() {
  const [location] = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start loading on location change
    setIsVisible(true);
    setProgress(0);

    const intervals: NodeJS.Timeout[] = [];

    // Quick start
    intervals.push(setTimeout(() => setProgress(30), 100));
    
    // Slow down
    intervals.push(setTimeout(() => setProgress(70), 400));
    
    // Complete
    intervals.push(setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 200);
    }, 800));

    return () => {
      intervals.forEach(clearTimeout);
    };
  }, [location]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-[#143109] transition-all duration-300 ease-out shadow-[0_0_10px_#143109]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
