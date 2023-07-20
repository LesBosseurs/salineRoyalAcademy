import CapIcon from '@/public/icons/cap';
import style from '../../styles/pages/landing-page/landingPage.module.scss';
import PianoIcon from '@/public/icons/piano';

export default function Statistics() {
  const statsElementsList = [
    {
      icon: <CapIcon fill="#989595" />,
      statName: 'Masterclasses',
      statNumber: '300+',
    },
    {
      icon: <PianoIcon fill="#989595" />,
      statName: 'Oeuvres listed',
      statNumber: '2000+',
    },
    {
      icon: <CapIcon fill="#989595" />,
      statName: 'Teachers',
      statNumber: '68',
    },
    {
      icon: <CapIcon fill="#989595" />,
      statName: 'New masterclasses per month',
      statNumber: '15+',
    },
    {
      icon: <CapIcon fill="#989595" />,
      statName: 'Instruments collection',
      statNumber: '10',
    },

    {
      icon: <CapIcon fill="#989595" />,
      statName: 'Active people on the forum',
      statNumber: '600+',
    },
  ];

  return (
    <div className={style.statistics}>
      <div className={style.container}>
        <h2>The Saline Royale Academy in a few numbers</h2>
        <div>
          {statsElementsList.map((element: any) => {
            return (
              <div>
                {element.icon}
                <div>
                  <h4>{element.statName}</h4>
                  <span>{element.statNumber}</span>
                </div>
              </div>
            );
          })}
        </div>
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </div>
    </div>
  );
}
