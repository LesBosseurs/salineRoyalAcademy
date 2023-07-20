import style from '../../styles/pages/landing-page/landingPage.module.scss';
import Link from 'next/link';
import ArrowRight from '@/public/icons/arrowRight';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';

export default function Hero() {
  const size = useWindowSize();

  return (
    <section className={style.hero}>
      <div>
        <div>
          <div>
            <h1>Your music</h1>
            <h1>Journey</h1>
            <h1>Begins now</h1>
          </div>
          <Link href="">
            <span className={style.circle}></span>
            <span>JOIN US</span>
            <ArrowRight fill={size.width > 425 ? '#000' : '#fff'} />
          </Link>
        </div>
        <Image src="/img/musician_saxo.png" alt="" width={750} height={450} />
        <div>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </div>
      <div>
        <Image
          src="/img/musician_banner.png"
          alt="musician banner"
          width={725}
          height={900}
        />
      </div>
    </section>
  );
}
