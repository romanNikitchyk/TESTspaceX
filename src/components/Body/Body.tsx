import style from './Body.module.scss'
import {Card} from "../Card/Card";

export const Body = () => {
  const titles = [{
    header: 'мы',
    title: '1',
    footer: 'на рынке'
  },
    {
      header: 'гарантируем',
      title: '50%',
      footer: 'безопасности'
    },
    {
      header: 'календарик за',
      title: '2001',
      footer: 'в подарок'
    },
    {
      header: 'путешествие',
      title: '597',
      footer: 'дней'
    },
  ]
  return (
    <div className={style.container}>
      <div className={style.mainTitle}>
        <h1>Путешествие</h1>
        <h3>на красную планету</h3>
        <div className={style.textWraper}>
          Начать путешествие
        </div>
      </div>
      <div className={style.cardsWraper}>
        {titles.map((el, i) =>
          <Card
            key={i}
            header={el.header}
            title={el.title}
            footer={el.footer}
          />)}
      </div>
    </div>
  );
};

