import style from './index.module.css'
import logo from "../../assets/header/Logo.svg"
import { buy, services, information, aboutCompany, contact } from "../../utils.js";
import Button from '../button/Button';
import facebook from "../../assets/icons/fb.svg";
import li from "../../assets/icons/in.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg"
import youtube from "../../assets/icons/youtube.svg"

function Footer() {
    const arrayImg = [
        {
            title:facebook,
            link:"https://www.facebook.com"
        },
        {
            title:twitter,
            link:"https://www.twitter.com"
        },
        {
            title:youtube,
            link:"https://www.youtube.com"
        }, 
        {
            title:li,
            link:"https://www.linkedin.com/"
        }, 
        {
            title:instagram,
            link : "https://www.instagram.com/"
        }
    ];
    

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
            <div className={style.footer_boder}>
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
            </div>
            <div className={style.footer_links}>
                <p>Copyright © 2022 Dubai Realty</p>
                <div>
                    {arrayImg.map((icon,index) => (
                        <a href={icon.link} target="_blank" key={index} className={style.link_img}><img src={icon.title}  alt="icon"></img></a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;