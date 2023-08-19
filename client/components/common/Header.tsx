import Image from 'next/image';
import style from '../../styles/components/common/Header.module.scss';
import NotificationsCard from './NotificationsCard';
import ProfilCard from './ProfilCard';
import { useRef, useState } from 'react';
import ArrowBackIcon from '@/public/icons/arrowBack';
import Link from 'next/link';

type HeaderProps = {
  name: string;
  hrefBack?: string;
};

export default function Header({ name, hrefBack }: HeaderProps) {
  const btnProfilRef = useRef<HTMLButtonElement>(null);
  const btnNotifsRef = useRef<HTMLButtonElement>(null);
  const [profilCardShow, setProfilCardShow] = useState<boolean>(false);
  const [notifsCardShow, setNotifsCardShow] = useState<boolean>(false);

  const handleNotifsButtonClick = () => {
    setNotifsCardShow(!notifsCardShow);
    setProfilCardShow(false);
  };

  const handleProfilButtonClick = () => {
    setProfilCardShow(!profilCardShow);
    setNotifsCardShow(false);
  };

  return (
    <nav className={style.header}>
      <div>
        {hrefBack ? (
          <>
            <Link href={hrefBack}>
              <ArrowBackIcon fill="#b18b36" />
            </Link>
            <span></span>
          </>
        ) : (
          ''
        )}
        <h1>{name}</h1>
      </div>
      <div className={style.button_container}>
        <button
          ref={btnNotifsRef}
          onClick={handleNotifsButtonClick}
          className={style.notifications}
        >
          <Image
            src="/icons/bell.svg"
            alt="bell icon for notifications button"
            width="24"
            height="24"
          />
        </button>
        <button
          ref={btnProfilRef}
          onClick={handleProfilButtonClick}
          className={style.profil}
        ></button>
      </div>
      {notifsCardShow && (
        <NotificationsCard
          btnExcept={btnNotifsRef}
          clickOutside={setNotifsCardShow}
        />
      )}
      {profilCardShow && (
        <ProfilCard btnExcept={btnProfilRef} clickOutside={setProfilCardShow} />
      )}
    </nav>
  );
}
