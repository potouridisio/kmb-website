import { motion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { type RouteMatch, useMatches } from '@remix-run/react';

import AnimatedCharacters from './animated-characters';
import ArrowUpward from './arrow-upward';
import ButtonWithIcon from './button-with-icon';
import Sticky from './sticky';

const variants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

function ContactUs() {
  return (
    <>
      <motion.div
        className="mb-16"
        initial="hidden"
        variants={variants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <AnimatedCharacters className="text-header" text="Kiss our button and let’s talk." />
      </motion.div>
      <ButtonWithIcon
        className="text-black shadow-black hover:bg-black hover:text-white"
        icon={<ArrowUpward className="h-[1em] w-[1em] rotate-45 text-[1rem] xl:text-[1.375rem] 3xl:text-[1.75rem]" />}
        iconClassName="shadow-black after:bg-black"
      >
        Contact us
      </ButtonWithIcon>
    </>
  );
}

const d = new Date();

export default function Footer() {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const timeoutID = useRef(0);
  const [debouncedMatch, setDebouncedMatch] = useState<RouteMatch>(lastMatch);

  useEffect(() => {
    clearTimeout(timeoutID.current);

    timeoutID.current = setTimeout(() => {
      setDebouncedMatch(lastMatch);
    }, 1100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(lastMatch)]);

  return (
    <Sticky>
      <footer className="relative flex min-h-screen flex-col bg-white p-6 text-black xl:p-16">
        <span className="absolute left-0 bottom-full -mb-px h-8 w-full rounded-t-full bg-inherit" />
        <div className="mb-auto xl:my-auto xl:grid xl:grid-cols-12 xl:gap-x-16">
          <div className="xl:col-span-7">{debouncedMatch.handle?.footer(debouncedMatch) ?? <ContactUs />}</div>
        </div>
        <p className="text-body self-start">{d.getFullYear()} KMB. All rights reserved.</p>
      </footer>
    </Sticky>
  );
}
