import Header from '@/components/common/Header';
import style from '../../styles/pages/listing.module.scss';
import Card from '@/components/molecules/Card';
import CardContainer from "@/components/molecules/CardContainer";
import {useEffect, useState } from 'react';
import FormFilter from "@/components/organisms/FormFilter";
import FilterSection from "@/components/organisms/FilterSection";
import axios from "axios";
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";
import CompetitionCard from "@/components/organisms/CompetitionCard";

interface FilterProps {
    instrument: string;
    professor: string;
    composer: string;
    subtitles_languages: string;
    sort_by: string;
    state: string;
    display: string;
}

interface CompetitionsProps {
    id:number;
    title: string;
    place:string;
    award: number;
    instrument : instrumentsProps;
    date: Date;

}

export default function Courses() {
    const [listCompetitions, setListCompetitions] = useState<CompetitionsProps[]>([
        {
            id: 1,
            title: "Compet piano",
            place: "France",
            award: 100,
            instrument: "cello",
            date: new Date('2023-09-19T09:00:00.838Z')
        },
        {
            id: 1,
            title: "Competition pianoaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            place: "France",
            award: 100,
            instrument: "cello",
            date: new Date('2023-09-19T09:00:00.838Z')
        },
        {
            id: 1,
            title: "Compet piano",
            place: "France",
            award: 100,
            instrument: "cello",
            date: new Date('2023-09-19T09:00:00.838Z')
        }
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

    return (
        <div className={style.list_page_content}>
            <Header name="Competitions" />
            <FilterSection setSelectedFilter={setSelectedFilter} filterFields={selectedFilter} haveFilter={true}/>
            <CardContainer>
                <Card title="Competitions"  style={{gridColumn: "1/5"}}>
                    <div className={style.list_cards}>
                        {listCompetitions.map((item, key) => (
                            <CompetitionCard
                                key={key}
                                id={item.id}
                                title={item.title}
                                place={item.place}
                                award={item.award}
                                date={item.date}
                                instrument={item.instrument}
                                thumbnail={true}
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
