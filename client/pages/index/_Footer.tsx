import SalineRoyaleAcademy from '@/public/icons/salineRoyaleAcademy';
import style from '../../styles/pages/landing-page/landingPage.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className={style.footer_container}>
        <div>
          <ul>
            <li>
              <a href="">Education</a>
              <a href="">Courses</a>
              <a href="">Programs</a>
            </li>
            <span className={style.line}></span>
            <li>
              <a href="">Teachers</a>
            </li>
            <span className={style.line}></span>
            <li>
              <a href="">For school</a>
            </li>
            <span className={style.line}></span>
            <li>
              <a href="">About</a>
            </li>
            <span className={style.line}></span>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div>
            <Image
              src="./icons/facebook.svg"
              alt="icon facebook"
              width={40}
              height={40}
            />
            <Image
              src="./icons/insta.svg"
              alt="icon insta"
              width={40}
              height={40}
            />
            <Image
              src="./icons/linkedin.svg"
              alt="icon linkedin"
              width={40}
              height={40}
            />
            <Image
              src="./icons/youtube.svg"
              alt="icon youtube"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div>
          <SalineRoyaleAcademy fill="#b18b36" />
          <p>
            The Saline royale academy aims to participate in the training of the
            best musicians of tomorrow. To this end, we offer online or
            in-person masterclasses at the Saline royale of Arc et Senans, given
            by the greatest masters of classical music. The Saline royale
            Academy is a private higher-education institution authorized to
            issue ECTS credits.
          </p>
          <span>Copyright © Saline Royale Academy 2023</span>
        </div>
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </div>
    </footer>
  );
}
