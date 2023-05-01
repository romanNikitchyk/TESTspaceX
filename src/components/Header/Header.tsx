import style from "./Header.module.scss"
import {Button} from "../Button/Button";
import logoIcon from '../../assets/logo.png'
import {useState} from "react";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [menuTougle, setMenuTougle] = useState<boolean>(false)
  const links = ['Main', 'Technologies', 'Flight schedule', 'Guarantees', 'About company', 'Contacts']
  return (
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.logoWrap}>
            <a href={'https://www.spacex.com/'}>
              <img src={logoIcon} alt="logo"/>
            </a>
          </div>
          <div className={style.btnWrap}>
            <div className={style.burgerMenuIcon} onClick={()=>setMenuTougle(!menuTougle)}/>
            {links.map((l, i) => <Button key={i} title={l}/>)}
          </div>
          {menuTougle && <BurgerMenu links={links}/>}
        </div>
        </div>
  );
};


