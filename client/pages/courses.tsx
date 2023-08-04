import Header from '@/components/common/Header';
import style from '../styles/pages/listing.module.scss';
import CardContainerStyle from '../styles/components/CardContainer.module.scss';
import Button from '@/components/Button';
import Image from 'next/image';
import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';
import CourseCard from '@/components/CourseCard';
import ActivityCard from '@/components/ActivityCard';
import CompetitionCard from '@/components/CompetitionCard';
import ArticleCard from '@/components/ArticleCard';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import InstrumentIcon from "@/components/InstrumentIcon";
import FormField from "@/components/FormField";

export default function Dashboard() {
    const size = useWindowSize();
    const [widthContainerArticles, setWidthContainerArticles] = useState(0);

    useEffect(() => {
        handleResize();
    }, [size.width]);

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
        <div className={style.listing}>
            <Header name="Courses" />
            <CardContainer>
                <div className={CardContainerStyle.rowReverse}>
                    <div className={style.search}>
                        <div> input recherche</div>
                        <div className={style.filterButton}>
                            <Button size={'sm'}>Filter</Button>
                        </div>

                    </div>
                    <div> instrument filtre</div>
                </div>
                <div className={CardContainerStyle.rowReverse}>
                    <div className={style.desktop_filter}>
                        <div className={CardContainerStyle.column}>
                            <Card
                                title="Filter"
                                textLink=""
                                hrefLink=""
                            >
                                <input placeholder={"Professor"} type="Professor"/>
                                <input placeholder={"Composer"} type="Composer"/>
                                <input placeholder={"Subtitles languages"} type="Subtitles languages"/>
                                <input placeholder={"Sort by"} type="Sort by"/>
                                <div>
                                    <a href="">Undo Filter</a>
                                    <Button size={'sm'}>Filter</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card title="Courses" textLink="" hrefLink="">
                        <div className={style.grid_courses}>
                            <CourseCard
                                title="Fantasy in C"
                                professor="Robert Shumann"
                                difficulty={2}
                                actualChapter="Chap. 2"
                            />
                            <CourseCard
                                title="Fantasy in C"
                                professor="Robert Shumann"
                                difficulty={2}
                                actualChapter="Chap. 2"
                            />
                            <CourseCard
                                title="Fantasy in C"
                                professor="Robert Shumann"
                                difficulty={2}
                                actualChapter="Chap. 2"
                            />
                            <CourseCard
                                title="Fantasy in C"
                                professor="Robert Shumann"
                                difficulty={2}
                                actualChapter="Chap. 2"
                            />
                            <CourseCard
                                title="Fantasy in C"
                                professor="Robert Shumann"
                                difficulty={2}
                                actualChapter="Chap. 2"
                            />
                            <CourseCard
                                title="Fantasy in C"
                                professor="Robert Shumann"
                                difficulty={2}
                                actualChapter="Chap. 2"
                            />
                        </div>
                    </Card>
                </div>
            </CardContainer>
        </div>
    );
}
