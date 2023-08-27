import style from '../../styles/pages/landing-page/landingPage.module.scss';
import ExpertiseElement from './_ExpertiseElement';

export default function Expertise() {
  const arrayExpertises = [
    {
      icon: '/icons/others/book.svg',
      text: 'Access to the biggest and richest catalog of classical music masterclasses',
    },
    {
      icon: '/icons/others/trophy.svg',
      text: "Learn from the best professors, competition's winners and jury's members.",
    },
    {
      icon: '/icons/others/play.svg',
      text: 'New videos available every month.',
    },
    {
      icon: '/icons/others/music_note.svg',
      text: 'Multi angle videos, annotated sheet with the professors recommendations and more...',
    },
  ];

  return (
    <section className={style.expertise}>
      <h2>Our expertise</h2>
      <p>Experience immersive video masterclasses wherever you are.</p>
      <div>
        {arrayExpertises.map((element, key) => {
          return (
            <ExpertiseElement
              key={key}
              icon={element.icon}
              text={element.text}
            />
          );
        })}
      </div>
    </section>
  );
}
