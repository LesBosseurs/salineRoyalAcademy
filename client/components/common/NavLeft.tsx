import Image from 'next/image';
import style from '../../styles/components/common/NavLeft.module.scss';
import { useRouter } from 'next/router';
import HomeIcon from '@/public/icons/home';
import CapIcon from '@/public/icons/cap';
import MedalIcon from '@/public/icons/medal';
import MessagesIcon from '@/public/icons/messages';
import SettingsIcon from '@/public/icons/settings';
import Link from 'next/link';
import SalineRoyaleAcademy from '@/public/icons/salineRoyaleAcademy';

export default function NavLeft() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className={style.nav_left}>
      <SalineRoyaleAcademy fill="#000" />
      <ul>
        <li>
          <Link href="/dashboard">
            <HomeIcon fill={pathname === '/dashboard' ? '#b18b36' : '#000'} />
            <span className={pathname === '/dashboard' ? style.active : '#000'}>
              Dashboard
            </span>
          </Link>
          {pathname === '/dashboard' ? <div></div> : ''}
        </li>
        <li>
          <Link href="/courses">
            <CapIcon fill={pathname === '/courses' ? '#b18b36' : '#000'} />
            <span className={pathname === '/courses' ? style.active : '#000'}>
              Courses
            </span>
          </Link>
          {pathname === '/courses' ? <div></div> : ''}
        </li>
        <li>
          <Link href="/competitions">
            <MedalIcon
              fill={pathname === '/competitions' ? '#b18b36' : '#000'}
            />
            <span
              className={pathname === '/competitions' ? style.active : '#000'}
            >
              Compétitions
            </span>
          </Link>
          {pathname === '/competitions' ? <div></div> : ''}
        </li>
        <li>
          <Link href="/forum">
            <MessagesIcon
              fill={pathname === '/competitions' ? '#b18b36' : '#000'}
            />
            <span className={pathname === '/forum' ? style.active : '#000'}>
              Forum
            </span>
          </Link>
          {pathname === '/forum' ? <div></div> : ''}
        </li>
        <li>
          <Link href="/settings">
            <SettingsIcon
              fill={pathname === '/settings' ? '#b18b36' : '#000'}
            />
            <span className={pathname === '/settings' ? style.active : '#000'}>
              Settings
            </span>
          </Link>
          {pathname === '/settings' ? <div></div> : ''}
        </li>
      </ul>
      <div>
        <Image
          src="/icons/disconnect.svg"
          alt="home icon"
          height="24"
          width="25"
        />
        <span>Disconnect</span>
      </div>
    </nav>
  );
}
