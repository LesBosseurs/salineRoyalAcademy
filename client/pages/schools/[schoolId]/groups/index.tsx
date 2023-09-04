import Header from '@/components/common/Header';
import style from '../../../../styles/pages/listing.module.scss';
import Card from '@/components/molecules/Card';
import CardContainer from "@/components/molecules/CardContainer";
import { useState } from 'react';
import {instruments} from "@/interfaces/InstrumentsInterface";
import GroupCard from "@/components/organisms/GroupCard";

interface GroupsProps {
  id:number;
  title: string;
  instrument:instruments;
  professor: string;
  dates: string;
}

export default function Groups() {
  const [listGroups, setListGroups] = useState<GroupsProps[]>([
    {
      id:1,
      title: 'HETIC1',
      instrument: 'cello',
      professor: 'Robert Shumann',
      dates: '18/03/23 - 24/03/23',
    },
    {
      id:2,
      title: 'SRA01',
      instrument: 'voice',
      professor: 'Barnabas Kelemen',
      dates: '18/03/23 - 24/03/23',
    },
    {
      id:3,
      title: 'SRA03',
      instrument: 'violin',
      professor: 'Robert Shumanna',
      dates: '18/03/23 - 24/03/23',
    },
    {
      id:4,
      title: 'SRA04',
      instrument: 'trombone',
      professor: 'Barnabas Kelemen',
      dates: '18/03/23 - 24/03/23',
    },
    {
      id:5,
      title: 'SRA05',
      instrument: 'piano',
      professor: 'Robert Shumann',
      dates: '18/03/23 - 24/03/23',
    },
  ]);

  return (
    <div className={style.list_page_content}>
      <Header name="Groups" />
      <CardContainer>
        <Card title="Groups"  style={{gridColumn: "1/7"}}>
          <div className={style.list_cards}>
            {listGroups.map((item, key) => (
              <GroupCard
                key={key}
                id={item.id}
                title={item.title}
                instrument={item.instrument}
                professor={item.professor}
                date={item.dates}
              />
            ))}
          </div>
        </Card>
      </CardContainer>
    </div>
  );
}
