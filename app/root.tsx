import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import Footer from './components/footer';
import Header from './components/header';
import { useMobileMenuStore } from './components/mobile-menu';
import ScrollProgress from './components/scroll-progress';
import SmoothScroll from './components/smooth-scroll';
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
  const mobileMenu = useMobileMenuStore();

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
          <main>
            <Outlet />
          </main>
          <Footer />
        </SmoothScroll>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
