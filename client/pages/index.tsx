import Expertise from './index/_Expertise';
import Hero from './index/_Hero';
import Nav from './index/_Nav';
import style from '../styles/pages/landing-page/landingPage.module.scss';
import Statistics from './index/_Statistics';
import Suggestion from './index/_Suggestion';
import ComingSoon from './index/_ComingSoon';
import Link from 'next/link';
import ArrowRight from '@/public/icons/arrowRight';
import FAQ from './index/_FAQ';
import Partners from './index/_partners';
import Footer from './index/_Footer';

export default function Home() {
  return (
    <div className={style.landingPage}>
      <Nav />
      <Hero />
      <Expertise />
      <Statistics />
      <Suggestion />
      <ComingSoon />
      <Link href="">
        <span></span>
        <span>JOIN US NOW</span>
        <ArrowRight fill={'#000'} />
      </Link>
      <FAQ />
      <Partners />
      <Footer />
    </div>
  );
}
