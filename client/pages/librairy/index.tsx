import Button from '@/components/atoms/Button';
import Header from '@/components/common/Header';
import style from '../../styles/pages/librairy/lib.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Librairy() {
  const router = useRouter();

  const worksList = [
    {
      name: 'Composers',
      link: 'composers',
    },
    {
      name: 'Oeuvres',
      link: 'oeuvres',
    },
    {
      name: 'Juries & Teachers',
      link: 'persons',
    },
  ];

  return (
    <div className={style.librairy_container}>
      <Header name="Librairy" hrefBack="/" />
      <div className={style.header}>
        <h2>Library</h2>
        <p>Compositors, oeuvres, Juries and Teachers</p>
      </div>
      <div className={style.card_librairy_nav}>
        {worksList.map((element, key) => {
          return (
            <div className={style.part_card} key={key}>
              <h3>{element.name}</h3>
              <Link href={`librairy/${element.link}`}>
                <Button size="sm">Go to list</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
