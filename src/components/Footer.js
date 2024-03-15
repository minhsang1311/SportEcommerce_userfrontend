import React from 'react'
import {BsFillSendFill, BsMenuButtonWide, BsFacebook, BsYoutube, BsInstagram, BsTiktok} from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <BsFillSendFill size={40} color='white'/>
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div class="input-group mb-3">
  <input type="text" class="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Addres" aria-describedby="basic-addon2"/>
  <span class="input-group-text py-2" id="basic-addon2">Subcribe</span>
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <div>
            <address className='text-white fs-6'>
              Hno : 8 Ton That Thuyet, <br/> My Dinh, Ha Noi <br/>
              PinCode: 100000
            </address>
            <a href='tel: (+84)-0979-934-306' className='mt-3 d-block mb-1 text-white'>
              +(84)-0979-934-306
            </a>
            <a href='mailto:sangnnm.sec@gmail.com' className='mt-3 d-block mb-0 text-white'>
              sangnnm.sec@gmail.com
            </a>
            <div className='social_icons d-flex align-items-center gap-30 mt-4'>
              <a href=''><BsFacebook size='30' color='white' alt='social icons'/></a>
              <a href=''><BsYoutube size='30' color='white' alt='social icons'/></a>
              <a href=''><BsInstagram size='30' color='white' alt='social icons'/></a>
              <a href=''><BsTiktok size='30' color='white' alt='social icons'/></a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-links d-flex flex-column '>
            <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
            <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
            <Link className='text-white py-2 mb-1'>Location</Link>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-links d-flex flex-column '>
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>Faq</Link>
            <Link className='text-white py-2 mb-1'>Contact</Link>
          </div>
        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-links d-flex flex-column '>
            <Link className='text-white py-2 mb-1'>Football</Link>
            <Link className='text-white py-2 mb-1'>Gym</Link>
            <Link className='text-white py-2 mb-1'>Golf</Link>
            <Link className='text-white py-2 mb-1'>Basketball</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'> &copy; { new Date().getFullYear()}; Powered By Developer's Minh Sang</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer