import style from '../../styles/components/organisms/ActivityCard.module.scss';
import BadgeInstrument from '../molecules/BadgeInstrument';

type ActivityCardProps = {
  instrument:
    | 'cello'
    | 'chamber-music'
    | 'clarinet'
    | 'flute'
    | 'oboe'
    | 'piano'
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
        <BadgeInstrument fill="#fff" instrument={instrument} size="md" />
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
