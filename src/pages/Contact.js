import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaInfo} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0968416257992!2d105.78011157699525!3d21.028810787773526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1694967964395!5m2!1sen!2s" width="100%" height="450" className='border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='col-12 mt-5'>
        <div className='contact-inner-wrapper d-flex justify-content-between'>
          <div>
          <h3 className='contact-title mb-4'>Contact</h3>
          <form action='' className='d-flex flex-column gap-15'>
            <div>
              <input type="text" className='form-control' placeholder='Name'/>
            </div>
            <div>
              <input type="text" className='form-control' placeholder='Email'/>
            </div>
            <div>
              <input type="text" className='form-control' placeholder='Mobile'/>
            </div>
            <div>
              <textarea name='' id='' className='w-100 form-control' cols='30' row='10' placeholder='Comments'></textarea>
            </div>
            <div>
              <button className='button border-0'>Submit</button>
            </div>
          </form>
          </div>
          <div>
          <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
          <div>
            <ul className='ps-0'>
              <li className='d-flex gap-10 mb-3'>
                 <AiFillHome className='fs-5'/>
                 <address className='mb-0'>8 Ton That Thuyet St, Cau Giay, Ha Noi, VN 100000</address>
              </li>
              <li className='d-flex gap-10 mb-3'>
                <BsFillTelephoneFill className='fs-5'/>
                <a href='tel: (+84)-0979-934-306' className='text-black'>+(84)-0979-934-306</a>
              </li>
              <li className='d-flex gap-10 mb-3'>
                <MdEmail className='fs-5'/>
                <a href='mailto:sangnnm.sec@gmail.com' className='text-black'>
              sangnnm.sec@gmail.com
            </a>
              </li>
              <li className='d-flex gap-10 mb-3'>
                <FaInfo className='fs-5'/>
                <p>Monday - Friday 8 AM - 8 PM</p>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Contact