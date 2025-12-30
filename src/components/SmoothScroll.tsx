import { useEffect } from 'react';

/**
 * SmoothScroll component that enhances scroll behavior
 * Adds smooth scrolling to anchor links and improves overall scroll performance
 */
export const SmoothScroll = () => {
    useEffect(() => {
        // Handle anchor link clicks for smooth scrolling
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');

            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });

                        // Update URL without jumping
                        window.history.pushState(null, '', href);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return null; // This component doesn't render anything
};
