import style from "./Slider.module.css"
import facebook from "../../assets/icons/fb.svg";
import li from "../../assets/icons/in.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg"
import youtube from "../../assets/icons/youtube.svg"
import group from "../../assets/slider/Group.svg"
import slide1 from "../../assets/slider/slider1.svg"
import slide2 from "../../assets/slider/slider2.jpg"
import slide3 from "../../assets/slider/slider3.jpg"
import SliderItem from "./SliderItem";

import { useState } from "react";
function Slider() {
    const arrayImg = [facebook,twitter,youtube, li, instagram];
    const backgrounds = [slide1,slide2,slide3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentBackground = backgrounds[currentIndex];
    console.log(currentBackground);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    };
    
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? prevIndex : prevIndex + 1));
    };
    return (
        <div className={style.slider}>
            <div className={style.slider_wrapper}
                 style={{ backgroundImage: `url(${currentBackground})` }}   >
                <div className={style.slider_icons}>
                    {arrayImg.map((icon,index) => (
                        <img src={icon} key={index} alt="icon"></img>
                    ))}
                </div>
                <div className={style.slider_luxury}>
                    <img src={group}></img>
                </div>
                <div className={style.slider_control}>
                    <div className={style.slider_btns}>
                        <button className={style.slider_btn}
                                onClick={handlePrevClick}
                                style={{color:currentIndex === 0 ? 'grey' : '#FFF'}}
                                >PREV</button>
                        <span>|</span>
                        <button className={style.slider_btn} 
                                onClick={handleNextClick}
                                style={{color:currentIndex === 2 ? 'grey' : '#FFF'}}
                                >NEXT</button>
                    </div>
                    <div className={style.slide_descr}>
                        {backgrounds.map((img, index) => (
                            <SliderItem index={index} currentIndex={currentIndex}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;