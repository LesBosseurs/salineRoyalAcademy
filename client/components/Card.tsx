import Link from 'next/link';
import styleFile from '../styles/components/Card.module.scss';
import useWindowSize from '@/hooks/useWindowSize';

interface CardProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  title: string;
  colorBg?: 'white' | 'black';
  textLink?: string;
  hrefLink?: string;
}

export default function Card({
  style,
  children,
  title,
  colorBg = 'white',
  textLink,
  hrefLink,
}: CardProps) {
  const size = useWindowSize();

  const colorBackgroundValue = {
    white: '#fff',
    black: '#252525',
  };

  return (
    <section
      style={size.width > 1024 ? style : { gridColumn: '1/7' }}
      className={styleFile.section}
    >
      <div className={styleFile.header_card}>
        <h2>{title}</h2>
        {hrefLink ? <Link href={hrefLink}>{textLink}</Link> : ''}
      </div>
      <div
        className={styleFile.card}
        style={{ backgroundColor: colorBackgroundValue[colorBg] }}
      >
        {children}
      </div>
    </section>
  );
}
