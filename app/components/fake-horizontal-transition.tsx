import { gsap } from 'gsap-trial';
import { type ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '~/utils/use-isomorphic-layout-effect';

type FakeHorizontalTransitionProps = {
  children?: ReactNode;
};

export default function FakeHorizontalTransition({ children }: FakeHorizontalTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const section = ref.current;
    const wrapper = section.firstElementChild;

    if (!wrapper) {
      return undefined;
    }

    gsap.fromTo(
      wrapper,
      { x: '-50%' },
      {
        scrollTrigger: {
          end: '+=4000',
          scrub: 0.5,
          trigger: section,
        },
        x: '-150%',
      },
    );
  }, []);

  return (
    <div ref={ref}>
      <div>{children}</div>
    </div>
  );
}
