import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { Children, type ReactNode, useRef, useState, useEffect } from 'react';

type LayeredPinningProps = {
  children?: ReactNode;
};

let isHydrating = true;

export default function LayeredPinning({ children: childrenProp }: LayeredPinningProps) {
  const children = Children.toArray(childrenProp);
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

    gsap.utils.toArray<HTMLElement>(ref.current.children).forEach((panel) => {
      ScrollTrigger.create({
        pin: true,
        pinSpacing: false,
        start: 'bottom bottom',
        trigger: panel,
      });
    });
  }, [isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <div ref={ref}>
      {children.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}
