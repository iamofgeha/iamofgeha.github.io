import { motion, type HTMLMotionProps } from 'framer-motion';

type Common = { delay?: number; y?: number };
type DivProps = HTMLMotionProps<'div'> & Common & { as?: 'div' };
type LiProps = HTMLMotionProps<'li'> & Common & { as: 'li' };

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades content up once as it enters the viewport. Reduced motion is handled by MotionConfig. */
export function Reveal(props: DivProps | LiProps) {
  const { delay = 0, y = 14, as, ...rest } = props;
  const motionProps = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { duration: 0.6, delay, ease },
  };
  if (as === 'li') return <motion.li {...motionProps} {...(rest as HTMLMotionProps<'li'>)} />;
  return <motion.div {...motionProps} {...(rest as HTMLMotionProps<'div'>)} />;
}
