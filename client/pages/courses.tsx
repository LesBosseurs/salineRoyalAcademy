import Header from '@/components/common/Header';
import style from '../styles/pages/listing.module.scss';
import CardContainerStyle from '../styles/components/CardContainer.module.scss';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';
import CourseCard from '@/components/CourseCard';
import {FormEvent, useEffect, useState} from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import FormField from "@/components/FormField";
import Modal from "@/components/Modal";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;
import axios from "axios";

interface FormFilter {
    instrument: string,
    professor: string,
    composer: string,
    subtitles_languages: string,
    sort_by: string,
    state: string,
    display: string
}

export default function Dashboard() {
    const size = useWindowSize();
    const [widthContainerArticles, setWidthContainerArticles] = useState(0);
    const [open, setOpen] = useState(false);
    const [course, setCourse] = useState([{
        "title":"Fantasy in C",
        "professor":"Robert Shumann",
        "difficulty":2,
        "actualChapter":"Chap. 2"},
        {
            "title":"tes1",
            "professor":"Robert Shumanna",
            "difficulty":2,
            "actualChapter":"Chap. 2"},
        {
            "title":"Fantasy in C",
            "professor":"Robert Shumanna",
            "difficulty":2,
            "actualChapter":"Chap. 2"},
        {
            "title":"Fantasy in C",
            "professor":"Robert Shumanna",
            "difficulty":2,
            "actualChapter":"Chap. 2"},
        {
            "title":"Fantasy in C",
            "professor":"Robert Shumann",
            "difficulty":2,
            "actualChapter":"Chap. 2"}]);

    const [filter, setFilter] = useState<FormFilter>({
        instrument: "",
        professor: "",
        composer: "",
        sort_by: "",
        state: "",
        subtitles_languages: "",
        display: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        //console.log(filter);
        setFilter({
            instrument: "",
            professor: "",
            composer: "",
            sort_by: "",
            state: "",
            subtitles_languages: "",
            display: "",
        });
    };

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
                            label="search"
                            type="search"
                            sizeInput="md"
                            placeholder="Search"
                            value={filter}
                            onChange={function (value) {
                                setFilter(value);
                            }}
                        />
                        <div className={style.filterButton} onClick={() => handleOpen(true)} style={open?{zIndex: 0}:{zIndex:1}}>
                            <Button size={'sm'} >Filter</Button>
                        </div>
                        <Modal setOpen={handleOpen} open={open}>
                            <form onSubmit={handleSubmit}>
                                <div className={style.mobile_filter_content}>
                                    <FormField
                                        label="professor"
                                        type="select"
                                        sizeInput="md"
                                        value={filter}
                                        onChange={function (value) {
                                            setFilter(value);
                                        }}
                                    />
                                    <FormField
                                        label="composer"
                                        type="select"
                                        sizeInput="md"
                                        value={filter}
                                        onChange={function (value) {
                                            setFilter(value);
                                        }}
                                    />
                                    <FormField
                                        label="subtitles_languages"
                                        type="select"
                                        sizeInput="md"
                                        value={filter}
                                        onChange={function (value) {
                                            setFilter(value);
                                        }}
                                    />
                                    <FormField
                                        label="sort_by"
                                        type="select"
                                        sizeInput="md"
                                        value={filter}
                                        onChange={function (value) {
                                            setFilter(value);
                                        }}
                                    />
                                    <FormField
                                        label="state"
                                        type="select"
                                        sizeInput="md"
                                        value={filter}
                                        onChange={function (value) {
                                            setFilter(value);
                                        }}
                                    />
                                    <FormField
                                        label="display"
                                        type="select"
                                        sizeInput="md"
                                        value={filter}
                                        onChange={function (value) {
                                            setFilter(value);
                                        }}
                                    />
                                </div>
                                <div className={style.mobile_submit_filter}>
                                    <a href="">Undo Filter</a>
                                    <Button size={'sm'} >Filter</Button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <FormField
                        label="Search instrument"
                        type="search"
                        sizeInput="md"
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
                            <form onSubmit={handleSubmit}>
                            <div className={style.desktop_filter}>
                                <FormField
                                    label="professor"
                                    type="select"
                                    sizeInput="md"
                                    value={filter}
                                    onChange={function (value) {
                                        setFilter(value);
                                    }}
                                />
                                <FormField
                                    label="composer"
                                    type="select"
                                    sizeInput="md"
                                    value={filter}
                                    onChange={function (value) {
                                        setFilter(value);
                                    }}
                                />
                                <FormField
                                    label="subtitles_languages"
                                    type="select"
                                    sizeInput="md"
                                    value={filter}
                                    onChange={function (value) {
                                        setFilter(value);
                                    }}
                                />
                                <FormField
                                    label="sort_by"
                                    type="select"
                                    sizeInput="md"
                                    value={filter}
                                    onChange={function (value) {
                                        setFilter(value);
                                    }}
                                />
                                <FormField
                                    label="state"
                                    type="select"
                                    sizeInput="md"
                                    value={filter}
                                    onChange={function (value) {
                                        setFilter(value);
                                    }}
                                />
                                <FormField
                                    label="display"
                                    type="select"
                                    sizeInput="md"
                                    value={filter}
                                    onChange={function (value) {
                                        setFilter(value);
                                    }}
                                />
                            </div>
                            <div className={style.mobile_submit_filter}>
                                <a href="">Undo Filter</a>
                                <div>
                                    <Button size={'sm'} >Filter</Button>
                                </div>
                            </div>
                            </form>
                        </Card>
                    </div>
                    <Card title="Courses" textLink="" hrefLink="">
                        <div className={style.grid_courses}>
                            {
                                course.map( (item) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <CourseCard
                                        title={item.title}
                                        professor={item.professor}
                                        difficulty={item.difficulty}
                                        actualChapter={item.actualChapter}
                                    />
                                ))
                            }
                        </div>
                    </Card>
                </div>
            </CardContainer>
        </div>
    );
}
