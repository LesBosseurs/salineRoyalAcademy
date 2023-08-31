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
    | 'Cello'
    | 'Chamber-music'
    | 'Clarinet'
    | 'Flute'
    | 'Oboe'
    | 'Piano'
    | 'Trombone'
    | 'Viola'
    | 'Violin'
    | 'Voice';
};

export default function InstrumentIcon({
  fill,
  instrument,
}: InstrumentIconProps) {
  switch (instrument) {
    case 'Piano':
      return <PianoIcon fill={fill} />;
    case 'Violin':
      return <ViolinIcon fill={fill} />;
    case 'Cello':
      return <CelloIcon fill={fill} />;
    case 'Voice':
      return <VoiceIcon fill={fill} />;
    case 'Viola':
      return <ViolaIcon fill={fill} />;
    case 'Clarinet':
      return <ClarinetIcon fill={fill} />;
    case 'Flute':
      return <FluteIcon fill={fill} />;
    case 'Oboe':
      return <OboeIcon fill={fill} />;
    case 'Chamber-music':
      return <ChambreMusicIcon fill={fill} />;
    case 'Trombone':
      return <TromboneIcon fill={fill} />;
  }
}
