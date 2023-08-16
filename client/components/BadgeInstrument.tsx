import InstrumentIcon from './InstrumentIcon';
import style from '../styles/components/BadgeIntrument.module.scss';

interface BadgeInstrumentProps {
  fill: string;
  size: 'md' | 'lg';
  instrument:
    | 'cello'
    | 'chamber-music'
    | 'clarinet'
    | 'flute'
    | 'oboe'
    | 'piano'
    | 'saxo'
    | 'trombone'
    | 'viola'
    | 'violin'
    | 'voice';
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
