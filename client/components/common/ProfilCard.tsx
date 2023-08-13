import { RefObject } from 'react';
import style from '../../styles/components/common/ProfilCard.module.scss';
import ClickOutside from './ClickOutside';
import Link from 'next/link';

interface ProfilCardProps {
  clickOutside: (state: boolean) => void;
  btnExcept?: RefObject<HTMLElement>;
}

export default function ProfilCard({
  clickOutside,
  btnExcept,
}: ProfilCardProps) {
  return (
    <div className={style.profil_card}>
      <ClickOutside
        exceptionRef={btnExcept}
        onClick={() => clickOutside(false)}
      >
        <div className={style.container}>
          <ul>
            <li>
              <Link href="/profil">Voir le profil</Link>
            </li>
            <li>
              <a>Help & Support</a>
            </li>
          </ul>
        </div>
      </ClickOutside>
    </div>
  );
}
