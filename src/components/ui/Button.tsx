import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost';
  icon?: ReactNode;
};

const styles = {
  primary:
    'bg-fg text-bg hover:bg-fg/90 shadow-[0_1px_0_0_rgb(255_255_255/0.2)_inset,0_8px_24px_-12px_rgb(0_0_0/0.6)]',
  ghost: 'border hairline-strong text-fg hover:bg-fg/[0.04] hover:border-fg/30',
};

export function ButtonLink({ variant = 'primary', icon, children, className = '', ...rest }: Props) {
  return (
    <a
      className={`group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[background-color,border-color,transform] duration-200 ease-out active:scale-[0.98] ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon ? (
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">{icon}</span>
      ) : null}
    </a>
  );
}
