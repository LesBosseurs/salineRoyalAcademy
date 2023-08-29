import style from '../styles/components/TagUser.module.scss';

type TagUserProps = {
  children: React.ReactNode;
  size: 'sm' | 'md';
};

export default function TagUser({ children, size }: TagUserProps) {
  const aspectTag = () => {
    switch (size) {
      case 'sm':
        return style.sm;
      case 'md':
        return style.md;
    }
  };

  return <span className={aspectTag()} >{children}</span>;
}
