import style from '../../styles/components/OeuvreCard.module.scss';
import BadgeInstrument from "@/components/molecules/BadgeInstrument";

type OeuvreCardProps = {
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
    </div>
  );
}