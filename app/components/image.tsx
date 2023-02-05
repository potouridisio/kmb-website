import { gsap } from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

type ImageProps = {
  alt?: string;
  blurDataURL?: string;
  className?: string;
  src?: string;
};

let isHydrating = true;

export default function Image({ alt, blurDataURL, className, src }: ImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !ref.current) {
      return undefined;
    }

    const image = ref.current;
    const section = image.parentElement;

    if (!section) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      once: true,
      onEnter: () => {
        const newImage = document.createElement('img');

        newImage.onload = (event) => {
          if (alt) {
            newImage.alt = alt;
          }

          if (className) {
            newImage.className = className;
          }

          if (image.nextElementSibling) {
            image.nextElementSibling.insertAdjacentElement('beforebegin', newImage);
          } else {
            section.appendChild(newImage);
          }

          gsap.from(newImage, {
            autoAlpha: 0,
            clearProps: true,
            onComplete: () => {
              section.removeChild(image);
            },
          });
        };

        if (src) {
          newImage.src = src;
        }
      },
      start: '-50% bottom',
      trigger: section,
    });
  }, [alt, className, isHydrated, src]);

  if (!isHydrated) {
    return null;
  }

  return <img alt={alt} className={className} ref={ref} src={blurDataURL} />;
}
