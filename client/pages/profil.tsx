import Header from '@/components/common/Header';
import style from '../styles/pages/profil.module.scss';
import CardContainerStyle from '../styles/components/CardContainer.module.scss';
import BadgeInstrument from '@/components/BadgeInstrument';
import Button from '@/components/Button';
import CardContainer from '@/components/CardContainer';
import Card from '@/components/Card';
import ActivityCard from '@/components/molecules/ActivityCard';
import CourseCard from '@/components/CourseCard';
import CompetitionCard from '@/components/CompetitionCard';
import CapIcon from '@/public/icons/menu/Cap';
import VideoCard from '@/components/VideoCard';

export default function Profil() {
  return (
    <div className={style.profil}>
      <Header name="Profil" />
      <div className={style.general_infos}>
        <div>
          <div className={style.profil_pic}></div>
          <div className={style.name_and_instrument}>
            <h3>My name</h3>
            <div className={style.instrument}>
              <BadgeInstrument size="md" fill="#fff" instrument="piano" />
              <span>piano</span>
            </div>
          </div>
        </div>
        <div>
          <div className={style.stats}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Button size="sm">Edit profil</Button>
        </div>
      </div>
      <CardContainer>
        <Card
          className={style.video_card}
          style={{ gridColumn: '1/5' }}
          title="My videos"
          textLink="see all videos"
          hrefLink="/video"
        >
          <div className={style.videos_container}>
            <VideoCard
              title="Beethoven : Sonate pour piano n°1 chre..."
              duration="1'10"
              instrument="trombone"
              publicationDate={new Date('2023-08-14T13:12:00.838Z')}
            />
            <VideoCard
              title="Beethoven : Sonate pour piano n°1 chre..."
              duration="1'10"
              instrument="trombone"
              publicationDate={new Date('2023-08-14T13:12:00.838Z')}
            />
            <VideoCard
              title="Beethoven : Sonate pour piano n°1 chre..."
              duration="1'10"
              instrument="trombone"
              publicationDate={new Date('2023-08-14T13:12:00.838Z')}
            />
          </div>
        </Card>
        <Card style={{ gridColumn: '5/7' }} colorBg="black" title="My stats">
          <div className={style.stats_container}>
            <ul>
              <li>
                <CapIcon fill="#000" />
                <span>Courses</span>
                <span>12</span>
              </li>
              <li>
                <CapIcon fill="#000" />
                <span>Courses</span>
                <span>12</span>
              </li>
              <li>
                <CapIcon fill="#000" />
                <span>Courses</span>
                <span>12</span>
              </li>
            </ul>
            <div>
              <p>Total completion rate </p>
              <span>43%</span>
            </div>
          </div>
        </Card>
        <Card
          style={{ gridColumn: '1/5' }}
          title="My courses"
          textLink="see all courses"
          hrefLink="/courses"
        >
          <div className={style.courses_container}>
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
        <Card style={{ gridColumn: '1/5' }} title="My competitions">
          <div className={style.competitions_container}>
            <div className={style.competitions_card}>
              <CompetitionCard
                instrument="piano"
                title="The Queen Sonja International Music Competition"
                place="Oslo, Norway"
                date={new Date('2023-08-31T13:12:00.838Z')}
                award={50000}
              />
            </div>
          </div>
        </Card>
        <Card style={{ gridColumn: '5/7', gridRow: '2/4' }} title="My topics">
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
      </CardContainer>
    </div>
  );
}
