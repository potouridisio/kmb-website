import { motion, useIsomorphicLayoutEffect, useScroll, useSpring, useTransform } from 'framer-motion';
import { type ReactNode, useCallback, useRef, useState } from 'react';

export type SmoothScrollProps = {
  children?: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(resizePageHeight);

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 w-full overflow-hidden will-change-transform"
        ref={scrollRef}
        style={{ y: spring }}
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
}
