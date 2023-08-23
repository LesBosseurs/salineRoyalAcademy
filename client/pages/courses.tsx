import Header from '@/components/common/Header';
import style from '../styles/pages/listing.module.scss';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CourseCard from '@/components/CourseCard';
import CardContainer from "@/components/CardContainer";
import {SetStateAction, useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import FormField from '@/components/FormField';
import Modal from '@/components/Modal';
import axios from 'axios';
import Search from '@/public/icons/search';
import FormFilter from "@/components/FormFilter";

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
  const [widthContainerArticles, setWidthContainerArticles] =
    useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
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

  const handleOpen = (toggle: boolean) => {
    setOpenModal(toggle);
  };

  return (
    <div className={style.list_page_content}>
      <Header name="Courses" />
      <section className={style.section_filter}>
        <div className={style.search_and_filter_inputs}>
          <FormField
            label="search"
            type="search"
            sizeInput="md"
            placeholder="Search"
            icon={<Search fill={'#000'} />}
            value={selectedFilter}
            onChange={function (value) {
              setSelectedFilter(value);
            }}
          />
          <div
            className={style.filter_button}
            onClick={() => handleOpen(true)}
            style={openModal ? { zIndex: 0 } : { zIndex: 1 }}
          >
            <Button size={'sm'}>Filter</Button>
          </div>
          <Modal setOpenModal={handleOpen} open={openModal}>
            <FormFilter setSelectedFilter={setSelectedFilter} filterField={selectedFilter} />
          </Modal>
        </div>
        <FormField
          label="search"
          type="search"
          sizeInput="md"
          placeholder="Search instrument component"
          value={selectedFilter}
          onChange={function (value) {
            setSelectedFilter(value);
          }}
        />
      </section>
      <CardContainer>
        <div className={style.desktop_filter}>
          <Card title="Filter" >
            <FormFilter setSelectedFilter={setSelectedFilter} filterField={selectedFilter} />
          </Card>
        </div>
        <Card title="Courses">
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
      </CardContainer>
    </div>
  );
}
