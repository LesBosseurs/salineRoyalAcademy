import NavLeft from './NavLeft';
import style from '../../styles/components/common/Layout.module.scss';
import NavMobile from './NavMobile';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={style.layout}>
      <NavLeft />
      <NavMobile />
      <div className={style.main}>{children}</div>
    </div>
  );
}
