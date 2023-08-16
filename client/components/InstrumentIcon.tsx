import CelloIcon from '@/public/icons/cello';
import ChambreMusicIcon from '@/public/icons/chambre_music';
import ClarinetIcon from '@/public/icons/clarinet';
import FluteIcon from '@/public/icons/flute';
import OboeIcon from '@/public/icons/oboe';
import PianoIcon from '@/public/icons/piano';
import TromboneIcon from '@/public/icons/trombone';
import ViolaIcon from '@/public/icons/viola';
import ViolinIcon from '@/public/icons/violin';
import VoiceIcon from '@/public/icons/voice';

type InstrumentIconProps = {
  fill: string;
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
