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
import Image from 'next/image';
import QuoteIcon from '@/public/icons/others/Quote';

interface MasterclassProps {
  title: string;
}

export default function Course() {
  const router = useRouter();
  const { id } = router.query;

  const [masterclass, setMasterclass] = useState<MasterclassProps>({
    title: 'Loading...',
  });
  const [modalChaptersOpen, setModalChaptersOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios({
      method: 'GET',
      url: '/api/getMasterclassById',
      params: {
        id: id,
      },
    }).then((res) => setMasterclass(res.data.data));
  }, [id]);

  return (
    <div className={style.course_page}>
      <Header name="Course" hrefBack="/courses" />
      <CardContainer>
        <div className={style.header}>
          <h2>{masterclass.title}</h2>
          <Button size="xs" onClick={() => setModalChaptersOpen(true)}>
            See all chapters
          </Button>
        </div>
        <Card
          title="Chapitre 1 | Beethoven : Sonate pour piano n°1"
          style={{ gridColumn: '1/5' }}
        >
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
        <Card style={{ gridColumn: '1/5', gridRow: '3/5' }} title="Description">
          <div className={style.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum consectetur libero id faucibus...
            </p>
            <span>See more...</span>
          </div>
        </Card>
        <Card style={{ gridColumn: '1/3' }} title="What we learn">
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
        <Card style={{ gridColumn: '3/5' }} title="Content/ressources">
          <div className={style.ressources}>
            <DownloadIcon fill="#000" />
            <Image
              width={100}
              height={40}
              alt="ressources image"
              src="/prov/partoch.png"
            />
          </div>
        </Card>
        <Card style={{ gridColumn: '5/7', gridRow: '3/4' }}>
          <div className={style.quote}>
            <QuoteIcon fill="#989595" />
            <p>
              When you know what you play, colors come naturally and you don’t
              have to make it happen.
            </p>
            <span>Adelie Quantin</span>
            <QuoteIcon fill="#989595" />
          </div>
        </Card>
        <Card style={{ gridColumn: '5/7', gridRow: '4/5' }}>
          <div className={style.professor}>
            <div>
              <Image
                alt="professor photo"
                src="/prov/profile-picture.jpeg"
                height={40}
                width={40}
              />
              <div>
                <h4>Adelie Quantin</h4>
                <span>Australian</span>
              </div>
            </div>
            <div>
              <div className={style.badges_container}>
                <BadgeInstrument size="md" fill="#fff" instrument="piano" />
                <BadgeInstrument size="md" fill="#fff" instrument="violin" />
                <BadgeInstrument size="md" fill="#fff" instrument="voice" />
              </div>
              <Link href="/profil">See profil</Link>
            </div>
          </div>
        </Card>
        <Card style={{ gridColumn: '5/7' }}>
          <div className={style.infos}>
            <ul>
              <li>Composer : Charles Gounod</li>
              <li>Student : Victor Bufferne</li>
              <li>Published : 2h ago</li>
              <li>Approximate duration : 15min</li>
              <li>Instrument : Piano</li>
              <li>Producer : Produced by the Saline royale Academy</li>
              <li>Spoken language : English</li>
            </ul>
            <div>
              <div>
                <div className={style.attendees_pics}>
                  <Image
                    alt="professor photo"
                    src="/prov/profile-picture.jpeg"
                    height={40}
                    width={40}
                  />
                  <Image
                    alt="professor photo"
                    src="/prov/profile-picture.jpeg"
                    height={40}
                    width={40}
                  />
                  <Image
                    alt="professor photo"
                    src="/prov/profile-picture.jpeg"
                    height={40}
                    width={40}
                  />
                </div>
                <span>3 attendees</span>
              </div>
              <div>
                <span>Share</span>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </Card>
      </CardContainer>
    </div>
  );
}
