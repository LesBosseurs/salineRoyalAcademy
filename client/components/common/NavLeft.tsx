import Image from 'next/image';
import style from '../../styles/components/common/NavLeft.module.scss';
import fonts from '../../styles/fonts.module.scss';
import { useRouter } from 'next/router';
import HomeIcon from '@/public/icons/home';
import CapIcon from '@/public/icons/cap';
import MedalIcon from '@/public/icons/medal';
import MessagesIcon from '@/public/icons/messages';
import SettingsIcon from '@/public/icons/settings';

export default function NavLeft() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className={style.nav_left}>
      <Image
        src="/icons/saline_royale_academy.svg"
        alt="icon royale academy academy"
        width="160"
        height="40"
      />
      <ul className={fonts.paragraph_medium}>
        <li>
          <a href="/dashboard">
            <HomeIcon fill={pathname === '/dashboard' ? '#b18b36' : '#000'} />
            <span className={pathname === '/dashboard' ? style.active : '#000'}>
              Dashboard
            </span>
          </a>
          {pathname === '/dashboard' ? <div></div> : ''}
        </li>
        <li>
          <a href="/courses">
            <CapIcon fill={pathname === '/courses' ? '#b18b36' : '#000'} />
            <span className={pathname === '/courses' ? style.active : '#000'}>
              Courses
            </span>
          </a>
          {pathname === '/courses' ? <div></div> : ''}
        </li>
        <li>
          <a href="/competitions">
            <MedalIcon
              fill={pathname === '/competitions' ? '#b18b36' : '#000'}
            />
            <span
              className={pathname === '/competitions' ? style.active : '#000'}
            >
              Compétitions
            </span>
          </a>
          {pathname === '/competitions' ? <div></div> : ''}
        </li>
        <li>
          <a href="/forum">
            <MessagesIcon
              fill={pathname === '/competitions' ? '#b18b36' : '#000'}
            />
            <span className={pathname === '/forum' ? style.active : '#000'}>
              Forum
            </span>
          </a>
          {pathname === '/forum' ? <div></div> : ''}
        </li>
        <li>
          <a href="/settings">
            <SettingsIcon
              fill={pathname === '/settings' ? '#b18b36' : '#000'}
            />
            <span className={pathname === '/settings' ? style.active : '#000'}>
              Settings
            </span>
          </a>
          {pathname === '/settings' ? <div></div> : ''}
        </li>
      </ul>
      <div className={fonts.paragraph_medium}>
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
