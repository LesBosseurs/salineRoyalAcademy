import style from "@/styles/pages/listing.module.scss";
import Header from "@/components/common/Header";
import FilterSection from "@/components/organisms/FilterSection";
import CardContainer from "@/components/molecules/CardContainer";
import Card from "@/components/molecules/Card";
import FormFilter from "@/components/organisms/FormFilter";
import {useState} from "react";
import PersonCard from "@/components/organisms/PersonCard";
import {instruments} from "@/interfaces/InstrumentsInterface";
interface FilterProps {
  instrument: string;
  composer: string;
  year: string;
  style: string;
}

type types = 'Jury'|'Teacher'|'Composer';

type PersonCardProps = {
  id: number;
  instrument:instruments[];
  name: string;
  types:types[];
  description:string;
}
export default function Composers() {
  const [listPersons, setListPersons] = useState<PersonCardProps[]>([
    {
      id: 1,
      instrument: ['violin', 'piano'],
      name:'Svetlana Makarova',
      types:['Composer'],
      description:'In 1987 he won First Prize in the Jean-Pierre Rampal International Competition in Paris.',
    },
    {
      id: 2,
      instrument: ['violin'],
      name:'Svetlana Makarova',
      types:['Composer'],
      description:'In 1987 he won First Prize in the Jean-Pierre Rampal International Competition in Paris.',
    },
    {
      id: 3,
      instrument: ['violin'],
      name:'Svetlana Makarova',
      types:['Composer'],
      description:'In 1987 he won First Prize in the Jean-Pierre Rampal International Competition in Paris.',
    },
    {
      id: 4,
      instrument: ['violin'],
      name:'Svetlana Makarova',
      types:['Composer'],
      description:'In 1987 he won First Prize in the Jean-Pierre Rampal International Competition in Paris.',
    }
  ]);

  const [selectedFilter, setSelectedFilter] = useState<FilterProps>({
    instrument: '',
    composer: '',
    year: '',
    style: '',
  });

  return (
    <div className={style.list_page_content}>
      <Header name="Composers" />
      <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter} haveFilter={true}/>
      <CardContainer>
        <Card title="Composers" style={{gridColumn: "1/5"}}>
          <div className={style.list_cards}>
            {listPersons.map((item, key) => (
              <PersonCard
                key={key}
                id={item.id}
                instrument={item.instrument}
                name={item.name}
                description={item.description}
                types={item.types}
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