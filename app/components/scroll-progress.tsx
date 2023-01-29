import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '~/utils/use-isomorphic-layout-effect';

export default function ScrollProgress() {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 0.3,
        start: 0,
        end: 'max',
      },
    });

    tl.to('progress', {
      ease: 'none',
      value: 100,
    });
  }, []);

  return (
    <progress
      className="fixed left-0 top-0 z-50 h-1.5 w-full [&::-webkit-progress-bar]:bg-gray [&::-webkit-progress-value]:bg-black"
      max={100}
      value={0}
    />
  );
}
