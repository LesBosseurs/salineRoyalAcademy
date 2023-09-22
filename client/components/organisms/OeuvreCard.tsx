import style from '../../styles/components/organisms/OeuvreCard.module.scss';
import BadgeInstrument from "@/components/molecules/BadgeInstrument";
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";
import Link from "next/link";

type OeuvreCardProps = {
  id: number;
  instrument:instrumentsProps[];
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
    <Link className={style.oeuvre_card} href={id?("/librairy/oeuvres/"+id):("")}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          <div className={style.badges_container}>
            {instrument.map((item, key)=>(
                <BadgeInstrument key={key} fill="#fff" instrument={item} size="lg" />
            ))}
          </div>
        </div>
      </div>
      <div className={style.description}>
        <div>
          <div>
            <div className={style.instrument}>
              <div className={style.badges_container}>
                {instrument.map((item, key)=>(
                    <BadgeInstrument key={key} fill="#fff" instrument={item} size="lg" />
                ))}
              </div>
            </div>
            <span>{title}</span>
          </div>
          <span>{composer}</span>
        </div>
      </div>
    </Link>
  );
}