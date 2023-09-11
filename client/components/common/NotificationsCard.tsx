import { RefObject } from 'react';
import style from '../../styles/components/common/NotificationsCard.module.scss';
import ClickOutside from './ClickOutside';
import BadgesNotify from "@/components/organisms/BadgesNotify";


interface NotificationsCardProps {
  clickOutside: (state: boolean) => void;
  btnExcept?: RefObject<HTMLElement>;
}

export default function NotificationsCard({
  clickOutside,
  btnExcept,
}: NotificationsCardProps) {
  return (
    <div className={style.notifications_card}>
      <ClickOutside
        exceptionRef={btnExcept}
        onClick={() => clickOutside(false)}
      >
        <div className={style.container}>
          <BadgesNotify state={"new"}>Badge name</BadgesNotify>
          <BadgesNotify state={"upgrade"}>Badge name</BadgesNotify>
          <BadgesNotify state={"new"}>Badge name</BadgesNotify>
        </div>
      </ClickOutside>
    </div>
  );
}
