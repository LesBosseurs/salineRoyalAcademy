import style from '../../styles/components/organisms/PersonCard.module.scss';
import BadgeInstrument from "@/components/molecules/BadgeInstrument";
import Tag from '@/components/atoms/Tag';


type instruments =
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

type types = 'Jury'|'Teacher'|'Composer';

type PersonCardProps = {
  id: number;
  instrument:instruments[];
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
  return (
    <a className={style.person_card} href={id?("http://localhost:3000/librairy/juries/"+id):("")}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          {instrument.map((item, key)=>(
            <BadgeInstrument key={key} fill="#fff" instrument={item} size="lg" />
          ))}
        </div>
      </div>
      <div className={style.description}>
        <div>
          <div>
            <div className={style.instrument}>
              {instrument.map((item, key)=>(
                <BadgeInstrument key={key} fill="#fff" instrument={item} size="lg" />
              ))}
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
    </a>
  );
}