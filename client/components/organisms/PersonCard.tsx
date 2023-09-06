import style from '../../styles/components/organisms/PersonCard.module.scss';
import BadgeInstrument from "@/components/molecules/BadgeInstrument";
import Tag from '@/components/atoms/Tag';
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";
import Link from "next/link";

type types = 'Jury'|'Teacher'|'Composer';

type PersonCardProps = {
  id: number;
  instrument:instrumentsProps[];
  name: string;
  types:types[];
  description:string;
}

export default function PersonCard ({
  id,
  instrument,
  name,
  types,
  description,
  }: PersonCardProps){

  let type_card = types.includes('Composer')?"composers":"persons";

  return (
    <Link className={style.person_card} href={id?("http://localhost:3000/librairy/"+type_card+"/"+id):("")}>
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
            <span>{name}</span>
          </div>
          <div>
            {types.map((item, key)=>(
              <Tag key={key}>{item}</Tag>
            ))}
          </div>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
}