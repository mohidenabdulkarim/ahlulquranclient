import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className='contact-form-inner w-100 d-flex flex-column justify-content-center align-items-center'>
      <div className='sec-title text-center'>
        <div className='sec-title-inner'>
          <h3>Login</h3>
        </div>
      </div>
      <div className='contact-form text-center'>
        <form>
          <div className='row mrg20'>
            <div className='col-sm-12'>
              <input type='text' placeholder='Username' />
            </div>
            <div className='col-sm-12'>
              <input type='text' placeholder='Password' />
            </div>
            <div className='col-md-12 col-sm-12 col-lg-12 mt-5'>
              <NavLink to='/login' className='thm-btn brd-rd40' type='submit'>
                Login
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
