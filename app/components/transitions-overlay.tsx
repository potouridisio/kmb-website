import { AnimatePresence, motion, type Variants } from 'framer-motion';

import { useLocation } from '@remix-run/react';

const variants: Variants = {
  end: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
  },
  mid: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    transition: {
      delay: 0.4,
      duration: 1,
      ease: 'easeOut',
    },
  },
  start: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
    transitionEnd: {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    },
  },
};

export default function TransitionsOverlay() {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        animate="start"
        className="pointer-events-none fixed left-0 top-0 z-40 h-full w-full bg-[#242424] p-6 text-white xl:p-16"
        exit="mid"
        initial="end"
        key={useLocation().pathname}
        variants={variants}
      >
        <div className="flex h-full w-full items-center">
          <h1 className="text-subheader overflow-hidden">
            <motion.div
              animate={{
                transition: {
                  duration: 1,
                  ease: [0.3, 0.86, 0.36, 0.95],
                },
                transitionEnd: { y: '100%' },
                y: '-100%',
              }}
              exit={{
                transition: {
                  duration: 1,
                  ease: [0.3, 0.86, 0.36, 0.95],
                },
                y: 0,
              }}
              initial={{ y: 0 }}
            >
              Define. Ideate. Thrive.
            </motion.div>
          </h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
