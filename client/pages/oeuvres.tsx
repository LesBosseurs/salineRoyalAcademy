import Header from '@/components/common/Header';
import style from '../styles/pages/listing.module.scss';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import CardContainer from "@/components/CardContainer";
import FormFilter from "@/components/FormFilter";
import OeuvreCard from "@/components/OeuvreCard";
import FilterSection from "@/components/FilterSection";

interface FilterProps {
  instrument: string;
  composer: string;
  year: string;
  style: string;
}

interface OeuvreProps {
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
  composer: string;
}

export default function Dashboard() {
  const size = useWindowSize();
  const [widthContainerArticles, setWidthContainerArticles] = useState<number>(0);
  const [listOeuvres, setListOeuvres] = useState<OeuvreProps[]>([
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState<FilterProps>({
    instrument: '',
    composer: '',
    year: '',
    style: '',
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
      <Header name="Oeuvres" />
      <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter}/>
      <CardContainer>
        <Card title="Courses" style={{gridColumn: "1/5"}}>
          <div className={style.list_cards}>
            {listOeuvres.map((item, key) => (
              <OeuvreCard key={key} instrument={item.instrument} title={item.title} composer={item.composer}/>
            ))}
          </div>
        </Card>
        <div className={style.desktop_filter}>
          <Card title="Filter">
            <FormFilter filterFields={selectedFilter} setSelectedFilter={setSelectedFilter}/>
          </Card>
        </div>
      </CardContainer>
    </div>
  );
}
