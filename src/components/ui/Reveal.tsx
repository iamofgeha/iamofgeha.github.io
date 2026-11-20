import type { HTMLAttributes, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type Props = HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'li';
  delay?: number;
  children?: ReactNode;
};

/** Fades content up once as it enters the viewport. Reduced motion is handled in CSS (.reveal). */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, ...rest }: Props) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      // A single ref type covers both tags.
      ref={ref as never}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
      {...rest}
    />
  );
}
