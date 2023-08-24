import style from '../styles/components/OeuvreCard.module.scss';
import InstrumentIcon from "@/components/InstrumentIcon";

type OeuvreCardProps = {
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
  title: string;
  composer:string;
}

export default function OeuvreCard ({
  title,
  instrument,
  composer,
}: OeuvreCardProps){
  return (
    <div className={style.oeuvre_card}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          <InstrumentIcon instrument={instrument} fill="#fff" />
        </div>
      </div>
      <div className={style.description}>
        <div>
          <div>
            <div className={style.instrument}>
              <InstrumentIcon instrument={instrument} fill="#fff" />
            </div>
            <span>{title}</span>
          </div>
          <span>{composer}</span>
        </div>
      </div>
    </div>
  );
}