import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  icon?: ReactNode;
};

/** Pill-shaped link styled as a button. Styles live in index.css (.btn*). */
export function ButtonLink({ variant = 'primary', size = 'md', icon, children, className = '', ...rest }: Props) {
  return (
    <a className={`group btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`} {...rest}>
      {children}
      {icon ? (
        <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
