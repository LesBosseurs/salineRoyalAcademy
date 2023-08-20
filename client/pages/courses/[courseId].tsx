import Header from '@/components/common/Header';
import axios from 'axios';
import style from '../../styles/pages/courses/course.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardContainer from '@/components/CardContainer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import BadgeInstrument from '@/components/BadgeInstrument';
import Link from 'next/link';
import CapRoundedIcon from '@/public/icons/others/CapRounded';
import DownloadIcon from '@/public/icons/others/Download';

interface MasterclassProps {
  title: string;
}

export default function Course() {
  const router = useRouter();
  const { courseId } = router.query;

  const [masterclass, setMasterclass] = useState<MasterclassProps>({
    title: 'Loading...',
  });

  useEffect(() => {
    if (!courseId) {
      return;
    }
    axios({
      method: 'GET',
      url: '/api/getMasterclassById',
      params: {
        id: courseId,
      },
    }).then((res) => setMasterclass(res.data.data));
  }, [courseId]);

  return (
    <div className={style.course_page}>
      <Header name="Course" hrefBack="/courses" />
      <CardContainer>
        <div className={style.header}>
          <h2>{masterclass.title}</h2>
          <Button size="xs">See all chapters</Button>
        </div>
        <Card title="Chapitre 1 | Beethoven : Sonate pour piano n°1">
          <div className={style.player}>
            <div>
              <span>published 2h ago</span>
              <Tag difficulty={1} />
            </div>
            <video src=""></video>
            <div>
              <BadgeInstrument fill="#fff" size="lg" instrument="piano" />
              <Tag>Charles Gounod</Tag>
              <Tag>English</Tag>
              <Tag>15min</Tag>
            </div>
          </div>
        </Card>
        <Card title="Description">
          <div className={style.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum consectetur libero id faucibus...
            </p>
            <Link href="/">See more...</Link>
          </div>
        </Card>
        <Card title="What we learn">
          <ul className={style.future_knowledge}>
            <li>
              <CapRoundedIcon fill="#000" />
              <span>Dosing the length of the notes.</span>
            </li>
            <li>
              <CapRoundedIcon fill="#000" />
              <span>Capturing the character of the piece.</span>
            </li>
            <li>
              <CapRoundedIcon fill="#000" />
              <span>Knowing when and where to take risks.</span>
            </li>
          </ul>
        </Card>
        <Card title="Content/ressources">
          <DownloadIcon fill="#000" />
          <span>Test</span>
        </Card>
        <Card>
          <span>Test</span>
        </Card>
        <Card>
          <span>Test</span>
        </Card>
        <Card>
          <span>Test</span>
        </Card>
      </CardContainer>
    </div>
  );
}
