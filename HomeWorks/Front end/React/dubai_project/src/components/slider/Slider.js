import style from "./Slider.module.css"
import facebook from "../../assets/icons/fb.svg";
import li from "../../assets/icons/in.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg"
import youtube from "../../assets/icons/youtube.svg"
import group from "../../assets/slider/Group.svg"
function Slider() {
    return (
        <div className={style.slider}>
            <div className={style.slider_wrapper}>
                <div className={style.slider_icons}>
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={youtube}></img>
                    <img src={li}></img>
                    <img src={instagram}></img>
                </div>
                <div className={style.slider_luxury}>
                    <img src={group}></img>
                </div>
                <div className={style.slider_control}>
                    <div className={style.slider_btns}>
                        <button>PREV</button>
                        <span>|</span>
                        <button>NEXT</button>
                    </div>
                    <div className={style.slide_descr}>
                        <div className={style.slide_descr_item}>
                            <div className={style.slider_number}>01</div>
                            <p className={style.descr}>Lorem Ipsum<br/>
                            Dolorem apset</p>
                        </div>

                        <div className={style.slide_descr_item}>
                            <div className={style.slider_number}>02</div>
                            <p className={style.descr}>Lorem Ipsum<br/>
                            Dolorem apset</p>
                        </div>

                        <div className={style.slide_descr_item}>
                            <div className={style.slider_number}>03</div>
                            <p className={style.descr}>Lorem Ipsum<br/>
                            Dolorem apset</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;