import Button from '@/components/atoms/Button';
import { useState } from 'react';
import SalineRoyaleAcademy from '@/public/icons/salineRoyaleAcademy';
import style from '../../styles/pages/landing-page/landingPage.module.scss';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';

export default function Nav() {
  const [mobileMenuShowing, setMobileMenuShowing] = useState<boolean>(false);

  const size = useWindowSize();

  return (
    <nav>
      <div>
        <SalineRoyaleAcademy fill={size.width > 425 ? '#000' : '#fff'} />
        <ul>
          <li>
            <Link href="">Education</Link>
          </li>
          <li>
            <Link href="">Teachers</Link>
          </li>
          <span className={style.line}></span>
          <li>
            <Link href="">For School</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="">Sign in</Link>
        <Button size="md">Sign up</Button>
      </div>
      <div
        className={`${style.burger} ${
          mobileMenuShowing ? style.menuActive : ''
        }`}
        onClick={() => setMobileMenuShowing(!mobileMenuShowing)}
      >
        <span className={mobileMenuShowing ? style.active : ''}></span>
        <span className={mobileMenuShowing ? style.active : ''}></span>
      </div>
    </nav>
  );
}
