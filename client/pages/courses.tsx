import Header from '@/components/common/Header';
import style from '../styles/pages/listing.module.scss';
import Card from '@/components/Card';
import CourseCard from '@/components/CourseCard';
import CardContainer from "@/components/CardContainer";
import {useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import FormFilter from "@/components/FormFilter";
import FilterSection from "@/components/FilterSection";

interface FilterProps {
  instrument: string;
  professor: string;
  composer: string;
  subtitles_languages: string;
  sort_by: string;
  state: string;
  display: string;
}

interface CourseProps {
  id: number;
  title: string;
  instrument:
    | 'cello'
    | 'chamber-music'
    | 'clarinet'
    | 'flute'
    | 'oboe'
    | 'piano'
    | 'saxo'
    | 'trombone'
    | 'viola'
    | 'violin'
    | 'voice';
  professor: string;
  difficulty: number;
  actualChapter: string;
  percentage?: number;
}

export default function Dashboard() {
  const size = useWindowSize();
  const [widthContainerArticles, setWidthContainerArticles] = useState<number>(0);
  const [listCourses, setListCourses] = useState<CourseProps[]>([
    {
      id: 1,
      title: 'Fantasy in C',
      instrument: 'cello',
      professor: 'Robert Shumann',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id: 2,
      title: 'tes1',
      instrument: 'cello',
      professor: 'Robert Shumanna',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id: 3,
      title: 'Fantasy in C',
      instrument: 'cello',
      professor: 'Robert Shumanna',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id: 4,
      title: 'Fantasy in C',
      instrument: 'cello',
      professor: 'Robert Shumanna',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id: 5,
      title: 'Fantasy in C',
      instrument: 'cello',
      professor: 'Robert Shumann',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState<FilterProps>({
    instrument: '',
    professor: '',
    composer: '',
    sort_by: '',
    state: '',
    subtitles_languages: '',
    display: '',
  });

  useEffect(() => {
    handleResize();
  }, [size.width]);

  /*useEffect( () => {
      axios.get('/user?ID=12345')
          .then(function (response) {
              // handle success
              //console.log(response);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
      //TODO GET_all_courses
      setCourse();
  },[]);

  useEffect( () => {
      //TODO axios filter_courses
      //setCourse()
  }, [filter]);*/

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
    <div className={style.list_page_content}>
      <Header name="Courses" />
      <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter}/>
      <CardContainer>
        <Card title="Courses"  style={{gridColumn: "1/5"}}>
          <div className={style.list_cards}>
            {listCourses.map((item, key) => (
              <CourseCard
                key={key}
                title={item.title}
                instrument={item.instrument}
                professor={item.professor}
                difficulty={item.difficulty}
                actualChapter={item.actualChapter}
              />
            ))}
          </div>
        </Card>
        <div className={style.desktop_filter}>
          <Card title="Filter" >
            <FormFilter setSelectedFilter={setSelectedFilter} filterFields={selectedFilter} />
          </Card>
        </div>
      </CardContainer>
    </div>
  );
}
