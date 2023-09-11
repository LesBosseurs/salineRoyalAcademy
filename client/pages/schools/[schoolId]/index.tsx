import Button from '@/components/atoms/Button';
import Header from '@/components/common/Header';
import Card from '@/components/molecules/Card';
import CardContainer from '@/components/molecules/CardContainer';
import FormField from '@/components/molecules/FormField';
import Tabs from '@/components/organisms/Tabs';
import Cross from '@/public/icons/others/cross';
import CapIcon from '@/public/icons/menu/Cap';
import DetailsCircleIcon from '@/public/icons/others/DetailsCircle';
import Search from '@/public/icons/others/search';
import style from '@/styles/pages/schools/school.module.scss';
import Image from 'next/image';
import { useState } from 'react';

type TextsSearchProps = {
  textGroups: string;
  textStudents: string;
};

export default function School() {
  const [textsSearch, setTextsSearch] = useState<TextsSearchProps>({
    textGroups: '',
    textStudents: '',
  });

  return (
    <div className={style.school}>
      <Header name="School" hrefBack="/schools" />
      <CardContainer>
        <div className={style.commands_header}>
          <h2>Saline Royale Academy</h2>
          <div>
            <span>Delete school</span>
            <Button size="sm">Edit</Button>
          </div>
        </div>
        <div className={style.pic}></div>
        <h2 className={style.title_mobile}>Saline Royale Academy</h2>
        <Card className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
          consectetur libero id faucibus. Vestibulum morbi blandit cursus risus
          at ultrices mi tempus. Molestie a iaculis at erat pellentesque
          adipiscing commodo. Euismod elementum nisi quis eleifend quam
          adipiscing. Sagittis eu volutpat odio facilisis mauris sit amet. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut lab
        </Card>
        <Card
          colorBg="black"
          title="School's Stats"
          className={style.stats_container}
        >
          <ul>
            <li>
              <CapIcon fill="#000" />
              <span>Courses</span>
              <span>12</span>
            </li>
            <li>
              <CapIcon fill="#000" />
              <span>Courses</span>
              <span>12</span>
            </li>
            <li>
              <CapIcon fill="#000" />
              <span>Courses</span>
              <span>12</span>
            </li>
          </ul>
        </Card>
        <Card title="Directors" className={style.director}>
          <ul>
            <li>Hubbert Tassy</li>
            <li>Deputy director: Nicolas Combes</li>
          </ul>
        </Card>
        <Card title="Contacts" className={style.contact}>
          <ul>
            <li>EPCC Saline - Grande Rue, 25610 Arc et Senans</li>
            <li>salineroyaleacademy@gmail.com</li>
            <li>my.salineacademy.com</li>
            <li>09 87 63 52 41</li>
          </ul>
        </Card>
        <Tabs
          className={style.tabs}
          tabs={[
            {
              title: 'Groups',
              content: (
                <Card className={style.elements_container}>
                  <div className={style.commands}>
                    <FormField
                      value={textsSearch}
                      onChange={function (value) {
                        setTextsSearch(value);
                      }}
                      label="textGroups"
                      sizeInput="md"
                      type="search"
                      placeholder="Search..."
                      icon={<Search fill="#b18b36" />}
                    />
                    <Cross fill="#b18b36" />
                  </div>
                  <div className={style.elements_grid}>
                    <div className={style.element}>
                      <Image
                        src="/prov/profile-picture.jpeg"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <div>
                        <span>Prof: Hubbert Tassy</span>
                        <span>Group: SRA01</span>
                      </div>
                      <DetailsCircleIcon fill="#000" />
                    </div>
                  </div>
                </Card>
              ),
            },
            {
              title: 'Students',
              content: (
                <Card className={style.elements_container}>
                  <div className={style.commands}>
                    <FormField
                      value={textsSearch}
                      onChange={function (value) {
                        setTextsSearch(value);
                      }}
                      label="textGroups"
                      sizeInput="md"
                      type="search"
                      placeholder="Search..."
                      icon={<Search fill="#b18b36" />}
                    />
                    <Cross fill="#b18b36" />
                  </div>
                  <div className={style.elements_grid}>
                    <div className={style.element}>
                      <Image
                        src="/prov/profile-picture.jpeg"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <div>
                        <span>Student: Camelia Georges</span>
                        <span>Group: SRA01</span>
                      </div>
                      <DetailsCircleIcon fill="#000" />
                    </div>
                  </div>
                </Card>
              ),
            },
          ]}
        />
      </CardContainer>
    </div>
  );
}
