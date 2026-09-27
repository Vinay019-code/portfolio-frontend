import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for GSAP ScrollTrigger reveal animations.
 * Fades in and slides up elements when they enter viewport.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const {
      y = 40,
      opacity = 0,
      duration = 0.9,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options]);

  return ref;
}

/**
 * Hook for staggered children reveal animation.
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const {
      childSelector = '.stagger-item',
      y = 30,
      duration = 0.7,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 85%',
    } = options;

    const children = el.querySelectorAll(childSelector);
    if (!children.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options]);

  return ref;
}

/**
 * Magnetic button effect — subtle cursor-following on hover.
 */
export function useMagneticButton(strength = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}

/**
 * Hero entrance animation timeline.
 */
export function createHeroTimeline(elements) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediately show everything
    Object.values(elements).forEach((el) => {
      if (el) gsap.set(el, { opacity: 1, y: 0 });
    });
    return null;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (elements.heading) {
    tl.fromTo(
      elements.heading,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }

  if (elements.subtitle) {
    tl.fromTo(
      elements.subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    );
  }

  if (elements.description) {
    tl.fromTo(
      elements.description,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.4'
    );
  }

  if (elements.buttons) {
    tl.fromTo(
      elements.buttons,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    );
  }

  if (elements.tech) {
    tl.fromTo(
      elements.tech,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.2'
    );
  }

  return tl;
}
