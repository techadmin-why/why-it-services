import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Global in-memory cache for scroll positions across page transitions
const scrollPositions = new Map();

export default function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType();
  const currentKeyRef = useRef(location.key || location.pathname);

  // 1. Continuously record current scroll Y position for active route
  useEffect(() => {
    const key = location.key || location.pathname;
    currentKeyRef.current = key;

    const handleScroll = () => {
      if (currentKeyRef.current) {
        scrollPositions.set(currentKeyRef.current, window.scrollY);
        scrollPositions.set(location.pathname, window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.key, location.pathname]);

  // 2. On location change, restore exact previous scroll position or scroll to top
  useEffect(() => {
    const key = location.key || location.pathname;
    const savedPosition = scrollPositions.get(key) ?? scrollPositions.get(location.pathname);

    if (navType === 'POP' && savedPosition !== undefined) {
      // Browser Back / Forward navigation: restore exact scroll Y position
      const restoreScroll = () => {
        window.scrollTo({
          top: savedPosition,
          left: 0,
          behavior: 'instant'
        });
      };

      restoreScroll();
      // Execute double rAF & timeout fallback to handle React DOM mounting
      requestAnimationFrame(() => {
        restoreScroll();
        setTimeout(restoreScroll, 50);
        setTimeout(restoreScroll, 150);
      });
    } else if (navType === 'PUSH') {
      // New page navigation: scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.key, location.pathname, navType]);

  return null;
}
