import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Records = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/records')
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      console.log('deleting user with id', id);
      const url = `http://localhost:5000/records/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = list.filter((record) => record._id !== id);
            setList(remaining);
          }
        });
    }
  };

  const handleStatus = (id) => {
    const updatedList = list.map((record) => {
      if (record._id === id) {
        return {
          ...record,
          status: 'Completed'
        };
      }
      return record;
    });
    setList(updatedList);
  };

  return (
    <div className='bg-gray-200 '>
      <h1 className='font-bold text-5xl text-center pt-5 mb-5 text-blue-600'>
        All Records: {list.length}
      </h1>
      <div class='overflow-x-auto pt-10 pb-10'>
        <table class='table-compact w-full text-gray-900'>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((record, index) => (
              <tr key={record._id}>
                <th>{index + 1}</th>
                <td className='text-center'>{record.heading}</td>
                <td className='text-center'>{record.description}</td>
                <td className='text-center'>{record.status}</td>
                <td className='text-center'>
                  {record.status !== 'Completed' && (
                    <button
                      className='btn btn-primary text-white mr-4'
                      onClick={() => handleStatus(record._id)}
                    >
                      Mark as completed
                    </button>
                  )}
                  <button className='btn bg-blue-600 text-white mr-4'>
                    <Link to={`/update/${record._id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(record._id)}
                    className='btn bg-red-600 text-white'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};