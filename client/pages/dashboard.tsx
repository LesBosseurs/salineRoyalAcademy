import Header from '@/components/common/Header';
import style from '../styles/pages/dashboard.module.scss';
import CardContainerStyle from '../styles/components/CardContainer.module.scss';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import Card from '@/components/molecules/Card';
import CardContainer from '@/components/molecules/CardContainer';
import CourseCard from '@/components/organisms/CourseCard';
import ActivityCard from '@/components/organisms/ActivityCard';
import CompetitionCard from '@/components/organisms/CompetitionCard';
import ArticleCard from '@/components/organisms/ArticleCard';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

export default function Dashboard() {
  const size = useWindowSize();
  const [widthContainerArticles, setWidthContainerArticles] = useState(0);

  useEffect(() => {
    handleResize();
  }, [size.width]);

  const handleResize = () => {
    if (window.innerWidth - 340 > 1440) {
      setWidthContainerArticles(1440);
    } else if (window.innerWidth > 768) {
      setWidthContainerArticles(window.innerWidth - 340);
    } else {
      setWidthContainerArticles(window.innerWidth - 70);
    }
  };

  return (
    <div className={style.dashboard}>
      <Header name="Dashboard" />
      <CardContainer>
        <section style={{ gridColumn: '1/7' }} className={style.card_premium}>
          <div>
            <div>
              <h2>Go Premium</h2>
              <p>Explore 100+ courses with our professors</p>
            </div>
            <Button size={size.width > 425 ? 'md' : 'sm'}>Start now</Button>
          </div>
          <Image
            src="/img/musician_saxo.png"
            alt="a musician with a saxo"
            height="550"
            width="450"
          />
          <div className={style.first_line}></div>
          <div className={style.second_line}></div>
          <div className={style.third_line}></div>
        </section>
        <Card
          style={{ gridColumn: '1/5', gridRow: '2/4' }}
          title="My courses"
          textLink="See all courses"
          hrefLink=""
        >
          <div className={style.grid_courses}>
            <CourseCard
              title="Fantasy in C"
              professor="Robert Shumann"
              instrument="piano"
              difficulty={2}
              actualChapter="Chap. 2"
              pourcentage={20}
            />
            <CourseCard
              title="Fantasy in C"
              professor="Robert Shumann"
              instrument="piano"
              difficulty={2}
              actualChapter="Chap. 2"
              pourcentage={20}
            />
            <CourseCard
              title="Fantasy in C"
              professor="Robert Shumann"
              instrument="piano"
              difficulty={2}
              actualChapter="Chap. 2"
              pourcentage={20}
            />
            <CourseCard
              title="Fantasy in C"
              professor="Robert Shumann"
              instrument="piano"
              difficulty={2}
              actualChapter="Chap. 2"
              pourcentage={20}
            />
            <CourseCard
              title="Fantasy in C"
              professor="Robert Shumann"
              instrument="piano"
              difficulty={2}
              actualChapter="Chap. 2"
              pourcentage={20}
            />
            <CourseCard
              title="Fantasy in C"
              professor="Robert Shumann"
              instrument="piano"
              difficulty={2}
              actualChapter="Chap. 2"
              pourcentage={20}
            />
          </div>
        </Card>
        <Card
          style={{ gridColumn: '5/7' }}
          title="Last Activities"
          textLink="See all activities"
          hrefLink=""
        >
          <div className={style.activity_container}>
            <ActivityCard
              instrument="piano"
              title="Bach Invention 10 in G major"
              author="parisoperafan"
              creationDate={new Date('2023-01-22T13:06:58.838Z')}
              authorLastMessage="fire-clarinet"
              timeLastMessage={new Date('2023-06-03T13:06:58.838Z')}
            />
            <ActivityCard
              instrument="piano"
              title="Bach Invention 10 in G major"
              author="parisoperafan"
              creationDate={new Date('2023-01-22T13:06:58.838Z')}
              authorLastMessage="fire-clarinet"
              timeLastMessage={new Date('2023-06-03T13:06:58.838Z')}
            />
          </div>
        </Card>
        <Card
          style={{ gridColumn: '5/7' }}
          title="Next Competition"
          textLink="See all competitions"
          hrefLink=""
        >
          <CompetitionCard
            instrument="piano"
            title="The Queen Sonja International Music Competition"
            place="Oslo, Norway"
            date={new Date('2023-09-18T09:00:00.838Z')}
            award={50000}
          />
        </Card>
        <Card
          style={{ gridColumn: '1/7' }}
          title="Articles Recommandations"
          textLink="See all articles"
          hrefLink=""
        >
          <div
            style={{ width: `${widthContainerArticles}px` }}
            className={style.scrollable}
          >
            <div className={style.articles_container}>
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
              <ArticleCard
                instrument="piano"
                title="Where to listen classical music at Paris"
                author="parisoperafan"
                date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
              />
            </div>
          </div>
        </Card>
      </CardContainer>
    </div>
  );
}
