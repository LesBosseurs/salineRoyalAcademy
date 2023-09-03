import style from '../../styles/components/organisms/OeuvreCard.module.scss';
import BadgeInstrument from "@/components/molecules/BadgeInstrument";

type OeuvreCardProps = {
  id: number;
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
  title: string;
  composer:string;
}

export default function OeuvreCard ({
  id,
  title,
  instrument,
  composer,
}: OeuvreCardProps){
  return (
    <a className={style.oeuvre_card} href={id?("http://localhost:3000/librairy/oeuvre/"+id):("")}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          <BadgeInstrument fill="#fff" instrument={instrument} size="lg" />
        </div>
      </div>
      <div className={style.description}>
        <div>
          <div>
            <div className={style.instrument}>
              <BadgeInstrument fill="#fff" instrument={instrument} size="lg" />
            </div>
            <span>{title}</span>
          </div>
          <span>{composer}</span>
        </div>
      </div>
    </a>
  );
}