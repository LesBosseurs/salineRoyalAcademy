import Header from '../../../../components/common/Header'
import style from '../../../../styles/pages/librairy/persons/person.module.scss'
import ComposerStyle from '../../../../styles/pages/librairy/composers/composers.module.scss'
import CardContainerStyle from '../../../../styles/components/CardContainer.module.scss'
import BadgeInstrument from '../../../../components/molecules/BadgeInstrument'
import TagUser from '../../../../components/TagUser'
import Button from '../../../../components/atoms/Button'
import CardContainer from '../../../../components/molecules/CardContainer'
import Card from '../../../../components/molecules/Card'
import ActivityCard from '../../../../components/organisms/ActivityCard'
import CourseCard from '../../../../components/organisms/CourseCard'
import ArticleCard from '../../../../components/organisms/ArticleCard'
import CompetitionCard from '../../../../components/organisms/CompetitionCard'
import CapIcon from '../../../../public/icons/menu/Cap'
import VideoCard from '../../../../components/organisms/VideoCard'
import { Instruments } from '../../../../types/instruments'

// Temporary datas --- about to be removed
import personData from '../../../../temporaryDatas/person.json'
import mcData from '../../../../temporaryDatas/masterclasses.json'
import articleData from '../../../../temporaryDatas/articles.json'
//

import { useRouter } from 'next/router'
import OeuvreCard from '@/components/organisms/OeuvreCard'

export default function Person () {
  //capitalize the first letter of each words of a string
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const getSlug = () => {
    const router = useRouter()
    const routes = router.asPath.split('/')
    for (let index = 0; index < routes.length; index++) {
      const slug = routes[index]
      switch (slug) {
        case 'composers':
          return 'composers'
        case 'persons':
          return 'persons'
        default:
          break
      }
    }
  }

  console.log(getSlug())

  return (
    <div className={`${style.person} ${ComposerStyle.composer}`}>
      <Header name='Svetlana Makarova' />
      <div className={`${style.hero_details} ${ComposerStyle.hero_details}`}>
        <figure
          className={style.person_pic}
          style={{
            backgroundImage: `url(${personData.image})`,
            gridColumn: '1/3'
          }}
        />
        <div className={style.main_infos}>
          <div className={style.name_and_instrument}>
            <div className={style.instrument_list}>
              {personData.instruments.map(instrument => {
                return (
                  <BadgeInstrument
                    size='lg'
                    fill='#fff'
                    instrument={instrument}
                  />
                )
              })}
            </div>
            <h3>
              {personData.first_name} {personData.last_name}
            </h3>
          </div>
          <Card>
            <div className={style.general_infos}>
              <div className={style.infos_details}>
                <div className={style.tag_list}>
                  {personData.type.map(type => {
                    return (
                      <TagUser size='sm'>{capitalizeFirstLetter(type)}</TagUser>
                    )
                  })}
                </div>
                <span>Nationality: Russian</span>
                <span>
                  Instruments:{' '}
                  {personData.instruments.map(instrument => {
                    return capitalizeFirstLetter(instrument) + ' '
                  })}
                </span>
              </div>
            </div>
          </Card>
        </div>
        <Card className={style.card_description}>
          <div className={style.description}>
            <input
              type='checkbox'
              className={style.readMoreState}
              id='post-1'
            />

            <p>{personData.description}</p>
            <label htmlFor='post-1' className={style.readMoreTrigger}></label>
          </div>
        </Card>

        {getSlug() === 'composers' ? (
          <>
            <Card className={ComposerStyle.card_main_dates}>
              <div className={ComposerStyle.main_dates} >
                <div className={ComposerStyle.date_group}>
                  <span className={ComposerStyle.label}>Born</span>
                  <span className={ComposerStyle.date}>June 8th 1810</span>
                </div>
                <div className={ComposerStyle.date_group}>
                  <span className={ComposerStyle.label}>Death</span>
                  <span className={ComposerStyle.date} >July 29th 1856</span>
                </div>
              </div>
            </Card>
          </>
        ) : (
          <Card title='Participated academies' className={style.card_academies}>
            <div className={style.academies_card}>
              {personData.academies.map(academy => {
                return (
                  <div className={style.academy_details}>
                    <span>{academy}</span>
                  </div>
                )
              })}
              <hr />
            </div>
          </Card>
        )}
      </div>
      <CardContainer>
        {/* Related Masterclasses Section */}
        <Card
          title='Related masterclasses'
          textLink='see all masterclasses'
          hrefLink=''
          style={{ gridColumn: '1/7' }}
        >
          <div className={style.related_masterclasses_container}>
            {mcData.map(masterclass => {
              return (
                <CourseCard
                  title={masterclass.titre}
                  professor={masterclass.teacher}
                  instruments={masterclass.instruments}
                  difficulty={masterclass.difficulty}
                  image={masterclass.image}
                />
              )
            })}
          </div>
        </Card>
        {getSlug() === 'composers' ? (
          <>
            <Card style={{ gridColumn: '1/7', gridRow: '3/4' }}>
              <div className={ComposerStyle.related_oeuvres_container}>
                <OeuvreCard
                  title={'title'}
                  id={1}
                  instrument={['violin']}
                  composer='Composer'
                  image={''}
                />
                <OeuvreCard
                  title={'title'}
                  id={1}
                  instrument={['violin']}
                  composer='Composer'
                  image={''}
                />
              </div>
            </Card>
          </>
        ) : (
          <>
            {/* Related Competitions Section */}
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
            {/* Related Articles Section */}
            <Card
              style={{ gridColumn: '1/7', gridRow: '4/4' }}
              title='Related articles'
            >
              <div className={style.related_articles_container}>
                {articleData.map(article => {
                  return (
                    <ArticleCard
                      instruments={article.instruments}
                      title={article.title}
                      author={article.author}
                      date={new Date('Thu Jul 06 2023 19:41:21 GMT+0200')}
                      image={article.image}
                    />
                  )
                })}
                <hr />
              </div>
            </Card>
          </>
        )}
      </CardContainer>
    </div>
  )
}
