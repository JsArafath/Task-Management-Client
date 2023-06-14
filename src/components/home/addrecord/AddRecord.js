import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddRecord.css';

const AddRecord = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://task-management-server-jade.vercel.app/records',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container bg-gray-200 lg:p-9 '>
            <h1 className='text-center text-4xl font-bold mb-4  text-blue-600'>Please Add a Record !!!</h1>
            <div className='p-5'>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
            <input {...register("heading",)} type="text" placeholder="Title" className="input input-bordered input-info w-full max-w-lg py-9 text-white" />
            <input {...register("description",)} type="text" placeholder="Description" className="input input-bordered input-info w-full max-w-lg py-9 text-white" />
            <input {...register("status",)}  type="text" placeholder="Status" defaultValue="pending" className="input input-bordered input-info w-full max-w-lg" />
            <input type="submit" className='bg-blue-600 text-white w-full max-w-lg pt-3 pb-7' />
    </form> 
            </div>
        </div>
    );
};

export default AddRecord;


