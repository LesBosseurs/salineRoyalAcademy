import Image from 'next/image';
import style from '../styles/components/VideoCard.module.scss';
import InstrumentIcon from './InstrumentIcon';
import BadgeInstrument from './BadgeInstrument';

type VideoCardProps = {
  title: string;
  duration: string;
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
  publicationDate: Date;
};

export default function VideoCard({
  title,
  duration,
  instrument,
  publicationDate,
}: VideoCardProps) {
  function formatDate(dateString: Date) {
    var date = new Date(dateString);
    var now = new Date();
    var timeDiff = Math.abs(now.getTime() - date.getTime());
    if (timeDiff < 24 * 60 * 60 * 1000) {
      var hours = Math.floor(timeDiff / (60 * 60 * 1000));
      var minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
      return hours + 'h ' + minutes + 'min';
    } else {
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      return month + '/' + day + '/' + year;
    }
  }

  return (
    <div className={style.video_card}>
      <div className={style.thumbnail}>
        <Image
          height={32}
          width={32}
          src={'/icons/button-play.png'}
          alt="Button play"
        />
        <div className={style.instrument}>
          <BadgeInstrument size="lg" instrument={instrument} fill="#fff" />
        </div>
      </div>
      <div className={style.description}>
        <h3>{title}</h3>
        <p>
          Adelie Quantin · {duration} · {formatDate(publicationDate)}
        </p>
      </div>
    </div>
  );
}
