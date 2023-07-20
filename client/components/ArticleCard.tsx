import Image from 'next/image';
import style from '../styles/components/ArticleCard.module.scss';

type ArticleCardProps = {
  instrument: string;
  title: string;
  author: string;
  date: Date;
};

export default function ArticleCard({
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
    <div className={style.article_card}>
      <div className={style.pic}>
        <div>
          <Image
            src={`/icons/${instrument}.svg`}
            alt="instrument icon"
            height={16}
            width={18}
          />
        </div>
      </div>
      <p>{title}</p>
      <div>
        <Image
          src="/prov/profile-picture.jpeg"
          alt="profil picture of author"
          width={20}
          height={20}
        />
        <p>
          <span>{author}</span> · <span>{formatDate(date)}</span>
        </p>
      </div>
    </div>
  );
}
