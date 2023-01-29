import { gsap } from 'gsap-trial';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import Header from './components/header';
import ScrollProgress from './components/scroll-progress';
import styles from './styles/app.css';
import everettStyles from './styles/everett.css';
import { useIsomorphicLayoutEffect } from './utils/use-isomorphic-layout-effect';

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
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      content: '#smooth-content',
      ignoreMobileResize: true,
      normalizeScroll: true,
      smooth: 1.5,
      wrapper: '#smooth-wrapper',
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Outlet />
          </div>
        </div>
        <ScrollProgress />
        <Header />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
