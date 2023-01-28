import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { create } from 'zustand';

type MobileMenuProps = {
  children?: ReactNode;
  contentClassName?: string;
};

type MobileMenuState = {
  open: boolean;
  toggleMenu: () => void;
};

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  open: false,
  toggleMenu: () => set((state) => ({ open: !state.open })),
}));

const variants: Variants = {
  visible: (custom: boolean) => ({
    transition: {
      duration: custom ? 0.5 : 0.35,
      ease: [0.3, 0.86, 0.36, 0.95],
    },
    y: custom ? 0 : '-100%',
  }),
};

export default function MobileMenu({ children, contentClassName }: MobileMenuProps) {
  const open = useMobileMenuStore((state) => state.open);

  return (
    <motion.div
      animate="visible"
      className="absolute left-0 top-0 -z-10 h-screen w-full overflow-hidden bg-gray text-black"
      custom={open}
      initial={false}
      variants={variants}
    >
      <motion.div
        animate={{
          opacity: open ? 1 : 0,
          transition: {
            delay: open ? 0.3 : 0,
            duration: open ? 1 : 0.35,
          },
        }}
        className={`h-full p-6 xl:p-16${contentClassName ? ` ${contentClassName}` : ''}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
