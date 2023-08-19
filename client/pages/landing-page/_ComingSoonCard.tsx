import InstrumentIcon from '@/components/InstrumentIcon';
import style from '../../styles/pages/landing-page/_coming_soon_card.module.scss';

type ComingSoonCardProps = {
  instrument: string;
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
        <div className={style.instrument}>
          <InstrumentIcon instrument={instrument} fill="#fff" />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
