import React from 'react'
import './F1.css'
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";

const F1 = () => {
  return (
    <div className='f1'>
        <section className='left'>
          <div>
            <h4>Get the freshest Chobani news</h4>
            <input type='text' className='sub' placeholder='Enter email here' /> <button>subscribe</button> <br />
            <input type='checkbox' className='check' />by checking the box , you agree that you are at least 18 years of age <br />
            <div className='icons'>
              <ImFacebook2 /><FaYoutube /><FaXTwitter /><GrInstagram /><FaPinterest />
            </div>
            <p>2024 xyz, LLC. All right reserved</p>
          </div>

          <div className='right'>
            <div>
              <p>Chobani Cafe</p>
              <p>Foodservice</p>
            </div>
            <div>
              <p>Careers</p>
              <p>Alumni</p>
            </div>
            <div>
              <p>Consumer Care</p>
              <p>Chobani News</p>
            </div>
            <div>
              <select>
                <option value="">Choose region</option>
                <option value="abc">ABC</option>
                <option value="xyz">XYZ</option>
                <option value="jkl">JKL</option>
              </select>
            </div>
          </div>
        </section>
        <div className='bottom'>
          <ul>
            <li>Website Terms</li>|
            <li>Privacy Policy</li>|
            <li>Accessbility Statement</li>|
            <li>Supplier code of Conduct</li>|
            <li>Marketing to Children</li>
          </ul>
        </div>
      </div>
  )
}

export default F1
