
import useWindowSize from '@/hooks/useWindowSize';
import style from "@/styles/pages/listing.module.scss";
import Header from "@/components/common/Header";
import FilterSection from "@/components/organisms/FilterSection";
import CardContainer from "@/components/molecules/CardContainer";
import Card from "@/components/molecules/Card";
import OeuvreCard from "@/components/organisms/OeuvreCard";
import FormFilter from "@/components/organisms/FormFilter";
import {useState} from "react";

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
    | 'trombone'
    | 'viola'
    | 'violin'
    | 'voice';
  composer: string;
}
export default function Oeuvres() {
  const windowSize = useWindowSize();
  const [listOeuvres, setListOeuvres] = useState<OeuvreProps[]>([
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'oboe',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'cello',
      composer:'César Franck'
    },
    {
      title:'Violin Sonata',
      instrument: 'piano',
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

  console.log(windowSize);
  return (
    <div className={style.list_page_content}>
      <Header name="Oeuvres" />
      <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter} haveFilter={true}/>
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