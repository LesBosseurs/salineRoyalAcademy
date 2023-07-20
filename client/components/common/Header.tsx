import Image from 'next/image';
import style from '../../styles/components/common/Header.module.scss';

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  return (
    <header className={style.header}>
      <h1>{name}</h1>
      <div>
        <button className={style.notifications}>
          <Image
            src="/icons/bell.svg"
            alt="bell icon for notifications button"
            width="24"
            height="24"
          />
        </button>
        <button className={style.profil}></button>
      </div>
    </header>
  );
}
