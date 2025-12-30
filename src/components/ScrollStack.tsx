// components/ScrollStack.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ScrollStack = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="flex flex-col items-center">
      {children.map((child, index) => (
        <CardWrapper key={index} index={index} total={children.length}>
          {child}
        </CardWrapper>
      ))}
    </div>
  );
};

const CardWrapper = ({ children, index, total }: { children: React.ReactNode, index: number, total: number }) => {
  const container = useRef(null);
  
  // Is card ke scroll progress ko track karne ke liye
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Jaise jaise next card upar aayega, purana card thoda chota (scale) hoga
  // Sticky top distance: 100px + (index * 20px) taaki cards staggered dikhen
  const topOffset = 120 + (index * 25); 

  return (
    <div 
      ref={container} 
      className="h-[60vh] flex items-start justify-center sticky top-0 mb-10 w-full"
      style={{ paddingTop: `${topOffset}px` }}
    >
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.05]),
          top: topOffset,
        }}
        className="w-full origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
};