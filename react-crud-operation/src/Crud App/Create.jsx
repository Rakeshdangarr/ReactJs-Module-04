import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Create() {
    const [inputData, setInputData] =useState({
        name:'',
        email:''
    })
    const navigate = useNavigate();

    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:4000/users', inputData)
        .then(res =>{
            alert("Data Posted Successfully!")
            navigate('/')
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Id:</label>
                    <input type='number' name='id' className='form-control' onChange={e =>setInputData({...inputData, id: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' onChange={e =>setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor='name'>Email:</label>
                    <input type='email' name='email' className='form-control'onChange={e =>setInputData({...inputData, email: e.target.value})}/>
                </div>
                <br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Create