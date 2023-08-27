import Image from 'next/image';
import style from '../../styles/components/molecules/ChapterBlock.module.scss';
import BadgeInstrument from '../BadgeInstrument';

type ChapterBlockProps = {
  title: string;
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
  author: string;
  duration: string;
  timeViewed?: number;
};

export default function ChapterBlock({
  title,
  instrument,
  author,
  duration,
  timeViewed,
}: ChapterBlockProps) {
  return (
    <div className={style.chapter_block}>
      <Image
        src="/prov/profile-picture.jpeg"
        alt="Image Chapter"
        width={60}
        height={60}
      />
      <div>
        <h4>{title}</h4>
        <div>
          <BadgeInstrument fill="#fff" instrument={instrument} size="md" />
          <p>
            {author} · {duration}
          </p>
        </div>
        <div>
          <div className={style.progress_bar}>
            <div style={{ width: timeViewed + '%' }}></div>
          </div>
          <span>{timeViewed}%</span>
        </div>
      </div>
    </div>
  );
}
