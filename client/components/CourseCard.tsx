import Image from 'next/image';
import style from '../styles/components/CourseCard.module.scss';
import fonts from '../styles/fonts.module.scss';

type CourseCardProps = {
  title: string;
  professor: string;
  difficulty: number;
  actualChapter: string;
};

export default function CourseCard({
  title,
  professor,
  difficulty,
  actualChapter,
}: CourseCardProps) {
  const difficultyList = ['Easy', 'Medium', 'Hard'];

  return (
    <div className={style.course_card}>
      <div className={style.thumbnail}>
        <div className={style.instrument}>
          <Image
            src="/icons/piano.svg"
            alt="piano icon"
            height="16"
            width="16"
          />
        </div>
        <div className={style.progress_bar}>
          <div></div>
        </div>
      </div>
      <div className={style.description}>
        <div>
          <span className={fonts.paragraph_medium}>{title}</span>
          <span className={fonts.info_semi_bold}>{professor}</span>
        </div>
        <div>
          <span className={style.tag}>{difficultyList[difficulty]}</span>
          <span className={fonts.info_semi_bold}>{actualChapter}</span>
        </div>
      </div>
    </div>
  );
}
