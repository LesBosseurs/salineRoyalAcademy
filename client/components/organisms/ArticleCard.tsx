import Image from 'next/image';
import style from '../../styles/components/organisms/ArticleCard.module.scss';
import BadgeInstrument from '../molecules/BadgeInstrument';
import {instruments} from "@/interfaces/InstrumentsInterface";
import Link from "next/link";

type ArticleCardProps = {
  id: number;
  instrument:instruments;
  title: string;
  author: string;
  date: Date;
};

export default function ArticleCard({
  id,
  instrument,
  title,
  author,
  date,
}: ArticleCardProps) {
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
    <Link className={style.article_card} href={id?("http://localhost:3000/articles/"+id):("")}>
      <div className={style.description}>
        <div className={style.author_desc}>
          <Image
            src="/prov/profile-picture.jpeg"
            alt="profil picture of author"
            width={20}
            height={20}
          />
          <span>{author}</span>
          <span>
            {author} · {formatDate(date)}
          </span>
        </div>
        <h3>{title}</h3>
        <div className={style.infos}>
          <span>{formatDate(date)}</span>
          <div>
            <BadgeInstrument fill="#fff" instrument={instrument} size="md" />
            <span>tag</span>
          </div>
        </div>
      </div>
      <div className={style.pic}>
        <BadgeInstrument fill="#fff" instrument={instrument} size="lg" />
      </div>
    </Link>
  );
}
