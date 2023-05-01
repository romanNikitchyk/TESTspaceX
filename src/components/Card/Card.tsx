import style from './Card.module.scss';
type CardPropsTYPE = {
  header: string
  title:string
  footer:string
}
export const Card = (props:CardPropsTYPE) => {
  return (
      <div className={style.card}>
          <span className={style.span}>{props.header}</span>
          <span className={`${style.spanBold} ${style.span}`}>{props.title}</span>
          <span className={style.span}>{props.footer}</span>
        </div>
  );
};


