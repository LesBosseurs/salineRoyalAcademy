import style from '../styles/components/Card.module.scss';
import fonts from '../styles/fonts.module.scss';

interface CardProps {
  children: React.ReactNode;
  title: string;
  textLink: string;
  hrefLink: string;
}

export default function Card({
  children,
  title,
  textLink,
  hrefLink,
}: CardProps) {
  return (
    <section className={style.section}>
      <div className={style.header_card}>
        <h2 className={fonts.lead}>{title}</h2>
        <a href={hrefLink} className={fonts.paragraph_semi_bold}>
          {textLink}
        </a>
      </div>
      <div className={style.card}>{children}</div>
    </section>
  );
}
