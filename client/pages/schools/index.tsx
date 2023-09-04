import style from "@/styles/pages/listing.module.scss";
import Header from "@/components/common/Header";
import FilterSection from "@/components/organisms/FilterSection";
import CardContainer from "@/components/molecules/CardContainer";
import Card from "@/components/molecules/Card";
import FormFilter from "@/components/organisms/FormFilter";
import {useState} from "react";
import SchoolCard from "@/components/organisms/SchoolCard";

type SchoolCardProps = {
  id: number;
  name:string;
  director:string;
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
                  <SchoolCard
                      key={key}
                      id={item.id}
                      name={item.name}
                      director={item.director}
                  />
              ))}
            </div>
          </Card>
        </CardContainer>
      </div>
  );
}