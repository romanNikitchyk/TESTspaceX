import style from './Button.module.scss'

type ButtonPropsTYPE = {
  title:string
}
export const Button = (props: ButtonPropsTYPE) => {
  return (
    <ul>
      <li>
        <a href={'https://www.meme-arsenal.com/memes/b30df4ea38f6ab1a4840cefd161a68f2.jpg'} className={style.btn}>
          {props.title}
        </a>
      </li>
    </ul>
  );
};

