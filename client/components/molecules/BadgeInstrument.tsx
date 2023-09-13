import InstrumentIcon from '../atoms/InstrumentIcon';
import style from '../../styles/components/molecules/BadgeIntrument.module.scss';
import {instruments} from "@/interfaces/InstrumentsInterface";
interface BadgeInstrumentProps {
  fill: string;
  size: 'md' | 'lg';
  instrument:instruments;
}

export default function BadgeInstrument(props: BadgeInstrumentProps) {
  return (
    <div
      className={`${style.badge_instrument} ${props.instrument}`}
      style={{
        height: props.size === 'md' ? '20px' : '30px',
        width: props.size === 'md' ? '20px' : '30px',
      }}
    >
      <InstrumentIcon fill={props.fill} instrument={props.instrument} />
    </div>
  );
}
