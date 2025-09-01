import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A reusable wrapper component to apply scroll-triggered animations.
 * @param {object} props
 * @param {React.ReactNode} props.children - The component to animate.
 * @param {string} props.animationType - The type of animation ('fadeInUp', 'slideInLeft', 'slideInRight', 'zoomIn').
 * @param {number} [props.delay=0] - Delay in milliseconds before the animation starts.
 * @param {boolean} [props.triggerOnce=false] - Whether the animation should only run once. Defaults to false to re-animate on every scroll.
 */
function ScrollAnimationWrapper({ children, animationType, delay = 0, triggerOnce = false }) {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.1, // Animation starts when 10% of the component is visible
  });

  // Base classes for a smooth transition effect
  const baseClasses = 'transition-all duration-1000 ease-out';

  // Defines the starting (hidden) state for each animation type
  const animationClasses = {
    fadeInUp: 'opacity-0 translate-y-12',
    fadeInDown: 'opacity-0 -translate-y-12',
    slideInLeft: 'opacity-0 -translate-x-12',
    slideInRight: 'opacity-0 translate-x-12',
    zoomIn: 'opacity-0 scale-90',
  };
  
  // Defines the final (visible) state for all animations
  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  // Select the correct starting state based on the prop
  const animationClass = animationClasses[animationType] || animationClasses.fadeInUp;

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${inView ? visibleClasses : animationClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;

