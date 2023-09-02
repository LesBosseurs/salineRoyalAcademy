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
import CompetitionCard from '@/components/CompetitionCard'
import CapIcon from '@/public/icons/cap'
import VideoCard from '@/components/VideoCard'
import { Instruments } from '../types/instruments'

export default function Person () {
  return (
    <div className={style.person}>
      <Header name='Person' />
      <div className={style.general_infos}>
        <figure
          className={style.person_pic}
          style={{
            backgroundImage: `url(https://tse4.mm.bing.net/th?id=OIP.PiKTYKOuZn_6SQvrMOLpigHaFI&pid=Api)`
          }}
        />
        <div className={style.name_and_instrument}>
          <div className={style.instrument_list}>
            <BadgeInstrument size='lg' fill='#fff' instrument={Instruments.Violin} />
            <BadgeInstrument size='lg' fill='#fff' instrument={Instruments.Piano} />
            <BadgeInstrument size='lg' fill='#fff' instrument={Instruments.Cello} />
          </div>
          <h3>Svetlana Makarova</h3>
        </div>
        <div className={style.tag_list}>
          <TagUser size='sm'>Teacher</TagUser>
          <TagUser size='sm'>Student</TagUser>
        </div>
        <div className={style.main_infos}>
          <span>Nationality: Russian</span>
          <span>Instruments: Violin, Piano, Oboe</span>
        </div>
      </div>
      <CardContainer>
        <Card style={{ gridColumn: '1/5' }} title='Participated academies'>
          <div className={style.participated_academies_container}>
            <div className={style.academies_card}>
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
          style={{ gridColumn: '5/7', gridRow: '1/4' }}
          title='Related masterclasses'
        >
          <div className={style.related_masterclasses_container}></div>
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
          style={{ gridColumn: '5/7', gridRow: '4/4' }}
          title='Related articles'
        >
          <div className={style.related_articles_container}>
            <div className={style.article_card}></div>
          </div>
        </Card>
      </CardContainer>
    </div>
  )
}
