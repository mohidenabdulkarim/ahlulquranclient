import React, { useState } from "react";
import Swal from "sweetalert2";
import Axios from 'axios';
import { SiAddthis } from 'react-icons/si'
import { useForm } from 'react-hook-form';




const Main = ({ users, searchName }: any) => {
  const [allUsers, setAllUsers] = useState(users);
  const [children, setChildren] = useState([]);
  const { register, handleSubmit } = useForm();


  const onSubmit = (data: any) => {

    if (!data.to) {

      const from = new Date(data.from).setHours(0, 0, 0, 0);
      const to = new Date(data.from).setHours(23, 59, 59, 59);

      console.log("FROM", from, "TO", to);
      Axios({
        method: "POST",
        url: "https://ahlulquran.herokuapp.com/admin/search",
        data: { from: from, to: to }
      }).then((resp) => {
        console.log(resp);
      }).catch(err => console.log(err))

    } else {
      const from = new Date(data.from).setHours(0, 0, 0, 0)
      const to = new Date(data.to).setHours(23, 59, 59, 59)

      console.log("FROM", from, "TO", to);
      Axios({
        method: "POST",
        url: "https://ahlulquran.herokuapp.com/admin/search",
        data: { from: from, to: to }
      }).then((resp) => {
        console.log(resp);
      }).catch(err => console.log(err))
    }

  }

  const addSerialNumber = (id: any) => {
    console.log(id);
    Swal.fire({
      title: 'Add serial number',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Add',
      showLoaderOnConfirm: true,
      preConfirm: (serial) => {
        return Axios({
          method: "POST",
          url: "https://ahlulquran.herokuapp.com/admin/add-serial",
          data: { id: id, serialNumber: serial }
        })
          .then(response => {
            // if (!response.ok) {
            //   throw new Error(response.statusText)
            // }
            // return response.json()
            console.log(response);
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Added Successfully!`,
        }).then(confirm => {
          if (confirm.isConfirmed) {
            window.location.reload(false);
          }
        })
      }
    })
  }
  const showChildrens = (children: any) => {
    console.log(children);
    setChildren(children);
  }
  return (
    <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Dashboard</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              <input type="date" className="form-control" placeholder="From" {...register("from", { required: true })} />
            </div>
            <div className="col">
              <input type="date" className="form-control" placeholder="To" {...register("to")} />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>


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
              <th>Children</th>
            </tr>
          </thead>
          <tbody>
            {users !== undefined ?
              users.filter((u: any) => u.name.includes(searchName)).map((user: any, idx: any) => (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{user.name}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.whatsappNumber}</td>
                  <td>{user.country}</td>
                  <td>{user.gender}</td>
                  <td>{new Date(user.registeredDate).toLocaleDateString()}</td>
                  <td>{user.teacher}</td>
                  <td>{user.course}</td>
                  <td>
                    {
                      user.serialNumber ?
                        user.serialNumber
                        : (
                          <>
                            <SiAddthis style={{ color: "green", fontSize: "2rem", cursor: 'pointer' }} onClick={() => addSerialNumber(user._id)} />
                          </>
                        )
                    }
                  </td>
                  <td>
                    {
                      user.children.length > 0 ?
                        (
                          <>
                            <button className="btn btn-danger" onClick={() => showChildrens(user.children)} data-toggle="modal" data-target="#exampleModal">Show</button>
                            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Children</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th scope="col">#</th>
                                          <th scope="col">Fname</th>
                                          <th scope="col">Lname</th>
                                          <th scope="col">Age</th>
                                          <th scope="col">Nationality</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {
                                          children.map((child: any, idx: any) => (
                                            <tr key={idx}>
                                              <td>{idx + 1}</td>
                                              <td>{child["forename" + idx]}</td>
                                              <td>{child["surname" + idx]}</td>
                                              <td>{child["age" + idx]}</td>
                                              <td>{child["nationalty" + idx]}</td>

                                            </tr>
                                          ))
                                        }

                                      </tbody>
                                    </table>

                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>

                        ) : "no children"
                    }
                  </td>
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
