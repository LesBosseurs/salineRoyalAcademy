import InstrumentIcon from '../atoms/InstrumentIcon';
import style from '../../styles/components/molecules/BadgeIntrument.module.scss';
import {instrumentsProps} from "@/interfaces/InstrumentsInterface";
interface BadgeInstrumentProps {
  fill: string;
  size: 'md' | 'lg';
  instrument:instrumentsProps;
}

export default function BadgeInstrument({
  fill,
  size,
  instrument,
}: BadgeInstrumentProps) {
  return (
    <div
      className={`${style.badge_instrument} ${instrument}`}
      style={{
        height: size === 'md' ? '20px' : '30px',
        width: size === 'md' ? '20px' : '30px',
      }}
    >
      <InstrumentIcon fill={fill} instrument={instrument} />
    </div>
  );
}
