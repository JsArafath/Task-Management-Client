import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateRecord = () => {
    const {id} = useParams();
const [info,setInfo] = useState({});
useEffect(()=>{

    const url = `http://localhost:5000/records/${id}`;
    fetch(url)
    .then(res=>res.json())
.then(data=>setInfo(data));


},[])

const handleUpdate = event => {
event.preventDefault();
const displayname = event.target.displayname.value;
const email = event.target.email.value;
const contact = event.target.contact.value;
const address = event.target.address.value;
const image = event.target.image.value;

const updated= {displayname,email,contact,address,image};
const url = `http://localhost:5000/records/${id}`;
fetch(url,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updated)
})
.then(res=>res.json())
.then(data=>{
    alert('Updated Successfully');
    event.target.reset();
})
}

  return (
    <div className='bg-gray-200'>
        <h1 className='pt-5 text-4xl text-blue-600 font-bold'>Updating user:{info.displayname}</h1>
        <br></br>
        <br></br>
        <form onSubmit={handleUpdate}>
            <input className='w-96 bg-gray-600 text-white p-3' type='text' name="title" placeholder='Title'></input>
            <br></br>
            <br></br>
            <input className='w-96 bg-gray-600 text-white p-3' type='text' name="description" placeholder='Description'></input>
            <br></br>
            <br></br>
            <input className='bg-green-700 text-white w-75 p-2 mb-9 rounded-lg' type='submit' value='Update'></input>
        </form>
    </div>
  )
}
