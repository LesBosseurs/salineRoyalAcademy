import style from '../../styles/components/organisms/ActivityCard.module.scss';
import BadgeInstrument from '../molecules/BadgeInstrument';
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";
import Link from "next/link";

type ActivityCardProps = {
  id?: number;
  instrument:instrumentsProps;
  title: string;
  author: string;
  creationDate: Date;
  authorLastMessage: string;
  timeLastMessage: Date;
};

export default function ActivityCard({
  id,
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
    <Link className={style.activity_card} href={id?("http://localhost:3000/activities/"+id):("")}>
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
    </Link>
  );
}
