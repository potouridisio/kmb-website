import { motion, useScroll, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import useIsMobileDevice from '~/utils/use-is-mobile-device';

import { Link } from '@remix-run/react';

import Logo from './logo';
import MobileMenu, { useMobileMenuStore } from './mobile-menu';

const variants: Variants = {
  hidden: {
    top: -85,
    transition: {
      duration: 0.25,
      ease: [0.3, 0.86, 0.36, 0.95],
    },
  },
  visible: {
    top: 5,
    transition: {
      duration: 0.5,
      ease: [0.3, 0.86, 0.36, 0.95],
    },
  },
};

export default function Header() {
  const isMobileDevice = useIsMobileDevice();
  const mobileMenu = useMobileMenuStore();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function updateState() {
      const isScrollingDown = scrollY.getPrevious() - scrollY.get() < 0;

      setHidden(isScrollingDown);
    }

    const unsubscribe = scrollY.on('change', updateState);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <motion.header
      animate={hidden ? 'hidden' : 'visible'}
      className="fixed left-0 z-10 w-full bg-white bg-opacity-10 text-black backdrop-blur-[15px]"
      initial="visible"
      variants={variants}
    >
      <div
        className="flex min-h-[5rem] items-center px-6 xl:px-16"
        style={!isMobileDevice && mobileMenu.open ? { paddingRight: 24 + 17 } : undefined}
      >
        <Link onClick={mobileMenu.open ? mobileMenu.toggleMenu : undefined} to="/">
          <Logo className="h-[2.3125rem] w-[2.3125rem]" />
        </Link>
        <div className="grow" />
        <button
          aria-label="Toggle nav"
          className={`nav-toggle${mobileMenu.open ? '' : ' before:-translate-y-1.5 after:translate-y-1.5'}`}
          onClick={mobileMenu.toggleMenu}
          type="button"
        />
      </div>
      <MobileMenu />
    </motion.header>
  );
}
