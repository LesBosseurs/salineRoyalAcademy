import PianoIcon from '@/public/icons/piano';
import style from '../../styles/pages/landing-page/landingPage.module.scss';
import InstrumentIcon from '@/components/InstrumentIcon';
import CourseCard from '@/components/CourseCard';
import Link from 'next/link';
import ArrowRight from '@/public/icons/arrowRight';
import { useRef } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

export default function Suggestion() {
  const heightListCourses = useRef<HTMLInputElement>(null);
  const size = useWindowSize();

  const instrumentsList = [
    'Piano',
    'Violin',
    'Cello',
    'Voice',
    'Viola',
    'Clarinet',
    'Flute',
    'Oboe',
    'Chambre music',
    'Trombone',
  ];

  console.log(heightListCourses);

  return (
    <section className={style.suggestion}>
      <h2>What instrument do you play?</h2>
      <div className={style.carousel_instruments}>
        <div className={style.intruments_container}>
          {instrumentsList.map((instrument: string) => {
            return (
              <div className={style.instrument_card}>
                <div>
                  <InstrumentIcon fill="#fff" instrument={instrument} />
                </div>
                <span>{instrument}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.courses_container}>
        <div>
          <div
            style={
              size.width > 768
                ? {
                    minWidth:
                      (heightListCourses.current?.offsetHeight || 300) / 1.5,
                  }
                : {}
            }
            className={style.pic}
          ></div>
          <h3>Gerard Poulet</h3>
          <h4>Violin teacher</h4>
        </div>
        <div ref={heightListCourses} className={style.courses}>
          <div className={style.head_courses_container}>
            <h3>Gerard Poulet</h3>
            <div>
              <h4>Violin teacher</h4>
              <a>See all courses from this teacher</a>
            </div>
          </div>
          <div className={style.courses_container}>
            <CourseCard
              title="Fantasy in C No"
              professor="Gerard Poulet"
              difficulty={2}
              actualChapter=""
              pourcentage={null}
            />
            <CourseCard
              title="Fantasy in C No"
              professor="Gerard Poulet"
              difficulty={2}
              actualChapter=""
              pourcentage={null}
            />
            <CourseCard
              title="Fantasy in C No"
              professor="Gerard Poulet"
              difficulty={2}
              actualChapter=""
              pourcentage={null}
            />
            <CourseCard
              title="Fantasy in C No"
              professor="Gerard Poulet"
              difficulty={2}
              actualChapter=""
              pourcentage={null}
            />
            <CourseCard
              title="Fantasy in C No"
              professor="Gerard Poulet"
              difficulty={2}
              actualChapter=""
              pourcentage={null}
            />
            <CourseCard
              title="Fantasy in C No"
              professor="Gerard Poulet"
              difficulty={2}
              actualChapter=""
              pourcentage={null}
            />
          </div>
          <Link href="">
            <span></span>
            <span>VIEW ALL VIOLIN LESSONS</span>
            <ArrowRight fill={'#000'} />
          </Link>
        </div>
        <Link href="">
          <span></span>
          <span>VIEW ALL VIOLIN LESSONS</span>
          <ArrowRight fill={'#000'} />
        </Link>
      </div>
    </section>
  );
}
