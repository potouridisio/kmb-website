import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { type ReactNode, useRef, useState, useEffect } from 'react';

type RevealProps = {
  children?: ReactNode;
};

let isHydrating = true;

export default function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !ref.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          end: '+=100%',
          scrub: true,
          start: 'top bottom',
          trigger: ref.current,
        },
      })
      .to(ref.current.firstElementChild, {
        ease: 'none',
        width: '100%',
      });
  }, [isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="flex" ref={ref}>
      <div className="mx-auto" style={{ width: '50%' }}>
        {children}
      </div>
    </div>
  );
}
