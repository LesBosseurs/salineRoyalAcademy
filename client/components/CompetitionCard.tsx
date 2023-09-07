import Image from 'next/image';
import style from '../styles/components/CompetitionCard.module.scss';
import MedalIcon from '../public/icons/menu/Medal';
import InstrumentIcon from './atoms/InstrumentIcon';
import { useEffect, useState } from 'react';
import { instruments } from '@/interfaces/InstrumentsInterface';

type CompetitionCardProps = {
  instrument: instruments, 
  title: string;
  place: string;
  date: Date;
  award: number;
};

export default function CompetitionCard({
  instrument,
  title,
  place,
  date,
  award,
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
    <div className={style.competition_card}>
      <div>
        <div className={style.icon}>
          <InstrumentIcon instrument={instrument} fill="#fff" />
        </div>
        <span>{title}</span>
      </div>
      <div>
        <ul>
          <li>
            <Image src="/icons/ping.svg" alt="icon " height={16} width={16} />
            <span>{place}</span>
          </li>
          <li>
            <Image
              src="/icons/calendar.svg"
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
  );
}
