import { motion, type Variants } from 'framer-motion';

import AnimatedCharacters from './animated-characters';
import ArrowUpward from './arrow-upward';
import ButtonWithIcon from './button-with-icon';
import Sticky from './sticky';

const d = new Date();

const variants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function Footer() {
  return (
    <Sticky>
      <footer className="relative flex min-h-screen flex-col bg-white p-6 text-black xl:p-16">
        <span className="absolute left-0 bottom-full -mb-px h-8 w-full rounded-t-full bg-inherit" />
        <div className="mb-auto xl:my-auto xl:grid xl:grid-cols-12 xl:gap-x-16">
          <div className="xl:col-span-7">
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
              icon={
                <ArrowUpward className="h-[1em] w-[1em] rotate-45 text-[1rem] xl:text-[1.375rem] 3xl:text-[1.75rem]" />
              }
              iconClassName="shadow-black after:bg-black"
            >
              Contact us
            </ButtonWithIcon>
          </div>
        </div>
        <p className="text-body self-start">{d.getFullYear()} KMB. All rights reserved.</p>
      </footer>
    </Sticky>
  );
}
