import React from "react";
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import Swal from 'sweetalert2';
const Register = () => {
  const [hasChildren, setHasChildren] = React.useState(false);
  const [howManyChildren, setHowManyChildren] = React.useState([])
  const [week, setWeek] = React.useState([
    {
      name: 'saturday',
      value: false
    },
    {
      name: 'sunday',
      value: false
    },
    {
      name: 'monday',
      value: false
    },
    {
      name: 'tuesday',
      value: false
    },
    {
      name: 'wednesday',
      value: false
    },

    {
      name: 'thursday',
      value: false
    },

  ]);


  const handleChildren = (e) => {
    setHowManyChildren([]);
    var childrenArray = [];
    const num = parseInt(e.target.value);
    for (let i = 0; i < num; i++) {
      childrenArray.push(i);
    }
    setHowManyChildren(childrenArray);
  }
  const handleDays = (e) => {
    const selectedDays = [];
    week.forEach(day => {
      if (selectedDays.length > 2) {
        alert("You are only allowed to choose two days !!");
        document.querySelector(`[name='${e.target.name}']`).checked = false;
      } else {
        if (document.querySelector(`[name='${day.name}']`).checked === true) {
          selectedDays.push(day.name);
        }
      }
    })

    return selectedDays;

  }



  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {


    console.log(data)
    if (hasChildren) {
      var children = [];
      var obj = {}
      for (let item in data) {
        if (item.indexOf("forename") === 0) {
          obj = {};
          obj = { ...obj, [item]: data[item] }

        }
        if (item.indexOf("surname") === 0) {
          obj = { ...obj, [item]: data[item] }

        }
        if (item.indexOf("age") === 0) {
          obj = { ...obj, [item]: data[item] }

        }
        if (item.indexOf("nationalty") === 0) {
          obj = { ...obj, [item]: data[item] }
          children.push(obj);
        }
      }
      console.log(children);

    }
    const body = {
      name: data.username,
      email: data.email,
      contactNumber: data.contactNumber,
      whatsappNumber: data.whatsappNumber,
      country: data.country,
      city: data.city,
      gender: data.gender,
      dob: data.yob,
      children: children,
      days: handleDays(),
      course: data.course,
      teacher: data.teacher,
    }


    console.log(body);
    Axios({
      method: "POST",
      url: "http://localhost:3020/account/register",
      data: body
    }).then(res => {


    }).catch(err => console.log(err))

    Swal.fire({
      title: 'Good',
      text: 'Your registeration was successfull',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    document.querySelector('.myform').reset();
  }
  return (
    <>
      <div className='page-wrapper bg-gra-03 p-t-45 p-b-50'>
        <a href="/">
          <img src="/assets/images/logoo.png" alt="" className="ml-5" style={{ width: '100px' }} />
          <span style={{ marginLeft: '10px', color: 'white', fontSize: '20px' }}>Ahlu Qur'an Academy</span>
        </a>
        <div className='wrapper wrapper--w790'>
          <div className='card card-5 border-0'>
            <div className='card-heading'>
              <h2 className='title'>Registration Form</h2>
            </div>
            <div className='card-body'>
              <form className="myform" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='py-4'>
                  <legend>Personal Information</legend>
                  <div className='row justify-content-between'>
                    <input
                      className='input--style-5 col mr-2'
                      type='text'
                      name='name'
                      placeholder='Full Name'
                      {...register('username', { required: true })}
                    />
                    <input
                      className='input--style-5 col'
                      type='mail'
                      name='email'
                      placeholder='Email'
                      {...register('email', { required: true })}
                    />
                  </div>
                  <div className='row justify-content-between mt-3'>
                    <input
                      className='input--style-5 col mr-2'
                      type='text'
                      name='phone'
                      placeholder='Contact No#'
                      {...register('contactNumber', { required: true })}
                    />
                    <input
                      className='input--style-5 col'
                      type='number'
                      name='whatsapp'
                      placeholder='Whatsapp No#'
                      {...register('whatsappNumber', { required: true })}
                    />
                  </div>
                  <div className='row justify-content-between mt-3'>
                    <input
                      className='input--style-5 col mr-2'
                      type='text'
                      name='country'
                      placeholder='Country'
                      {...register('country', { required: true })}
                    />
                    <input
                      className='input--style-5 col'
                      type='text'
                      name='city'
                      placeholder='City'
                      {...register('city', { required: true })}
                    />


                  </div>
                  <div className='row justify-content-between mt-3'>
                    <select className='input--style-5 col py-2 mr-2' name='gender' {...register('gender', { required: true })}>
                      <option value='Gender' disabled selected>Gender</option>
                      <option value='female'>Female</option>
                      <option value='male'>Male</option>
                    </select>
                    <input
                      className='input--style-5 col'
                      type='text'
                      name='yob'
                      maxLength={4}
                      pattern="\d*"
                      placeholder='Year of birth'
                      {...register('yob', { required: true })}
                    />
                  </div>
                  <label className='radio-container py-4 mt-4' >
                    Has Children
                        <input type='checkbox' name='exist' {...register('hasChildren')} onClick={() => setHasChildren(!hasChildren)} />
                    <span className='checkmark' />
                  </label>
                  <br />
                  {
                    hasChildren && (
                      <>
                        <select name="howManyChildren" id="hmc" className="input--style-5 col p-2 w-auto mb-3" {...register('howManyChildren')} onClick={(e) => handleChildren(e)}>
                          <option value="" selected disabled>How many Children</option>
                          <option value="1" >1</option>
                          <option value="2" >2</option>
                          <option value="3" >3</option>
                          <option value="4" >4</option>
                          <option value="5" >5</option>
                        </select>

                        <table class="table">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Fore Name</th>
                              <th scope="col">Surname</th>
                              <th scope="col">Age</th>
                              <th scope="col">Nationalty</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              howManyChildren.map((child, index) => (
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>
                                    <input
                                      className='input--style-5 col'
                                      type='text'
                                      name='city'
                                      placeholder='Fore Name'
                                      {...register(`forename${index}`, { required: true })}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className='input--style-5 col'
                                      type='text'
                                      name='city'
                                      placeholder='Surname'
                                      {...register(`surname${index}`, { required: true })}
                                    />
                                  </td>
                                  <td> <input
                                    className='input--style-5 col'
                                    type='text'
                                    name='city'
                                    placeholder='age'
                                    {...register(`age${index}`, { required: true })}
                                  /></td>
                                  <td>
                                    <input
                                      className='input--style-5 col'
                                      type='text'
                                      name='city'
                                      placeholder='Nationalty'
                                      {...register(`nationalty${index}`, { required: true })}
                                    />
                                  </td>
                                </tr>
                              ))
                            }


                          </tbody>
                        </table>
                      </>
                    )
                  }

                  <div className="mt-5">

                    <h4>Choose two days</h4>
                    <br />
                    <div className='pt-1'>
                      <label className='radio-container mr-3'>
                        Saturday
                        <input type='checkbox' name='exist' {...register('saturday')} onChange={(e) => handleDays(e)} />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container mr-3'>
                        Sunday
                        <input type='checkbox' name='exist' {...register('sunday')} onChange={(e) => handleDays(e)} />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container mr-3'>
                        Monday
                        <input type='checkbox' name='exist' {...register('monday')} onChange={(e) => handleDays(e)} />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container mr-3'>
                        Tuesday
                        <input type='checkbox' name='exist' {...register('tuesday')} onChange={(e) => handleDays(e)} />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container mr-3'>
                        Wednesday
                        <input type='checkbox' name='exist' {...register('wednesday')} onChange={(e) => handleDays(e)} />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container mr-3'>
                        Thursday
                        <input type='checkbox' name='exist' {...register('thursday')} onChange={(e) => handleDays(e)} />
                        <span className='checkmark' />
                      </label>
                    </div>
                  </div>




                </fieldset>

                <fieldset className='py-4'>
                  <legend>Course Selection</legend>
                  <div className='form-row '>
                    <label className='label label--block'>
                      Qur'an: Al Qa’idah An Nuraniyah
                    </label>
                    <div className='p-t-15'>
                      <label className='radio-container m-r-55'>
                        One Year (1 page a day)
                        <input type='radio' name='oneyear' {...register('course')} value='One Year (1 page a day)' />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container m-r-55'>
                        Two Years (2 pages a day)
                        <input type='radio' name='twoyear' {...register('course')} value='Two Years (2 pages a day)' />
                        <span className='checkmark' />
                      </label>
                      <label className='radio-container'>
                        Four Years  (4 pages a day)
                        <input type='radio' name='fouryear' {...register('course')} value='Four Years  (4 pages a day)' />
                        <span className='checkmark' />
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <h4>Teacher’s Language preference</h4>
                  <div className='p-t-15'>
                    <label className='radio-container mr-3'>
                      Somali Speaker
                        <input type='radio' name='teacher' {...register('teacher')} value="somali speaker" />
                      <span className='checkmark' />
                    </label>
                    <label className='radio-container mr-3'>
                      Arabic Speaker
                        <input type='radio' name='teacher' {...register('teacher')} value="arabic speaker" />
                      <span className='checkmark' />
                    </label>
                    <label className='radio-container mr-3'>
                      English Speaker
                        <input type='radio' name='teacher' {...register('teacher')} value="english speaker" />
                      <span className='checkmark' />
                    </label>
                    <label className='radio-container mr-3'>
                      Somali & Arabic
                        <input type='radio' name='teacher' {...register('teacher')} value="somali and arabic" />
                      <span className='checkmark' />
                    </label>
                    <label className='radio-container mr-3'>
                      Somali & English
                        <input type='radio' name='teacher' {...register('teacher')} value="somali and english" />
                      <span className='checkmark' />
                    </label>
                    <label className='radio-container mr-3'>
                      All Languages
                        <input type='radio' name='teacher' {...register('teacher')} value="all languages" />
                      <span className='checkmark' />
                    </label>
                  </div>
                </fieldset>

                <div className='w-100 d-flex justify-content-center mt-5'>
                  <button className='btn btn--radius-2 w-50 p-2 reg-btn' type='submit'>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
