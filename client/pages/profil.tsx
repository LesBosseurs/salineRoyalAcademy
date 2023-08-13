import Header from '@/components/common/Header';
import style from '../styles/pages/profil.module.scss';
import BadgeInstrument from '@/components/BadgeInstrument';

export default function Profil() {
  return (
    <div className={style.profil}>
      <Header name="Profil" />
      <div className={style.general_infos}>
        <div className={style.profil_pic}></div>
        <div>
          <h3>My name</h3>
          <BadgeInstrument size="md" fill="#fff" instrument="piano" />
        </div>
      </div>
    </div>
  );
}
