import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    function handleDelete(id) {
        const confirm = window.confirm("Do you want to delete this record?");
        if (confirm) {
            axios.delete(`http://localhost:4000/users/${id}`)
                .then(res => {
                    alert("Record deleted");
                    setData(data.filter(d => d.id !== id)); // Update local state
                })
                .catch(err => console.error("Error deleting record:", err));
        }
    }

    return (
        <div className='container'>
            <h2>Crud App with JSON Server</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                                <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                                <button className='text-decoration-none btn btn-sm btn-danger' onClick={() => handleDelete(d.id)}>Delete</button>
                                <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
