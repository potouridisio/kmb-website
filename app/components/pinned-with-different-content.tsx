import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { Children, type ReactNode, useId, useRef, useState, useEffect } from 'react';

type PinnedWithDifferentContentProps = {
  children?: ReactNode;
};

let isHydrating = true;

export default function PinnedWithDifferentContent({ children: childrenProp }: PinnedWithDifferentContentProps) {
  const children = Children.toArray(childrenProp);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [newContent, setNewContent] = useState<HTMLElement | null>(null);
  const lastContent = useRef(newContent);

  useEffect(() => {
    isHydrating = false;

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !ref.current) {
      return undefined;
    }

    ScrollTrigger.create({
      end: 'bottom bottom',
      onUpdate: getCurrentSection,
      pin: ref.current.firstElementChild,
      start: 'top top',
      trigger: ref.current,
    });

    const contentMarkers = document.querySelectorAll('[data-marker-content]') as NodeListOf<HTMLElement>;

    const getContent = (marker: HTMLElement) => {
      return document.getElementById(marker.dataset.markerContent as string);
    };

    contentMarkers.forEach((marker) => {
      const content = getContent(marker);

      gsap.set(content, {
        left: 0,
        opacity: 0,
        position: 'absolute',
        top: 0,
        visibility: 'hidden',
      });
    });

    function getCurrentSection() {
      contentMarkers.forEach((marker) => {
        if (window.scrollY > marker.offsetTop) {
          setNewContent(getContent(marker));
        }
      });
    }

    const handleResize = () => {
      contentMarkers.forEach((marker) => {
        const content = getContent(marker) as HTMLElement;

        gsap.set(marker, { height: content.getBoundingClientRect().height });
      });

      const lastContentMarker = contentMarkers[contentMarkers.length - 1];
      const emptyContentMarker = lastContentMarker.nextElementSibling as HTMLElement;

      gsap.set(emptyContentMarker, { height: lastContentMarker.getBoundingClientRect().height });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isHydrated]);

  useEffect(() => {
    if (newContent && (lastContent.current === null || !newContent.isSameNode(lastContent.current))) {
      if (lastContent.current) {
        gsap.to(lastContent.current, { autoAlpha: 0 /*, duration: 0.1, */ });
      }

      gsap.fromTo(newContent, { autoAlpha: 0 }, { autoAlpha: 1 /*, duration: 0.3, */ });
    }

    lastContent.current = newContent;
  }, [newContent]);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="flex" ref={ref}>
      <div className="relative grow">
        {children.map((child, index) => (
          <div id={`${id}-content-${index}`} key={index}>
            {child}
          </div>
        ))}
      </div>
      <div className="w-0 flex-none">
        {children.map((_child, index) => (
          <div data-marker-content={`${id}-content-${index}`} key={index} />
        ))}
        <div />
      </div>
    </div>
  );
}
