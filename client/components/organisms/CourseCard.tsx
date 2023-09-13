import style from '../../styles/components/organisms/CourseCard.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import TagDifficulty from '@/components/atoms/Tag'
import BadgeInstrument from '@/components/molecules/BadgeInstrument'
import Link from 'next/link'
import { instruments } from '../../interfaces/InstrumentsInterface'

type CourseCardProps = {
  id?: number
  title: string
  professor: string
  instruments: []
  difficulty: 0 | 1 | 2
  actualChapter: string
  pourcentage?: number
  image: string
}

export default function CourseCard ({
  id,
  title,
  professor,
  instruments,
  difficulty,
  actualChapter,
  pourcentage,
  image
}: CourseCardProps) {
  return (
    <Link
      className={style.course_card}
      href={id ? 'http://localhost:3000/courses/' + id : ''}
    >
      <div
        className={style.thumbnail}
        style={{ backgroundImage: `url(${image})` }}
      >
        {instruments?.map(instrument => {
          return (
            <BadgeInstrument fill='#fff' instrument={instrument} size='lg' />
          )
        })}
        {pourcentage ? (
          <div className={style.progress_bar}>
            <div style={{ width: `${pourcentage}%` }}></div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={style.description}>
        <div>
          <div>
            {instruments?.map(instrument => {
              return (
                <BadgeInstrument
                  fill='#fff'
                  instrument={instrument}
                  size='md'
                />
              )
            })}
            <span>{title}</span>
          </div>
          <span>{professor}</span>
        </div>
        <div>
          {actualChapter ? <span>{actualChapter}</span> : ''}
          <TagDifficulty difficulty={difficulty} />
          {/* <span className={style.tag}>{difficultyList[difficulty]}</span> */}
        </div>
      </div>
      {pourcentage ? (
        <CircularProgressbar
          styles={buildStyles({
            textColor: '#000',
            pathColor: '#b18b36',
            trailColor: 'white'
          })}
          value={pourcentage}
          text={`${pourcentage}%`}
        />
      ) : (
        ''
      )}
    </Link>
  )
}
