import style from '../../styles/components/organisms/GroupCard.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import BadgeInstrument from '@/components/molecules/BadgeInstrument';
import Link from "next/link";
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";

type GroupCardProps = {
  id?: number;
  title: string;
  professor: string;
  instrument:instrumentsProps;
  date: string;
};

export default function GroupCard({
  id,
  title,
  professor,
  instrument,
  date,
}: GroupCardProps) {
  return (
    <Link className={style.course_card} href={id?("http://localhost:3000/groups/"+id):("")}>
      <div className={style.thumbnail}>
        <BadgeInstrument fill="#fff" instrument={instrument} size="lg" />
      </div>
      <div className={style.description}>
        <div>
          <div>
            <BadgeInstrument fill="#fff" instrument={instrument} size="md" />
            <span>{title}</span>
          </div>
          <span>{professor}</span>
        </div>
        <div>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}
