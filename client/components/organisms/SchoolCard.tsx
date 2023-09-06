import style from '../../styles/components/organisms/SchoolCard.module.scss';
import Link from "next/link";

type SchoolCardProps = {
  id: number;
  name: string;
  director:string;
}

export default function SchoolCard ({
  id,
  name,
  director
}: SchoolCardProps){
  return (
      <Link className={style.person_card} href={id?("/schools/"+id):("")}>
        <div className={style.thumbnail}>
        </div>
        <div className={style.description}>
          <div>
            <span>{name}</span>
            <span>{director}</span>
          </div>
        </div>
      </Link>
  );
}