import style from "@/styles/pages/listing.module.scss";
import Header from "@/components/common/Header";
import FilterSection from "@/components/organisms/FilterSection";
import CardContainer from "@/components/molecules/CardContainer";
import Card from "@/components/molecules/Card";
import OeuvreCard from "@/components/organisms/OeuvreCard";
import FormFilter from "@/components/organisms/FormFilter";
import {useState} from "react";
import {instruments} from "@/interfaces/InstrumentsInterface";

interface FilterProps {
  instrument: string;
  composer: string;
  year: string;
  style: string;
}

interface OeuvreProps {
  id: number;
  title: string;
  instrument: instruments[];
  composer: string;
}
export default function Oeuvres() {
  const [listOeuvres, setListOeuvres] = useState<OeuvreProps[]>([
    {
      id: 1,
      title:'Violin Sonata',
      instrument: ['cello', 'piano'],
      composer:'César Franck'
    },
    {
      id: 2,
      title:'Violin Sonata',
      instrument: ['cello'],
      composer:'César Franck'
    },
    {
      id: 3,
      title:'Violin Sonata',
      instrument: ['cello'],
      composer:'César Franck'
    },
    {
      id: 4,
      title:'Violin Sonata',
      instrument:['cello'],
      composer:'César Franck'
    },
    {
      id: 5,
      title:'Violin Sonata',
      instrument: ['cello'],
      composer:'César Franck'
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState<FilterProps>({
    instrument: '',
    composer: '',
    year: '',
    style: '',
  });

  return (
    <div className={style.list_page_content}>
      <Header name="Oeuvres" />
      <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter} haveFilter={true}/>
      <CardContainer>
        <Card title="Oeuvres" style={{gridColumn: "1/5"}}>
          <div className={style.list_cards}>
            {listOeuvres.map((item, key) => (
              <OeuvreCard
                key={key}
                id={item.id}
                instrument={item.instrument}
                title={item.title}
                composer={item.composer}
              />
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