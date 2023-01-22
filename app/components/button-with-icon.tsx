import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ButtonWithIconProps<T extends ElementType> = Omit<
  ComponentPropsWithoutRef<T>,
  'children' | 'className' | 'component' | 'icon' | 'iconClassName'
> & {
  children?: ReactNode;
  className?: string;
  component?: T;
  icon?: ReactNode;
  iconClassName?: string;
};

export default function ButtonWithIcon<T extends ElementType = 'button'>(props: ButtonWithIconProps<T>) {
  const { children, className, component: Component = 'button', icon, iconClassName, ...other } = props;

  return (
    <Component className={`btn${icon ? ' btn--icon-outside' : ''}${className ? ` ${className}` : ''}`} {...other}>
      <span className="btn__text">{children}</span>
      {icon ? <span className={`btn__icon${iconClassName ? ` ${iconClassName}` : ''}`}>{icon}</span> : null}
    </Component>
  );
}
