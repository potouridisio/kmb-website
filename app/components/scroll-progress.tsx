import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import useIsMobileDevice from '~/utils/use-is-mobile-device';

import { useMobileMenuStore } from './mobile-menu';

export default function ScrollProgress() {
  const isMobileDevice = useIsMobileDevice();
  const mobileMenu = useMobileMenuStore();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100,
  });
  const [value, setValue] = useState(0);

  useEffect(() => {
    function updateValue() {
      setValue(parseFloat(scaleX.get().toFixed(6)));
    }

    const unsubscribe = scaleX.on('change', updateValue);

    return () => {
      unsubscribe();
    };
  }, [scaleX]);

  return (
    <div className="fixed top-0 left-0 z-20 h-[0.3125rem] w-full bg-gray backdrop-blur-0">
      <motion.div
        aria-valuemax={1}
        aria-valuemin={0}
        aria-valuenow={value}
        className="absolute top-0 left-0 bottom-0 w-full origin-left bg-black"
        role="progressbar"
        style={{
          scaleX,
          width: !isMobileDevice && mobileMenu.open ? 'calc(100% - 17px)' : undefined,
        }}
      />
    </div>
  );
}
