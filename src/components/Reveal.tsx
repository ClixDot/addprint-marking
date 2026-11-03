import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export default function Reveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let scale = 1;

    if (direction === 'up') y = 40;
    if (direction === 'left') x = -40;
    if (direction === 'right') x = 40;
    if (direction === 'scale') scale = 0.9;

    // Set initial state synchronously
    gsap.set(el, { opacity: 0, x, y, scale });

    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: ref, dependencies: [direction, delay] });

  return (
    <div 
      ref={ref} 
      className={className}
    >
      {children}
    </div>
  );
}
