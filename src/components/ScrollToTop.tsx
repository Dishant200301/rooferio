import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple approaches to ensure scroll to top works reliably
    window.scrollTo(0, 0);

    // Also try document methods for better browser compatibility
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // Force layout recalculation
    document.body.offsetHeight;
  }, [pathname]);

  return null;
};

