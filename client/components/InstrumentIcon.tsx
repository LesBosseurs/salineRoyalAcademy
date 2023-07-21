import CelloIcon from '@/public/icons/cello';
import ChambreMusicIcon from '@/public/icons/chambre_music_icon';
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
  instrument: string;
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
    case 'Chambre music':
      return <ChambreMusicIcon fill={fill} />;
    case 'Trombone':
      return <TromboneIcon fill={fill} />;
  }
}
