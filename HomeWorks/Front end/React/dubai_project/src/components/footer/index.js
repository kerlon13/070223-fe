import style from './index.module.css'
import logo from "../../assets/header/Logo.svg"
import { buy, services, information, aboutCompany, contact } from "../../utils.js";
import Button from '../button/Button';
function Footer() {

    const renderLinks = (array, title, component = null) => {
        return (
        <ul className={style.footer_item}>
            <p className={style.footer_item_title}>{title}</p>
            {array.map((elem, index) => (
                <li key={index}><a className={style.footer_item_link}>{elem}</a></li>
                ))}
            {component}
        </ul>
        )
        
    }
    return (
        <footer className={style.footer}>
            <div className={style.footer_wrapper}>
                <div><img src={logo} className={style.logo}></img></div>
                <div className={style.footer_items_container}>
                    {renderLinks(buy, "Buy")}
                    {renderLinks(services, "Services")}
                    {renderLinks(information, "Information")}
                    {renderLinks(aboutCompany, "About company")}
                    {renderLinks(contact, "Contact", <Button />)}
                </div>
            </div>
        </footer>
    )
}

export default Footer;