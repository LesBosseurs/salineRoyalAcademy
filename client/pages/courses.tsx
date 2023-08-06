import Header from '@/components/common/Header';
import style from '../styles/pages/listing.module.scss';
import CardContainerStyle from '../styles/components/CardContainer.module.scss';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';
import CourseCard from '@/components/CourseCard';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import FormField from "@/components/FormField";
import Modal from "@/components/Modal";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;

export default function Dashboard() {
    const size = useWindowSize();
    const [widthContainerArticles, setWidthContainerArticles] = useState(0);
    const [open, setOpen] = useState(false);

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

    const handleOpen = (toggle) => {
        setOpen(toggle)
    }

    console.log(open);
    return (
        <div className={style.listing}>
            <Header name="Courses" />
            <CardContainer>
                <div className={CardContainerStyle.rowReverse}>
                    <div className={style.search}>
                        <FormField
                            label="Search"
                            type="search"
                            size="md"
                            value=""
                        />
                        <div className={style.filterButton} onClick={() => handleOpen(true)} style={open?{zIndex: 0}:{zIndex:1}}>
                            <Button size={'sm'} >Filter</Button>
                        </div>
                        <Modal setOpen={handleOpen} open={open}>
                            <div className={style.mobile_filter_content}>
                                <FormField
                                    label="Professor"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="Composer"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="Composer"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="State"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="Display"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                            </div>
                            <div className={style.mobile_submit_filter}>
                                <a href="">Undo Filter</a>
                                <Button size={'sm'}>Filter</Button>
                            </div>
                        </Modal>
                    </div>
                    <FormField
                        label="Search instrument"
                        type="search"
                        size="md"
                        value=""
                    />
                </div>
                <div className={CardContainerStyle.rowReverse}>
                    <div className={style.desktop_filter}>
                        <Card
                            title="Filter"
                            textLink=""
                            hrefLink=""
                        >
                            <div className={style.mobile_filter_content}>
                                <FormField
                                    label="Professor"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="Composer"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="Composer"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="State"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                                <FormField
                                    label="Display"
                                    type="select"
                                    size="md"
                                    value=""
                                />
                            </div>
                            <div className={style.mobile_submit_filter}>
                                <a href="">Undo Filter</a>
                                <Button size={'sm'}>Filter</Button>
                            </div>
                        </Card>

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
