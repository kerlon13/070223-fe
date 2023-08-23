import style from "./Slider.module.css"
function SliderItem({index, currentIndex}) {
    return (
        <div className={style.slide_descr_item}>
            <div className={style.slider_number}
                 style={{color:currentIndex === index ? 'yellow' : 'white'}}              
            >0{index + 1}</div>
            <p className={style.descr}>Lorem Ipsum<br/>
            Dolorem apset</p>
        </div>
    )
}

export default SliderItem;