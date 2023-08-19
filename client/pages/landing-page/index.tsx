import Expertise from './_Expertise';
import Hero from './_Hero';
import Nav from './_Nav';
import style from '../../styles/pages/landing-page/landingPage.module.scss';
import Statistics from './_Statistics';
import Suggestion from './_Suggestion';
import ComingSoon from './_ComingSoon';
import Link from 'next/link';
import ArrowRight from '@/public/icons/arrowRight';
import Partners from './_partners';
import Footer from './_Footer';
import FAQ from './_FAQ';

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
