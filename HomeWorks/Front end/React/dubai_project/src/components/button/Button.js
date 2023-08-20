import style from './Button.module.css'
function Button() {
    return (
        <div>
            <button className={style.btn}>Book a consultation</button>
        </div>
    )
}

export default Button;