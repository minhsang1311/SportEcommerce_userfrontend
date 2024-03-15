import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function SignUp () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/signup', {
      userName: name,
      email: email,
      phone: phone,
      password: password,
      address: address,
    })
    .then((res) => {
      if (res.data.Status === "Success") {
        navigate(`/`);
        window.location.reload();
     } else {
        setMessage(res.data.Message);
      }
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className='login-wrapper py-5 home-wrapper-2'>
     <div className='row'>
      <div className='col-12'>
        <div className='auth-card'>
          <h3 className='text-center mb-3'>Sign Up</h3>
          <form onSubmit={handleSignUp} className='d-flex flex-column gap-30'>
            <div>
            <h6>Name</h6>
              <input type='name' name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} required title="Please enter your name" className='form-control'/>
            </div>
            <div>
            <h6>Email</h6>
              <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className='form-control'/>
              <span className="text-danger mb-3">{message}</span>
            </div>
            <div>
            <h6>Phone Number</h6>
              <input type='tel' name='phone' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0][0-9]{9}" title="Please enter valid phone number" required className='form-control'/>
            </div>
            <div>
            <h6>Address</h6>
              <input type='text' name='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} required className='form-control'/>
            </div>
            <div>
            <h6>Password</h6>
              <input type='password' accept=".jpg, .png" name='Password' value={password} onChange={(e) => setPassword(e.target.value)} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" title="Password must have Minimum 8 characters, at least one letter, one number and one special character [@$!%*#?&]" required placeholder='Password' className='form-control'/>
            </div>
            <div>
              <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                <button type='Submit' className='button border-0'>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
  )
}

export default SignUp