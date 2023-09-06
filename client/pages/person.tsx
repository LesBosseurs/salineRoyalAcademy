import Header from '@/components/common/Header'
import style from '../styles/pages/person.module.scss'
import CardContainerStyle from '../styles/components/CardContainer.module.scss'
import BadgeInstrument from '@/components/BadgeInstrument'
import TagUser from '@/components/TagUser'
import Button from '@/components/Button'
import CardContainer from '@/components/CardContainer'
import Card from '@/components/Card'
import ActivityCard from '@/components/ActivityCard'
import CourseCard from '@/components/CourseCard'
import ArticleCard from '@/components/ArticleCard'
import CompetitionCard from '@/components/CompetitionCard'
import CapIcon from '@/public/icons/cap'
import VideoCard from '@/components/VideoCard'
import { Instruments } from '../types/instruments'

export default function Person () {
  return (
    <div className={style.person}>
      <Header name='Svetlana Makarova' />
      <CardContainer>
        {/* <Card> */}
        <div className={style.general_infos}>
          {/* <Card> */}
          <figure
            className={style.person_pic}
            style={{
              backgroundImage: `url(https://tse4.mm.bing.net/th?id=OIP.PiKTYKOuZn_6SQvrMOLpigHaFI&pid=Api)`
            }}
          />
          {/* </Card> */}
          <div className={style.name_and_instrument}>
            <div className={style.instrument_list}>
              <BadgeInstrument
                size='lg'
                fill='#fff'
                instrument={Instruments.Violin}
              />
              <BadgeInstrument
                size='lg'
                fill='#fff'
                instrument={Instruments.Piano}
              />
              <BadgeInstrument
                size='lg'
                fill='#fff'
                instrument={Instruments.Cello}
              />
            </div>
            <h3>Svetlana Makarova</h3>
          </div>
          <Card textLink='' hrefLink=''>
            <div className={style.infos_details}>
              <div className={style.tag_list}>
                <TagUser size='sm'>Teacher</TagUser>
                <TagUser size='sm'>Student</TagUser>
              </div>
              {/* <div className={style.main_infos}> */}
              <span>Nationality: Russian</span>
              <span>Instruments: Violin, Piano, Oboe</span>
            </div>
            {/* </div> */}
          </Card>
        </div>
        {/* </Card> */}
          <Card style={{ gridColumn: '1' }} title='Participated academies'>
            {/* <div className={style.academies_card}> */}
              <CompetitionCard
                instrument={Instruments.Piano}
                title='The Queen Sonja International Music Competition'
                place='Oslo, Norway'
                date={new Date('2023-08-31T13:12:00.838Z')}
                award={50000}
              />
            {/* </div> */}
          </Card>
        <Card
          style={{ gridColumn: '1', gridRow: '1/4' }}
          title='Related masterclasses'
          textLink='see all masterclasses'
          hrefLink=''
        >
          <div className={style.related_masterclasses_container}>
            <CourseCard
              title='Fantasy in C'
              professor='Robert Shumann'
              instrument={Instruments.Piano}
              difficulty={2}
              actualChapter='Chap. 2'
              pourcentage={20}
            />
            <CourseCard
              title='Fantasy in C'
              professor='Robert Shumann'
              instrument={Instruments.Piano}
              difficulty={2}
              actualChapter='Chap. 2'
              pourcentage={20}
            />
            <CourseCard
              title='Fantasy in C'
              professor='Robert Shumann'
              instrument={Instruments.Piano}
              difficulty={2}
              actualChapter='Chap. 2'
              pourcentage={20}
            />
          </div>
        </Card>
        <Card
          style={{ gridColumn: '5/7', gridRow: '3/4' }}
          title='Related competitions'
        >
          <div className={style.related_competitions_container}>
            <div className={style.competitions_card}>
              <CompetitionCard
                instrument={Instruments.Piano}
                title='The Queen Sonja International Music Competition'
                place='Oslo, Norway'
                date={new Date('2023-08-31T13:12:00.838Z')}
                award={50000}
              />
            </div>
          </div>
        </Card>
        <Card
          style={{ gridColumn: '1', gridRow: '4/4' }}
          title='Related articles'
        >
          <div className={style.related_articles_container}>
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
          </div>
        </Card>
      </CardContainer>
    </div>
  )
}
