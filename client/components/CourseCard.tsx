import Image from 'next/image';
import style from '../styles/components/CourseCard.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InstrumentIcon from './InstrumentIcon';
import TagDifficulty from './Tag';

type CourseCardProps = {
  title: string;
  professor: string;
  instrument:
    | 'cello'
    | 'chamber-music'
    | 'clarinet'
    | 'flute'
    | 'oboe'
    | 'piano'
    | 'saxo'
    | 'trombone'
    | 'viola'
    | 'violin'
    | 'voice';
  difficulty: number;
  actualChapter: string | null;
  pourcentage?: number | null;
};

export default function CourseCard({
  title,
  professor,
  instrument,
  difficulty,
  actualChapter,
  pourcentage,
}: CourseCardProps) {
  return (
    <div className={style.course_card}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          <InstrumentIcon instrument={instrument} fill="#fff" />
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
              <InstrumentIcon instrument={instrument} fill="#fff" />
            </div>
            <span>{title}</span>
          </div>
          <span>{professor}</span>
        </div>
        <div>
          {actualChapter ? <span>{actualChapter}</span> : ''}
          <TagDifficulty difficulty={difficulty} />
          {/* <span className={style.tag}>{difficultyList[difficulty]}</span> */}
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
