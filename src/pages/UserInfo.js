import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from 'axios'

const UserInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState([]);
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8081/');
        const userData = response.data;
        setName(userData.userName);
        setEmail(userData.email);
        setPhone(userData.phone);
        setAddress(userData.address);
        setImage(userData.image);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    fetchUserData(); // Call the async function
  }, []); 
  const handleLogout = () => {
    axios.get('http://localhost:8081/logout')
    .then(res => {
      if(res.data.Status === "Success"){
        navigate('/');
        window.location.reload();
      } else {alert("Error")}
    }).catch(err => console.log(err));
  }

  const [images, setImages] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setImages(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8081/info', {
      userName: name,
      phone: phone,
      address: address,
    })
    .then((res) => {
        window.location.reload();
        console.log('Success')
    })
    .catch((err) => console.log('Error', err));
  };
  return (
    <div className='login-wrapper py-5 home-wrapper-2'>
    <div className='row'>
     <div className='col-12'>
       <div className='auth-card'>
         <h3 className='text-center mb-3'>Your Information</h3>
         <div className='text-center avatar'><img src='./Images/Watch.png'/></div>
         <form action='' className='d-flex flex-column gap-30'>
           <div>
            <h6>Name</h6>
             <input type='name' name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} required title="Please enter your name" className='form-control'/>
           </div>
           <div>
           <h6>Email</h6>
             <input type='email' name='email' placeholder='Email' value={email} disabled required title="Please enter valid phone number" className='form-control'/>
           </div>
           <div>
           <h6>Phone Number</h6>
             <input type='tel' name='phone' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}  pattern="[0][0-9]{9}" title="Please enter valid phone number" required className='form-control'/>
           </div>
           <div>
           <h6>Address</h6>
             <input type='text' name='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}  required className='form-control'/>
           </div>
           <div>
           <div>
           <h6>Choose Your Avatar</h6>
           <ImgCrop rotationSlider>
      <Upload
        action='http://localhost:8081/upload'
        listType="picture-card"
        name="images"
        fileList={images}
        onChange={onChange}
        onPreview={onPreview}
      >
      </Upload>
    </ImgCrop>
           </div>
           <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                <button onClick={handleFormSubmit} type='submit' className='button border-0'>Change Info</button>
                <button onClick={handleLogout} className='signup button'>Log Out</button>
              </div>
           </div>
         </form>
       </div>
     </div>
    </div>
   </div>
  )
}
export default UserInfo