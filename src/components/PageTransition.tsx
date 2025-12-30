import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100,
                scale: 0.95
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
            exit={{
                opacity: 0,
                y: -50,
                scale: 0.98
            }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
            }}
        >
            {children}
        </motion.div>
    );
};
