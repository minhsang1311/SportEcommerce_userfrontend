import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/login', { email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate(`/`);
          window.location.reload();
       } else {
          setMessageError(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
    };
  return (
    <div className='login-wrapper py-5 home-wrapper-2'>
     <div className='row'>
      <div className='col-12'>
        <div className='auth-card'>
          <h3 className='text-center mb-3'>Login</h3>
          <form onSubmit={handleLogin} className='d-flex flex-column gap-30'>
            <div>
              <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control'/>
            </div>
            <div>
              <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='form-control'/>
            </div>
            <span className="text-danger mb-3">{messageError}</span>
            <div>
              <Link to='/forgot-password'>Forgot Password?</Link>
              <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                <button type='submit' className='button border-0'>Login</button>
                <Link className='signup button' to='/sign-up'>Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Login