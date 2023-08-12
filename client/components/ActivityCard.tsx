import Image from 'next/image';
import style from '../styles/components/ActivityCard.module.scss';
import InstrumentIcon from './InstrumentIcon';

type ActivityCardProps = {
  instrument:
    | 'cello'
    | 'chambre music'
    | 'clarinet'
    | 'flute'
    | 'oboe'
    | 'piano'
    | 'saxo'
    | 'trombone'
    | 'viola'
    | 'violin'
    | 'voice';
  title: string;
  author: string;
  creationDate: Date;
  authorLastMessage: string;
  timeLastMessage: Date;
};

export default function ActivityCard({
  instrument,
  title,
  author,
  creationDate,
  authorLastMessage,
  timeLastMessage,
}: ActivityCardProps) {
  const FormatDate = (date: Date) => {
    return date.toLocaleDateString('fr');
  };

  return (
    <div className={style.activity_card}>
      <div>
        <div className={style.icon}>
          {/* <Image
            src={`/icons/${instrument}.svg`}
            alt="icon instrument"
            height="10"
            width="11"
          /> */}
          <InstrumentIcon instrument={instrument} fill="#fff" />
        </div>
        <span>{title}</span>
      </div>
      <p>
        {author} · {FormatDate(creationDate)} · {authorLastMessage} replied{' '}
        {FormatDate(timeLastMessage)}
      </p>
      <div className={style.attendees}>
        <div></div>
        <span>3 attendees</span>
      </div>
    </div>
  );
}
