import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'slide-left' | 'zoom' | 'bounce';
  delay?: number; // in seconds
  threshold?: number; // 0-1, percentage of element that needs to be visible
  className?: string;
  duration?: number; // in seconds
}

const getAnimationProps = (animation: string, duration: number) => {
  const baseDuration = duration;
  
  switch(animation) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: baseDuration }
      };
    case 'slide-up':
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: baseDuration }
      };
    case 'slide-right':
      return {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: baseDuration }
      };
    case 'slide-left':
      return {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: baseDuration }
      };
    case 'zoom':
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: baseDuration }
      };
    case 'bounce':
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { 
          duration: baseDuration,
          type: "spring", 
          stiffness: 300,
          damping: 15
        }
      };
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: baseDuration }
      };
  }
};

export const AnimateOnScroll = ({
  children,
  animation = 'fade',
  delay = 0,
  threshold = 0.1,
  className = '',
  duration = 0.5
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationProps = getAnimationProps(animation, duration);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={animationProps.initial}
        animate={isVisible ? animationProps.animate : animationProps.initial}
        transition={{
          ...animationProps.transition,
          delay
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};