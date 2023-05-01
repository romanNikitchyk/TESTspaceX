import style from './BurgerMenu.module.scss'

type BurgerMenuPropsTYPE = {
  links: string[]
}
export const BurgerMenu = (props: BurgerMenuPropsTYPE) => {
  return (
      <div className={style.bergerWrap}>
        {props.links.map((l, i) =>
          <li key={i}>
            <a href="https://www.meme-arsenal.com/memes/b30df4ea38f6ab1a4840cefd161a68f2.jpg">
              {l}
            </a>
          </li>
        )}
      </div>
  );
};


