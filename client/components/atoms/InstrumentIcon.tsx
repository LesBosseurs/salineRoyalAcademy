import CelloIcon from '@/public/icons/instruments/Cello';
import ChambreMusicIcon from '@/public/icons/instruments/ChambreMusic';
import ClarinetIcon from '@/public/icons/instruments/Clarinet';
import FluteIcon from '@/public/icons/instruments/Flute';
import OboeIcon from '@/public/icons/instruments/Oboe';
import PianoIcon from '@/public/icons/instruments/Piano';
import TromboneIcon from '@/public/icons/instruments/Trombone';
import ViolaIcon from '@/public/icons/instruments/Viola';
import ViolinIcon from '@/public/icons/instruments/Violin';
import VoiceIcon from '@/public/icons/instruments/Voice';

type InstrumentIconProps = {
  fill: string;
  instrument:
    | 'cello'
    | 'chamber-music'
    | 'clarinet'
    | 'flute'
    | 'oboe'
    | 'piano'
    | 'trombone'
    | 'viola'
    | 'violin'
    | 'voice';
};

export default function InstrumentIcon({
  fill,
  instrument,
}: InstrumentIconProps) {
  switch (instrument) {
    case 'piano':
      return <PianoIcon fill={fill} />;
    case 'violin':
      return <ViolinIcon fill={fill} />;
    case 'cello':
      return <CelloIcon fill={fill} />;
    case 'voice':
      return <VoiceIcon fill={fill} />;
    case 'viola':
      return <ViolaIcon fill={fill} />;
    case 'clarinet':
      return <ClarinetIcon fill={fill} />;
    case 'flute':
      return <FluteIcon fill={fill} />;
    case 'oboe':
      return <OboeIcon fill={fill} />;
    case 'chamber-music':
      return <ChambreMusicIcon fill={fill} />;
    case 'trombone':
      return <TromboneIcon fill={fill} />;
  }
}
