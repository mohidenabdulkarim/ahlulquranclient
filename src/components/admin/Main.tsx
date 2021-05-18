import React, { useState } from "react";
const Main = ({ users }: any) => {
  // const [users, setUsers] = useState(users);
  return (
    <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Dashboard</h1>
        <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group me-2'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Share
            </button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Export
            </button>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-outline-secondary dropdown-toggle'
          >
            <span data-feather='calendar' />
            This week
          </button>
        </div>
      </div>
      <h2>Registered People</h2>
      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>phone</th>
              <th>Whatsapp No</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Teacher</th>
              <th>Course</th>
              <th>Serial Number</th>
            </tr>
          </thead>
          <tbody>
            { users !== undefined ?
              users.map((user: any, idx: any) => (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{user.name}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.whatsappNumber}</td>
                  <td>{user.country}</td>
                  <td>{user.gender}</td>
                  <td>{user.registeredDate}</td>
                  <td>{user.teacher}</td>
                  <td>{user.course}</td>
                  <th>
                    <button className="btn">Set</button>
                  </th>
                </tr>
                
                
              ))
              :
              <h5>No users registered yet !!</h5>
            }
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Main;
