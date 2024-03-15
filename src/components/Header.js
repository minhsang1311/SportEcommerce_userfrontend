import React, {useEffect, useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsCart, BsHeart, BsFillPersonFill, BsMenuButtonWide} from 'react-icons/bs'
import axios from 'axios'
const Header = () => {
  const [user, setUser] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`http://localhost:8081/`)
    .then(res => {
      setUser(res.data)
      console.log(user)
    }).catch((err) => console.log(err))
  }, [])
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0'>Website Find Location Sport And Shopping</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>
              Hotline: <a className='text-white' href='tel:(+84)-0979-934-306'>(+84)-0979-934-306</a></p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
    <div class="container-xxl">
    <div className='row'>
      <div className='col-2'>
        <h1>
          <Link to='/' className='logo'><img src='./Logo2.png' /></Link>
        </h1>
      </div>
      <div className='col-5'>
      <div className="input-group mb-3">
  <input type="text" class="form-control py-2" placeholder="Search Products Here..." aria-label="Search Products Here..." aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">
    <BsSearch className='fs-6' />
  </span>
      </div>
      </div>
      <div className='col-5'>
        <div className='header-upper-links d-flex align-items-center justify-content-evenly'>
          <div>
          {user ? (
            <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
            <BsHeart size={30} color='white' alt='wishlist'/>
            <p className='mb-0'>
              Favourite  <br /> Wishlist
            </p>
            </Link>
            ) : (
              <Link to='/Login' className='d-flex align-items-center gap-10 text-white'>
            <BsHeart size={30} color='white' alt='wishlist'/>
            <p className='mb-0'>
              Favourite  <br /> Wishlist
            </p>
            </Link>
          )}
          </div>
          <div>
      {user ? (
        <Link to="/user-info" className="d-flex align-items-center gap-10 text-white">
          <BsFillPersonFill size={30} color="white" alt="user" />
          <p className="mb-0">
            Login <br /> My Account
          </p>
        </Link>
      ) : (
        <Link to="/login" className="d-flex align-items-center gap-10 text-white">
          <BsFillPersonFill size={30} color="white" alt="user" />
          <p className="mb-0">
            Login <br /> My Account
          </p>
        </Link>
      )}
    </div>
          <div>
          {user ? (
            <Link to='/cart'className='d-flex align-items-center  gap-10 text-white'>
            <BsCart size={30} color='#febd69' alt='cart'/>
            <div className='d-flex flex-column'>
              <span className='badge bg-white text-dark'>0</span>
              <p className='mb-0 text-white'>$0.00</p>
            </div>
            </Link>
            ) : (
              <Link to='/login'className='d-flex align-items-center  gap-10 text-white'>
            <BsCart size={30} color='#febd69' alt='cart'/>
            <div className='d-flex flex-column'>
              <span className='badge bg-white text-dark'>0</span>
              <p className='mb-0 text-white'>$0.00</p>
            </div>
            </Link>
          )}
          </div>
        </div>
      </div>
    </div>  
    </div>
    </header>
    <header className='header-bottom py-3'>
    <div className='container-xxl'>
      <div className='col-12'>
        <div className='menu-bottom d-flex align-items-center gap-30'>
          <div>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <BsMenuButtonWide color='white'/><span className='me-5 d-inline-blo'>Shop Categories</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>
      <Link to='/fashion' className='dropdown-item text-white'>
        Fashion
    </Link>
    </li>
    <li>
      <Link className='dropdown-item text-white' to="/brand">
        Brand
    </Link>
    </li>
    <li>
      <Link className='dropdown-item text-white' to="/sport">
        Sport
    </Link>
    </li>
  </ul>
          </div>
          </div>
          <div className='menu-links'>
          <div className='d-flex align-items-center gap-15'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/store'>Our Store</NavLink>
            <NavLink to='/find'>Find Sport Location</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
          </div>
        </div>
      </div>
    </div>
    </header>
    </>
  )
}

export default Header