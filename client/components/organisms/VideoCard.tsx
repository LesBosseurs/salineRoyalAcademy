import style from '../../styles/components/organisms/VideoCard.module.scss';
import BadgeInstrument from '../molecules/BadgeInstrument';
import ButtonPlayIcon from '@/public/icons/videos/ButtonPlay';

type VideoCardProps = {
  title: string;
  duration: string;
  instrument:
    | 'Cello'
    | 'Chamber-music'
    | 'Clarinet'
    | 'Flute'
    | 'Oboe'
    | 'Piano'
    | 'Trombone'
    | 'Viola'
    | 'Violin'
    | 'Voice';
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
        <ButtonPlayIcon fill="#b18b36" />
        <BadgeInstrument size="lg" instrument={instrument} fill="#fff" />
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
