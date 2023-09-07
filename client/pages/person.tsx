import Header from '../components/common/Header'
import style from '../styles/pages/person.module.scss'
import CardContainerStyle from '../styles/components/CardContainer.module.scss'
import BadgeInstrument from '../components/molecules/BadgeInstrument'
import TagUser from '../components/TagUser'
import Button from '../components/atoms/Button'
import CardContainer from '../components/molecules/CardContainer'
import Card from '../components/molecules/Card'
import ActivityCard from '../components/organisms/ActivityCard'
import CourseCard from '../components/organisms/CourseCard'
import ArticleCard from '../components/organisms/ArticleCard'
import CompetitionCard from '../components/organisms/CompetitionCard'
import CapIcon from '../public/icons/menu/Cap'
import VideoCard from '../components/organisms/VideoCard'
import { Instruments } from '../types/instruments'

export default function Person () {
  return (
    <div className={style.person}>
      <Header name='Svetlana Makarova' />
      <div className={style.hero_details}>
        <figure
          className={style.person_pic}
          style={{
            backgroundImage: `url(https://tse4.mm.bing.net/th?id=OIP.PiKTYKOuZn_6SQvrMOLpigHaFI&pid=Api)`,
            gridColumn: '1/3'
          }}
        />
        <div className={style.main_infos} style={{ gridColumn: '3/7' }}>
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
          {/* <CardContainer> */}
          <Card style={{ gridColumn: '3/7' }}>
            <div className={style.general_infos}>
              {/* <CardContainer> */}
                <div className={style.infos_details}>
                  <div className={style.tag_list}>
                    <TagUser size='sm'>Teacher</TagUser>
                    <TagUser size='sm'>Student</TagUser>
                  </div>
                  <span>Nationality: Russian</span>
                  <span>Instruments: Violin, Piano, Oboe</span>
                </div>
            </div>
          </Card>
          {/* </CardContainer> */}
        </div>
      </div>
      <CardContainer>
      
        <Card title='Participated academies' style={{ gridColumn: '1/3' }}>
          <div className={style.academies_card}>
            <div className={style.academy_details}>
              <span>
                Domaine Forget International Music & Dance Academy from august
                2nd to 5th 2022
              </span>
            </div>
            <div className={style.academy_details}>
              <span>
                Domaine Forget International Music & Dance Academy from august
                2nd to 5th 2022
              </span>
            </div>
            <hr />
          </div>
        </Card>
        <Card
          title='Related masterclasses'
          textLink='see all masterclasses'
          hrefLink=''
          style={{ gridColumn: '1/7' }}
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
          style={{ gridColumn: '1/7', gridRow: '3/4' }}
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
                thumbnail={false}
              />
              <CompetitionCard
                instrument={Instruments.Piano}
                title='The Queen Sonja International Music Competition'
                place='Oslo, Norway'
                date={new Date('2023-08-31T13:12:00.838Z')}
                award={50000}
                thumbnail={false}
              />
            </div>
          </div>
        </Card>
        <Card
          style={{ gridColumn: '1/7', gridRow: '4/4' }}
          title='Related articles'
        >
          <div className={style.related_articles_container}>
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <hr />
            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <hr />

            <ArticleCard
              instrument={Instruments.Piano}
              title='Where to listen classical music at Paris'
              author='parisoperafan'
              date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
            />
            <hr />
          </div>
        </Card>
      </CardContainer>
    </div>
  )
}
