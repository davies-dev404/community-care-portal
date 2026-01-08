import { useRef, useEffect, useState } from 'react';

const ScrollAnimation = ({ children, className = '', animation = 'fade-up', delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
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
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10';
      case 'fade-in':
        return isVisible ? 'animate-fade-in opacity-100' : 'opacity-0';
      case 'scale-in':
        return isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95';
      default:
        return isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
