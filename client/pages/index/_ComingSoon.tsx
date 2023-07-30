import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../styles/pages/landing-page/landingPage.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ComingSoonCard from './_ComingSoonCard';
import { useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

type ComingSoonCardProps = {
  instrument: string;
  title: string;
  text: string;
};

export default function ComingSoon() {
  const size = useWindowSize();

  const [newsList, setNewsList] = useState<Array<ComingSoonCardProps>>([
    {
      instrument: 'Piano',
      title: 'Miriam Fried',
      text: 'Professor of violin at New England Conservatory in  England',
    },
    {
      instrument: 'Piano',
      title: 'Miriam Fried',
      text: 'Professor of violin at New England Conservatory in  England',
    },
    {
      instrument: 'Piano',
      title: 'Miriam Fried',
      text: 'Professor of violin at New England Conservatory in  England',
    },
    {
      instrument: 'Piano',
      title: 'Miriam Fried',
      text: 'Professor of violin at New England Conservatory in  England',
    },
    {
      instrument: 'Piano',
      title: 'Miriam Fried',
      text: 'Professor of violin at New England Conservatory in  England',
    },
  ]);

  return (
    <section className={style.coming_soon}>
      <div className={style.coming_soon_container}>
        <div>
          <h2>Coming soon - 2023</h2>
          <Swiper
            slidesPerView={size.width > 550 ? 3 : 1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={`mySwiper ${style.slider_container}`}
          >
            {newsList.map((element: ComingSoonCardProps, key: number) => {
              return (
                <SwiperSlide className={style.card} id={`${key}`}>
                  <ComingSoonCard
                    instrument={element.instrument}
                    title={element.title}
                    text={element.text}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </div>
    </section>
  );
}
