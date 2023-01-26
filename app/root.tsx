import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Scripts, useLocation, useOutlet } from '@remix-run/react';

import Footer from './components/footer';
import Header from './components/header';
import { useMobileMenuStore } from './components/mobile-menu';
import ScrollProgress from './components/scroll-progress';
import SmoothScroll from './components/smooth-scroll';
import TransitionsOverlay from './components/transitions-overlay';
import everettStyles from './styles/everett.css';
import styles from './styles/app.css';
import useIsMobileDevice from './utils/use-is-mobile-device';

export const links: LinksFunction = () => [
  {
    href: '/favicon.svg',
    rel: 'icon',
    type: 'image/svg+xml',
  },
  {
    href: styles,
    rel: 'stylesheet',
  },
  {
    href: everettStyles,
    rel: 'stylesheet',
  },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'KMB',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const isMobileDevice = useIsMobileDevice();
  const location = useLocation();
  const mobileMenu = useMobileMenuStore();
  const outlet = useOutlet();
  const timeoutID = useRef(0);

  useEffect(() => {
    clearTimeout(timeoutID.current);

    timeoutID.current = setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 1100);
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className="overscroll-y-none"
        style={
          mobileMenu.open
            ? {
                overflow: 'hidden',
                paddingRight: isMobileDevice ? undefined : 17,
              }
            : undefined
        }
      >
        <ScrollProgress />
        <Header />
        <SmoothScroll>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 1.2,
                  ease: 'easeInOut',
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 1.1,
                  duration: 0,
                },
              }}
              initial={{ opacity: 0 }}
              key={location.pathname}
            >
              <main>{outlet}</main>
              <Footer />
            </motion.div>
          </AnimatePresence>
        </SmoothScroll>
        <Scripts />
        <LiveReload />
        <TransitionsOverlay />
      </body>
    </html>
  );
}
