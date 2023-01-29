import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '~/utils/use-isomorphic-layout-effect';

import { Link } from '@remix-run/react';

export default function Header() {
  useIsomorphicLayoutEffect(() => {
    const showAnim = gsap
      .from('header', {
        duration: 0.2,
        paused: true,
        yPercent: -100,
      })
      .progress(1);

    ScrollTrigger.create({
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
      start: 'top top',
    });
  }, []);

  return (
    <header className="fixed top-1.5 z-40 w-full bg-white bg-opacity-10 py-6 backdrop-blur-lg">
      <div className="px-6 xl:px-16">
        <Link to="/">
          <div className="grid h-9 w-9 grid-cols-2 gap-1">
            <span className="col-start-2 h-4 w-4 bg-purple [clip-path:circle(50%_at_50%_50%)]" />
            <span className="h-4 w-4 bg-purple [clip-path:polygon(30%_0%,_70%_0%,_100%_30%,_100%_70%,_70%_100%,_30%_100%,_0%_70%,_0%_30%)]" />
            <span className="h-4 w-4 bg-purple [clip-path:inset(0_0_0_0)]" />
          </div>
        </Link>
      </div>
    </header>
  );
}
