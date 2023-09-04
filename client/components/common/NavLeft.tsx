import Image from 'next/image';
import style from '../../styles/components/common/NavLeft.module.scss';
import { useRouter } from 'next/router';
import HomeIcon from '@/public/icons/menu/Home';
import CapIcon from '@/public/icons/menu/Cap';
import MedalIcon from '@/public/icons/menu/Medal';
import MessagesIcon from '@/public/icons/menu/Messages';
import Link from 'next/link';
import SalineRoyaleAcademy from '@/public/icons/salineRoyaleAcademy';
import { useAppDispatch } from '@/hooks/useRedux';
import { disconnect } from '@/store/features/userSlice';
import BookIcon from '@/public/icons/menu/Book';

export default function NavLeft() {
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useAppDispatch();

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
          <Link href="/librairy">
            <BookIcon fill={pathname === '/librairy' ? '#b18b36' : '#000'} />
            <span className={pathname === '/librairy' ? style.active : '#000'}>
              Librairy
            </span>
          </Link>
          {pathname === '/librairy' ? <div></div> : ''}
        </li>
        <li>
          <Link href="/forum">
            <MessagesIcon fill={pathname === '/forum' ? '#b18b36' : '#000'} />
            <span className={pathname === '/forum' ? style.active : '#000'}>
              Forum
            </span>
          </Link>
          {pathname === '/forum' ? <div></div> : ''}
        </li>
      </ul>
      <div onClick={() => dispatch(disconnect())}>
        <Image
          src="/icons/menu/disconnect.svg"
          alt="home icon"
          height="24"
          width="25"
        />
        <span>Disconnect</span>
      </div>
    </nav>
  );
}
