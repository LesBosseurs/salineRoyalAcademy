import Image from 'next/image';
import style from '../../styles/pages/landing-page/landingPage.module.scss';

type ExpertiseElementProps = {
  icon: string;
  text: string;
};

export default function ExpertiseElement({
  icon,
  text,
}: ExpertiseElementProps) {
  return (
    <div className={style.expertise_element}>
      <div>
        <Image src={icon} alt="" width={60} height={60} />
      </div>
      <p>{text}</p>
    </div>
  );
}
