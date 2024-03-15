import React from 'react'
import {Link} from 'react-router-dom'
export const ForgotPassword = () => {
  return (
    <div className='login-wrapper py-5 home-wrapper-2'>
     <div className='row'>
      <div className='col-12'>
        <div className='auth-card'>
          <h3 className='text-center mb-3'>Reset Your Password</h3>
          <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
          <form action='' className='d-flex flex-column gap-30'>
            <div>
              <input type='email' name='email' placeholder='Email' className='form-control'/>
            </div>
            <div>
              <div className='d-flex justify-content-center flex-column gap-15 align-items-center'>
                <button className='button border-0'>Submit</button>
                <Link to='/login'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}
