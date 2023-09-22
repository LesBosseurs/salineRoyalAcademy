import BadgeInstrument from '@/components/molecules/BadgeInstrument';
import style from '../../styles/pages/landing-page/_coming_soon_card.module.scss';
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";

type ComingSoonCardProps = {
  instrument:instrumentsProps;
  title: string;
  text: string;
};

export default function ComingSoonCard({
  instrument,
  title,
  text,
}: ComingSoonCardProps) {
  return (
    <div className={style.coming_soon_card}>
      <div>
        <BadgeInstrument fill="#fff" instrument={instrument} size="lg" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
