import style from '../../styles/components/molecules/FilterInstruments.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import BadgeInstrument from '@/components/molecules/BadgeInstrument';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {instruments} from "@/interfaces/InstrumentsInterface";
import 'swiper/css';
import 'swiper/css/navigation';

type FilterInstrumentsProps = {
  navigation: boolean,
}
export default function FilterInstruments({navigation}:FilterInstrumentsProps) {
  const windowSize = useWindowSize();

  const instrumentsList = [
    'cello',
    'chamber-music',
    'clarinet',
    'flute',
    'oboe',
    'piano',
    'trombone',
    'viola',
    'violin',
    'voice'
  ];

  let navigationOn;
  if(navigation){
    navigationOn = windowSize.width > 550;
  }else{
    navigationOn = navigation;
  }

  return (
    <div className={style.filter_instruments}>
        <div className={style.intruments_container}>
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            navigation={navigationOn}
            spaceBetween={15}
            className={`mySwiper ${style.slider_container}`}
          >
            {instrumentsList.map((instrument: any, key: number) => {
              return (
                <SwiperSlide className={style.card} key={key}>
                  <div key={key} className={style.instrument_card}>
                    <BadgeInstrument
                      fill="#fff"
                      instrument={instrument}
                      size="lg"
                    />
                    <span>{instrument}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    </div>
  );
}
