import Image from 'next/image';
import style from '../../styles/pages/landing-page/landingPage.module.scss';

export default function Partners() {
  return (
    <section className={style.partners}>
      <h2>Saline royale Academy&apos;s partners</h2>
      <div>
        <div className={style.partner_bloc}>
          <Image
            src="./partners/rcm.svg"
            alt="rcm icon"
            width={120}
            height={170}
          />
        </div>
        <div className={style.partner_bloc}>
          <Image
            src="./partners/riam.svg"
            alt="riam icon"
            width={120}
            height={170}
          />
        </div>
        <div className={style.partner_bloc}>
          <Image
            src="./partners/colburn.svg"
            alt="colburn icon"
            width={120}
            height={170}
          />
        </div>
        <div className={style.partner_bloc}>
          <Image
            src="./partners/aien.svg"
            alt="aien icon"
            width={120}
            height={170}
          />
        </div>
      </div>
    </section>
  );
}
