import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import Footer from './components/footer';
import Header from './components/header';
import ScrollProgress from './components/scroll-progress';
import SmoothScroll from './components/smooth-scroll';
import everettStyles from './styles/everett.css';
import styles from './styles/app.css';

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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overscroll-y-none">
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
