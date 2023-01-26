import { motion, type Variants } from 'framer-motion';
import AnimatedCharacters from '~/components/animated-characters';
import ArrowUpward from '~/components/arrow-upward';
import ButtonWithIcon from '~/components/button-with-icon';
import Sticky from '~/components/sticky';

const variants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export const handle = {
  footer: () => (
    <>
      <motion.div
        className="mb-16"
        initial="hidden"
        variants={variants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <AnimatedCharacters className="text-header" text="Can't find a role for you?" />
      </motion.div>
      <ButtonWithIcon
        className="text-black shadow-black hover:bg-black hover:text-white"
        icon={<ArrowUpward className="h-[1em] w-[1em] rotate-45 text-[1rem] xl:text-[1.375rem] 3xl:text-[1.75rem]" />}
        iconClassName="shadow-black after:bg-black"
      >
        Send your CV
      </ButtonWithIcon>
    </>
  ),
};

export default function Careers() {
  return (
    <Sticky>
      <section className="flex min-h-screen flex-col justify-center bg-white p-6 text-black xl:p-16">
        <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
          <div className="max-xl:mb-16 xl:col-span-7">
            <motion.div animate="visible" initial="hidden" variants={variants}>
              <AnimatedCharacters className="text-header" component="h1" text="Why someone join KMB?" />
            </motion.div>
          </div>
          <div className="xl:col-span-5 xl:flex xl:flex-col xl:items-start xl:justify-end">
            <p className="text-body">
              The average employment period in our company is currently 4,5 years. Our People have the opportunity to
              work in a relaxed and friendly environment, with top industry partners, on the most significant projects.
            </p>
          </div>
        </div>
      </section>
    </Sticky>
  );
}
