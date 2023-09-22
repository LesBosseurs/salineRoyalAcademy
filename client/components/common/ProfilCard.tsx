import { RefObject } from 'react';
import style from '../../styles/components/common/ProfilCard.module.scss';
import ClickOutside from './ClickOutside';
import Link from 'next/link';
import {disconnect} from "@/store/features/userSlice";
import Image from "next/image";
import {useAppDispatch} from "@/hooks/useRedux";

interface ProfilCardProps {
  clickOutside: (state: boolean) => void;
  btnExcept?: RefObject<HTMLElement>;
}

export default function ProfilCard({
  clickOutside,
  btnExcept,
}: ProfilCardProps) {
  const dispatch = useAppDispatch();
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
            <li>
              <div onClick={() => dispatch(disconnect())} className={style.disconnect}>
                <Image
                  src="/icons/menu/disconnect.svg"
                  alt="home icon"
                  height="24"
                  width="25"
                />
                <span>Disconnect</span>
              </div>
            </li>
          </ul>
        </div>
      </ClickOutside>
    </div>
  );
}
