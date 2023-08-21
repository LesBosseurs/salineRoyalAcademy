import style from '../styles/components/Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg';
}

export default function Button({ children, size, ...props }: ButtonProps) {
  const aspectButton = () => {
    switch (size) {
      case 'xs':
        return style.xs;
      case 'sm':
        return style.sm;
      case 'md':
        return style.md;
      case 'lg':
        return style.lg;
    }
  };

  return (
    <button {...props} className={aspectButton()}>
      {children}
    </button>
  );
}
