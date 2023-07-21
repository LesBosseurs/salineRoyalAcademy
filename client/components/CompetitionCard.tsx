import Image from 'next/image';
import style from '../styles/components/CompetitionCard.module.scss';
import MedalIcon from '@/public/icons/medal';

type CompetitionCardProps = {
  instrument: string;
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
  return (
    <div className={style.competition_card}>
      <div>
        <div className={style.icon}>
          <Image
            src={`/icons/${instrument}.svg`}
            alt="icon instrument"
            height={10}
            width={11}
          />
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
            <span>{/* date */}</span>
          </li>
          <li>
            <MedalIcon fill="#000" />
            <span>{award}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
