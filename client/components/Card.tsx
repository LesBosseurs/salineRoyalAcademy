import Link from 'next/link';
import style from '../styles/components/Card.module.scss';

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
        <h2>{title}</h2>
        <Link href={hrefLink}>{textLink}</Link>
      </div>
      <div className={style.card}>{children}</div>
    </section>
  );
}
