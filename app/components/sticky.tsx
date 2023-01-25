import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { type ReactNode, useEffect, useRef, useState } from 'react';

type StickyProps = {
  children?: ReactNode;
};

export default function Sticky({ children }: StickyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrollHeight, setScrollHeight] = useState(scrollY.get());
  const transform = useTransform(scrollY, [0, scrollHeight, 9999], [0, 0, 9999 - scrollHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        const offsetTop = ref.current.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (height > windowHeight) {
          setScrollHeight(height);
        } else {
          setScrollHeight(offsetTop > 0 ? offsetTop + scrollY : offsetTop);
        }
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div className="will-change-transform" ref={ref} style={{ y: spring }}>
      {children}
    </motion.div>
  );
}
