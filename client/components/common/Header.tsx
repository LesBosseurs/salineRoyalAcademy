import Image from 'next/image';
import style from '../../styles/components/common/Header.module.scss';
import NotificationsCard from './NotificationsCard';
import ProfilCard from './ProfilCard';
import { useRef, useState } from 'react';
import ClickOutside from './ClickOutside';

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
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
      <h1>{name}</h1>
      <div>
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
