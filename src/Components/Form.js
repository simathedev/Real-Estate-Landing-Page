import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
/*
libraries used:
react-hook-form ==>handles form
@hookform/resolvers ==>integrates yup and react
Yup ==>validates form fields
*/
export default function Form() {

  const schema = yup.object().shape({
    name: yup.string().required('name is required'),
    surname: yup.string().required('surname is required'),
    email:yup.string().email().required('email is required'),
    phonenum: yup.string().matches(
      /^[0-9]{10}$/,
      'Phone number must be a 10-digit number'
      ).required('Phone number is required'),
    message:yup.string().required('please enter message'),
 
  })
  const {register,handleSubmit,formState:{errors},}=useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <div className='formStyle flex flex-col justify-center items-center text-center py-6 pb-4 w-[90%] sm:w-[90%] '>
<form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Name: 
        </label>
        <input type="text" id="name" name="name" {...register("name")}/>
     <p className="error">{errors.name?.message}</p>
        <label htmlFor="surname">
        Surname: 
        </label>
        <input type="text" id="surname" name="surname" {...register("surname")} />
        <p className="error">{errors.surname?.message}</p>
      <label htmlFor="email">
        Email: 
        </label>
        <input type="email" id="email"  name="email" {...register("email")} />
        <p className="error">{errors.email?.message}</p>
      <label htmlFor="phonenum" >
        Phone Number: 
      </label>
        <input type="tel" id="phonenum" name="phonenum" {...register("phonenum")}/>
        <p className="error">{errors.phonenum?.message}</p>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"  {...register("message")}/>
      <p className="error">{errors.message?.message}</p>
      <div  className='w-full items-center justify-center'>
      <button type="submit" className="mb-4">Submit</button>
      </div>
    </form>
    </div>
  )
}