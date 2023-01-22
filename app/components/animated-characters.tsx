import { motion, type Variants } from 'framer-motion';
import { type ComponentPropsWithoutRef, type ElementType } from 'react';

type AnimatedCharactersProps<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, 'component' | 'text'> & {
  component?: T;
  text: string;
};

const variants: Variants = {
  hidden: {
    transition: {
      duration: 0.85,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
    y: '200%',
  },
  visible: {
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
    y: 0,
  },
};

export default function AnimatedCharacters<T extends ElementType = 'p'>(props: AnimatedCharactersProps<T>) {
  const { component: Component = 'p', text, ...other } = props;

  const splitWords = text.split(' ');

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  words.map((word) => {
    return word.push('\u00A0');
  });

  return (
    <Component {...other}>
      {words.map((_word, index) => (
        <span className="whitespace-nowrap" key={index}>
          {words[index].flat().map((element, index) => (
            <span className="inline-block overflow-hidden" key={index}>
              <motion.span className="inline-block" variants={variants}>
                {element}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
