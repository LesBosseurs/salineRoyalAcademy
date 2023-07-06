import style from '../styles/components/Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  size: string;
};

export default function Button({ children, size }: ButtonProps) {
  const aspectButton = () => {
    switch (size) {
      case 'sm':
        return style.sm;
      case 'md':
        return style.md;
      case 'lg':
        return style.lg;
    }
  };

  return <button className={aspectButton()}>{children}</button>;
}
