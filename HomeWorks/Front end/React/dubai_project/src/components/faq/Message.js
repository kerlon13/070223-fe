import { useState } from 'react';
import style from './index.module.css'
function Message({message}) {
    const [isHidden, setIsHidden] = useState(false);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    }
    return (
            <div className={style.message_item}>
                <div className={style.message_title}>
                    <p>{message.title}</p>
                    <button onClick={toggleHidden} className={`${isHidden ? style.rotate : ''}`}> > </button>
                </div>
                {isHidden && <div className={style.text_wrapper}><p className={style.message_text}>{message.text}</p></div>}
            </div>
        ) 
}

export default Message;