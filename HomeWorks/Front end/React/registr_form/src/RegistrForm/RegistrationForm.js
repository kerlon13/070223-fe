import React from 'react';
import { useForm } from 'react-hook-form';
import style from "./RagistrationForm.module.css"

const RegistrationForm = () => {
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({mode:"onChange"});

  const onSubmit = (data) => {
    console.log(data);
    sendUser(data);
    reset();
  };

  const sendUser = async (dataUser) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(dataUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            if (response.status === 201) {
                console.log("Data send");
            }
        })
        .catch((error) => {
            console.log("Error:", error);
        });
  }

  return (
    <form className={style.registration_form} onSubmit={handleSubmit(onSubmit) }>

      <div className={style.form_group}>
        <label>FirstName</label>
        <input {...register('firstName', { 
            required: 'This field is required',
            pattern: {
                value: /^[A-ZА-Я][a-zа-я]*$/,
                message:'Name must start with a capital letter'
            } })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div className={style.form_group}>
        <label>LastName</label>
        <input {...register('lastName', { 
            required: 'This field is required',
            pattern: {
                value: /^[A-ZА-Я][a-zа-я]*$/,
                message:'Name must start with a capital letter'
            } })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div className={style.form_group}>
        <label>Email</label>
        <input
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Wrong email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className={style.form_group}>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'This field is required',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              message: 'password is not secure',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div className={style.form_group}>
        <label>Phone</label>
        <input
          {...register('phone', {
            required: 'This field is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Please enter a valid phone number',
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <button type="submit" className={style.submit_button}>Sign up</button>
    </form>
  );
};

export default RegistrationForm;
