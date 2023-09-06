import style from "@/styles/pages/listing.module.scss";
import schoolStyle from '@/styles/pages/schools/SchoolCard.module.scss';
import Header from "@/components/common/Header";
import CardContainer from "@/components/molecules/CardContainer";
import Card from "@/components/molecules/Card";
import {useState} from "react";
import Link from "next/link";

type SchoolCardProps = {
  id: number;
  name:string;
  director:string;
}

function SchoolCard(id, name, director){
  return (
      <Link className={schoolStyle.school_card} href={id?("/schools/"+id):("")}>
        <div className={schoolStyle.thumbnail}>
        </div>
        <div className={schoolStyle.description}>
          <div>
            <span>{name}</span>
            <span>{director}</span>
          </div>
        </div>
      </Link>
  );
}

export default function Schools() {
  const [listSchool, setListSchool] = useState<SchoolCardProps[]>([
    {
      id: 1,
      name:"SALINE ROYALE ACADEMY",
      director: "Directeur SRA"
    },
    {
      id: 2,
      name:"SALINE ROYALE ACADEMY",
      director: "Directeur SRA"
    },
    {
      id: 3,
      name:"SALINE ROYALE ACADEMY",
      director: "Directeur SRA"
    },
    {
      id: 4,
      name:"SALINE ROYALE ACADEMY",
      director: "Directeur SRA"
    },
    {
      id: 5,
      name:"SALINE ROYALE ACADEMY",
      director: "Directeur SRA"
    }
  ]);

  return (
      <div className={style.list_page_content}>
        <Header name="Schools" />
        <CardContainer>
          <Card title="Schools" style={{gridColumn: "1/7"}}>
            <div className={style.list_cards}>
              {listSchool.map((item, key) => (
                  SchoolCard(item.id, item.name, item.director)
              ))}
            </div>
          </Card>
        </CardContainer>
      </div>
  );
}