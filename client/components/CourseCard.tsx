import Image from 'next/image';
import style from '../styles/components/CourseCard.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InstrumentIcon from './InstrumentIcon';

type CourseCardProps = {
  title: string;
  professor: string;
  difficulty: number;
  actualChapter: string | null;
  pourcentage?: number | null;

  type?: string | null;
};

export default function CourseCard({
  title,
  professor,
  difficulty,
  actualChapter,
  pourcentage,
  type,
}: CourseCardProps) {
  const difficultyList = ['Easy', 'Medium', 'Hard'];

  return (
    <div className={type!=null?style.course_card_row:style.course_card}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          <InstrumentIcon instrument="Piano" fill="#fff" />
        </div>
        {pourcentage ? (
          <div className={style.progress_bar}>
            <div style={{ width: `${pourcentage}%` }}></div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={style.description}>
        <div>
          <div>
            <div className={style.instrument}>
              <InstrumentIcon instrument="Piano" fill="#fff" />
            </div>
            <span>{title}</span>
          </div>
          <span>{professor}</span>
        </div>
        <div>
          {actualChapter ? <span>{actualChapter}</span> : ''}
          <span className={style.tag}>{difficultyList[difficulty]}</span>
        </div>
      </div>
      {pourcentage ? (
        <CircularProgressbar
          styles={buildStyles({
            textColor: '#000',
            pathColor: '#b18b36',
            trailColor: 'white',
          })}
          value={pourcentage}
          text={`${pourcentage}%`}
        />
      ) : (
        ''
      )}
    </div>
  );
}
