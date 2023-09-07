import Image from 'next/image';
import style from '../../styles/components/organisms/CompetitionCard.module.scss';
import MedalIcon from '@/public/icons/menu/Medal';
import { useEffect, useState } from 'react';
import BadgeInstrument from '../molecules/BadgeInstrument';
import {instruments} from "@/interfaces/InstrumentsInterface";
import TagDifficulty from "@/components/atoms/Tag";

type CompetitionCardProps = {
  instrument:instruments;
  title: string;
  place: string;
  date: Date;
  award: number;
  thumbnail: boolean;
  id?: number
};

export default function CompetitionCard({
  instrument,
  title,
  place,
  date,
  award,
  thumbnail
}: CompetitionCardProps) {
  const [countdown, setCountdown] = useState<string>('');

  function timestampToFormattedDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const calculateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = date.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        return 'The event has passed.';
      }

      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const updateCountdown = () => {
      const newCountdown = calculateCountdown();
      setCountdown(newCountdown);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {!thumbnail?(
      <div className={style.competition_card_without_thumbnail}>
        <div>
          <BadgeInstrument fill="#fff" instrument={instrument} size="md" />
          <span>{title}</span>
        </div>
        <div>
          <ul>
            <li>
              <Image
                src="/icons/others/ping.svg"
                alt="icon "
                height={16}
                width={16}
              />
              <span>{place}</span>
            </li>
            <li>
              <Image
                src="/icons/others/calendar.svg"
                alt="icon "
                height={16}
                width={16}
              />
              <span>{timestampToFormattedDate(date.getTime())}</span>
            </li>
            <li>
              <MedalIcon fill="#000" />
              <span>{award}</span>
            </li>
          </ul>
          <span className={style.countdown}>{countdown}</span>
        </div>
      </div>
      ):(
      <div className={style.competition_card_with_thumbnail}>
        <div className={style.thumbnail}>
          <BadgeInstrument fill="#fff" instrument={instrument} size="lg" />
        </div>
        <div className={style.description}>
          <div className={style.title_section}>
              <BadgeInstrument fill="#fff" instrument={instrument} size="md" />
              <span>{title}</span>
            </div>
          <div className={style.info_section}>
              <span>{place}</span>
              <span> - </span>
              <span>{timestampToFormattedDate(date.getTime())}</span>
              <span> - </span>
              <span>{award}</span>
            </div>
        </div>
      </div>)}
    </>
  );
}
