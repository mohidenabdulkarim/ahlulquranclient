import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const HeaderSearch = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const [] = useState();
  const onSubmit = data => {
    const body = {
      name: data.username,
      password: data.password
    }



    Axios({
      method: "POST",
      url: "https://ahlulquran.herokuapp.com/admin/login",
      data: body,

    }).then(res => {
      if (!res.data.errorMsg) {
        setError(false);
        Cookies.set('access-token', res.data.accessToken, { expires: 7 });
        // navigate("/dashboard");
        window.location.replace("/dashboard")
        return;
      }
      setError(true);
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Please enter valid credential!',
      // })

    }).catch(err => console.log(err))
  }

  return (
    <div className='contact-form-model-wrap text-center'>
      <span className='model-close'>
        <i className='fa fa-times' />
      </span>
      <div className='contact-form-inner'>
        <div className='sec-title text-center'>
          <div className='sec-title-inner'>
            <h3>Login</h3>
          </div>
        </div>
        <div className='contact-form text-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row mrg20'>
              <div className='col-sm-12'>
                <input type='text' placeholder='Username' {...register('username')} />
              </div>
              <div className='col-sm-12'>
                <input type='text' placeholder='Password' {...register('password')} />
              </div>
              <div className='col-md-12 col-sm-12 col-lg-12 mt-5'>
                {/* <Link to="/account/register" className='thm-btn brd-rd40' type='submit'>
                  Login
                </Link> */}
                {
                  error && 
                <h5 className="text-danger mb-4">Please enter valid info</h5>
                }
                
                
                <button type="submit" className="thm-btn brd-rd40">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
