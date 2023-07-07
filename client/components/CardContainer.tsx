import style from '../styles/components/CardContainer.module.scss';

type CardContainerProps = {
  children: React.ReactNode;
};

export default function CardContainer({ children }: CardContainerProps) {
  return <div className={style.card_container}>{children}</div>;
}
