import Header from '@/components/common/Header';
import Card from '@/components/molecules/Card';
import CardContainer from '@/components/molecules/CardContainer';
import CourseCard from '@/components/organisms/CourseCard';
import style from '@/styles/pages/librairy/oeuvres/oeuvre.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Oeuvre() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={style.oeuvre}>
      <Header name="Oeuvre" hrefBack="/librairy/oeuvres" />
      <CardContainer>
        <div className={style.picture}></div>
        <div className={style.title}>
          <h2>Piano Sonata in A major</h2>
          <p>Titre alternatif : Piano Sonata No.14; Piano Sonata No.20</p>
        </div>
        <Card style={{ gridColumn: '4/7' }}>
          <ul className={style.infos}>
            <li>Compositeur : Franz Schubert</li>
            <li>Date de composition : Septembre 1828 </li>
            <li>Style : Romantic</li>
            <li>Durée approximative : 42 minutes</li>
            <li>Instrument : Violin, Piano</li>
          </ul>
        </Card>
        <Card
          title="Description"
          className={style.description}
          style={{ gridColumn: '1/7' }}
        >
          Beethoven composed his Piano Sonata No. 10 in G major between
          1798-1799, during his early period of composition. At this time, his
          style was still closely related to that of Haydn or Mozart, though he
          was already showing signs of his own innovative voice. The piece was
          dedicated to Baroness Josefa von Braun, whose husband was an important
          figure in Viennese musical society and thus someone Beethoven wished
          to impress. The first movement, Allegro, aims to obscure the location
          of the downbeat. Throughout the movement, the material is explored
          through frequently changing harmonies, quick passagework, and
          chromaticism, eventually landing at a coda that finally solidifies the
          rhythm. The second movement, Andante, is a theme and variations that
          builds in complexity. The movement seems to arrive at a gentle close
          before a final, shocking fortissimo chord strikes. The final movement,
          Scherzo: Allegro assai, demonstrates Haydn’s influence through its
          return to rhythmic confusion as well as playful silences and harmonic
          surprises, leading to quiet, almost humorous ending.
        </Card>
        <Card
          title="Related masterclasses"
          textLink="see all masterclasses"
          style={{ gridColumn: '1/7' }}
          className={style.grid_courses}
        >
          <Swiper
            navigation={true}
            slidesPerView={5}
            spaceBetween={15}
            modules={[Navigation]}
            className={`mySwiper ${style.slider_container}`}
          >
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CourseCard
                title="Fantasy in C"
                professor="Robert Shumann"
                instrument="piano"
                difficulty={2}
                actualChapter="Chap. 2"
                pourcentage={20}
              />
            </SwiperSlide>
          </Swiper>
        </Card>
        <Card
          title="Other oeuvres of Robert Shumann"
          style={{ gridColumn: '1/7' }}
        >
          Test
        </Card>
      </CardContainer>
    </div>
  );
}
