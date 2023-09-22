import Header from '@/components/common/Header';
import style from '../../styles/pages/listing.module.scss';
import Card from '@/components/molecules/Card';
import CourseCard from '@/components/organisms/CourseCard';
import CardContainer from "@/components/molecules/CardContainer";
import {useEffect, useState } from 'react';
import FormFilter from "@/components/organisms/FormFilter";
import FilterSection from "@/components/organisms/FilterSection";
import axios from "axios";
import {instruments} from "@/interfaces/InstrumentsInterface";

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
  id:number;
  title: string;
  instrument:instruments[];
  professor: string;
  difficulty: 0 | 1 | 2;
  actualChapter: string;
  percentage?: number;
}

export default function Courses() {
  const [listCourses, setListCourses] = useState<CourseProps[]>([
    {
      id:1,
      title: 'Fantasy in C',
      instrument: ['cello'],
      professor: 'Robert Shumann',
      difficulty: 0,
      actualChapter: 'Chap. 2',
    },
    {
      id:2,
      title: 'tes1',
      instrument: ['cello'],
      professor: 'Robert Shumanna',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id:3,
      title: 'Fantasy in C',
      instrument: ['cello'],
      professor: 'Robert Shumanna',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id:4,
      title: 'Fantasy in C',
      instrument: ['cello'],
      professor: 'Robert Shumanna',
      difficulty: 2,
      actualChapter: 'Chap. 2',
    },
    {
      id:5,
      title: 'Fantasy in C',
      instrument: ['cello'],
      professor: 'Robert Shumann',
      difficulty: 2,
      actualChapter: 'Chap. 2',
      percentage: 10,
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
    axios({
      method: 'GET',
      url: '/api/getAllMasterclass',
    }).then((res) => {
      setListCourses(res.data.data);
      console.log({listCourses});
    });
  });

  return (
    <div className={style.list_page_content}>
      <Header name="Courses" />
      <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter} haveFilter={true}/>
      <CardContainer>
        <Card title="Courses"  style={{gridColumn: "1/5"}}>
          <div className={style.list_cards}>
            {listCourses.map((item, key) => (
              <CourseCard
                key={key}
                id={item.id}
                title={item.title}
                instrument={item.instrument[0]}
                professor={'Robert Shumann'}
                difficulty={0}
                actualChapter={item.actualChapter}
                pourcentage={item.percentage}
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
