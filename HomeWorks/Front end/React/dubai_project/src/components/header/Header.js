import { navLinks } from "../../utils.js";
import logo from "../../assets/header/Logo.svg"
import Button from "../button/Button.js";
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.header}>
            <div className={style.header_wrapper}>
                <div>
                    <img src={logo} className={style.logo}></img>
                </div>
                <div className={style.nav_menu_wrapper}>
                    
                    <div>
                        <ul className={style.nav_list}>
                            {navLinks.map((link) => (
                                <li><a className={style.link}>{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <Button />
                </div>
                
                <div className={style.contacts}>
                    
                    <div className={style.change_lang}>
                        <span className={style.span_en}>EN</span>
                        <span>RU</span>
                    </div>
                    <div>
                        <p className={style.phone_number}>+7 (212) 674-25-10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;