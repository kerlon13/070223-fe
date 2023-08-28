import style from './index.module.css'
import { messages } from '../../utils.js';
import Message from './Message';

function FrequentlyAsked () {
    
    return (
        <section className={style.questions}>
            <div className={style.questions_wrapper}>
                <h2>FAQ</h2>
                {messages.map((message, index) => (
                    <Message key={index} message={message}/>
                ))}
            </div>

        </section>
    )
}

export default FrequentlyAsked;