import NavLeft from './NavLeft';
import style from '../../styles/components/common/Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={style.layout}>
      <NavLeft />
      <div className={style.main}>{children}</div>
    </div>
  );
}
