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
        <Card style={{ gridColumn: '3/7' }}>
          <div className={style.description}>
          <input type="checkbox" className={style.readMoreState} id="post-1" />

            <p>
              Svetlana Makarova TF Svetlana Makarova VIOLIN Born in Moscow,
              violinist Svetlana Makarova won first prize in the Moscow
              International Youth Tchaikovsky Competition at the age of just
              ten, and thereafter received many other awards. After gaining her
              master’s degree and postgraduate diploma as well as her PhD with
              Maya Glezarova at Moscow Conservatory, in 2008 she was invited by
              Lorin Maazel to join the orchestra of Palau de Les Arts Reina
              Sofía in Spain. An artist in popular demand, Svetlana Makarova
              regularly performs at major international festivals such as the
              Verbier Festival, the Kuhmo Chamber Music Festival, the Miyazaki
              Shrine Grand Festival and the Paganiniana Festival. She has played
              in halls including Zurich’s Tonhalle, the La Scala, La Fenice and
              La Pergola opera houses, the Auditorio Nacional de Música in
              Madrid, the Seoul Arts Center and Moscow’s Tchaikovsky Concert
              Hall. Chamber music plays an important role in her musical career,
              and has led her to work with respected artists such as Frans
              Helmerson, Pavel Vernikov, Natalia Gutman, Gilles Apap and Patrick
              Demenga. As an established soloist she has performed with renowned
              orchestras including the Lithuanian Chamber Orchestra, Kremerata
              Baltica, Württembergische Philharmonie Reutlingen, South-west
              German Chamber Orchestra Pforzheim, the Valencia Orchestra, the
              Korean Soloists Orchestra, Moscow Philharmonic Orchestra and the
              Odessa State Symphony Orchestra. In addition to performing,
              Svetlana Makarova conveys her experience to the next generation as
              a teacher. Prior to becoming a professor at the Haute Ecole de
              Musique de Lausanne in 2014, she taught at institutions including
              Gnessin State Musical College (Moscow), Scuola di Musica di
              Fiesole (Florence) and at Lieceu Conservatory (Barcelona).
              Furthermore, she gives numerous masterclasses in Italy, France,
              Switzerland, Austria, Germany, Russia, Japan, Korea and China. As
              a respected teacher, she is regularly invited to sit on the juries
              of international competitions. Svetlana Makarova plays a violin by
              Niccolò Gagliano dating from 1745.
            </p>
            <label htmlFor="post-1" className={style.readMoreTrigger}></label>
          </div>
        </Card>
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
