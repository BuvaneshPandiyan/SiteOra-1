import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change, but not for hash links on the same page
    if (window.location.hash === '') {
        window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;