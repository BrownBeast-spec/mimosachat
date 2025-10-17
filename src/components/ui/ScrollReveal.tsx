import { useEffect, useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  stagger?: number;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  stagger = 0.03,
  element = 'h2'
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  const cleanupAnimations = useCallback(() => {
    animationsRef.current.forEach(animation => {
      if (animation) animation.kill();
    });
    animationsRef.current = [];
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === containerRef.current) {
        trigger.kill();
      }
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clear any existing animations
    cleanupAnimations();

    const scroller = scrollContainerRef?.current || window;
    const wordElements = el.querySelectorAll('.word');

    if (wordElements.length === 0) return;

    // Set initial states more efficiently
    gsap.set(el, { 
      transformOrigin: '0% 50%', 
      rotate: baseRotation,
      willChange: 'transform'
    });
    
    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      willChange: 'opacity, filter'
    });

    // Create rotation animation
    const rotationTween = gsap.to(el, {
      rotate: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom',
        end: rotationEnd,
        scrub: 1.2,
        invalidateOnRefresh: true
      }
    });

    // Create combined opacity and blur animation
    const wordTween = gsap.to(wordElements, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      stagger: stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=15%',
        end: wordAnimationEnd,
        scrub: 1.2,
        invalidateOnRefresh: true,
        onComplete: () => {
          // Remove willChange after animation completes
          gsap.set([el, ...wordElements], { willChange: 'auto' });
        }
      }
    });

    animationsRef.current = [rotationTween, wordTween];

    return cleanupAnimations;
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, stagger, cleanupAnimations]);

  const Element = element as keyof JSX.IntrinsicElements;

  return (
    <Element ref={containerRef as any} className={`scroll-reveal ${containerClassName}`}>
      <span className={`scroll-reveal-text ${textClassName}`}>{splitText}</span>
    </Element>
  );
};

export default ScrollReveal;
