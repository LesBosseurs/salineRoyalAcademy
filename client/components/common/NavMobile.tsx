import CapIcon from '@/public/icons/menu/Cap';
import HomeIcon from '@/public/icons/menu/Home';
import MedalIcon from '@/public/icons/menu/Medal';
import MessagesIcon from '@/public/icons/menu/Messages';
import SettingsIcon from '@/public/icons/menu/Settings';
import Link from 'next/link';
import style from '../../styles/components/common/NavMobile.module.scss';

export default function NavMobile() {
  return (
    <div className={style.nav_mobile}>
      <ul>
        <li>
          <Link href="/courses">
            <CapIcon fill="#000" />
          </Link>
        </li>
        <li>
          <Link href="/competitions">
            <MedalIcon fill="#000" />
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <HomeIcon fill="#000" />
          </Link>
        </li>
        <li>
          <Link href="/forum">
            <MessagesIcon fill="#000" />
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <SettingsIcon fill="#000" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
