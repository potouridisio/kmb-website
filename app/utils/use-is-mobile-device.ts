import { useIsomorphicLayoutEffect } from 'framer-motion';
import { useCallback, useState } from 'react';

import hasTouchScreen from './has-touch-screen';

export default function useIsMobileDevice() {
  const [isMobileDevice, setIsMobileDevice] = useState(hasTouchScreen());

  const detectMobileDevice = useCallback(() => {
    setIsMobileDevice(hasTouchScreen());
  }, []);

  useIsomorphicLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(detectMobileDevice);

    if (typeof document !== 'undefined') {
      resizeObserver.observe(document.body);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return isMobileDevice;
}
