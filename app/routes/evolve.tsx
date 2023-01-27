import { motion, type Variants } from 'framer-motion';
import AnimatedCharacters from '~/components/animated-characters';
import Sticky from '~/components/sticky';

const variants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function Evolve() {
  return (
    <Sticky>
      <section className="flex min-h-screen flex-col justify-center bg-white p-6 text-black xl:p-16">
        <div className="xl:grid xl:grid-cols-12 xl:gap-x-16">
          <div className="max-xl:mb-16 xl:col-span-7">
            <motion.div animate="visible" initial="hidden" variants={variants}>
              <AnimatedCharacters
                className="text-header"
                component="h1"
                text="Learner First, Master Second, Student Always."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Sticky>
  );
}
