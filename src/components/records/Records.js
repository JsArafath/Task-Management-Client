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
    <div className='bg-gray-100 '>
      <h1 className='font-bold text-5xl text-center pt-5 mb-5 text-blue-600'>
        All Records: {list.length}
      </h1>
      <div class=''>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4 bg-whit lg:p-9 '>
          {list.map((record) => (
              <div className='border-lg shadow-lg p-9 bg-gray-50 rounded-lg' key={record._id}>
                {/* <th>{index + 1}</th> */}
                <div className='text-center text-gray-900 text-xl font-bold p-2'>{record.heading}</div>
                <div className='text-center p-2 text-gray-800'>{record.description}</div>
                <div className='text-center p-2 text-info font-bold'><span className='text-black'>Status:</span> {record.status}</div>
                <div className='sm:gap-2'>
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
                    className='btn bg-red-600 text-white m-2'
                  >
                    Delete
                  </button>
                </div>
              </div>
              
            ))}
          </div>
            
        
      </div>
    </div>
  );
};