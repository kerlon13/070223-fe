import style from './index.module.css'
import { useForm } from 'react-hook-form';
import React from 'react';

function ContactUs () {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({mode:"onChange"});

    const onSubmit = (data) => {
        console.log(data);
        reset();
      };
    
    return (
        <section className={style.contact_us}>
            <div className={style.contact_us_wrapper}>
                <p className={style.contact_us_text}>Do you have any questions?</p>
                <h2 className={style.contact_us_title}>Contact us</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Wrong email address',
                            },
                        })}
                        placeholder='Enter your mail'
                    />
                    <button type="submit">Send</button>
                    {errors.email && <p>{errors.email.message}</p>}
                </form>
            </div>
        </section>
    )
}

export default ContactUs;