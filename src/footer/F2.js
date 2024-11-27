import React from 'react'
import './F2.css'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const F2 = () => {
    return (
        <div className='f2'>
            <div className='top'>
                <div>
                    <h3>Get connected with us on social networks</h3>
                </div>
                <div className='icons'>
                    <FaFacebookF />
                    <FaYoutube />
                    <FaXTwitter />
                    <AiFillInstagram />
                    <FaLinkedinIn />
                </div>
            </div>

            <div className='middle'>
                <section>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,</p>
                </section>
                <section>
                    <h2>Products</h2>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>

                </section>
                <section>
                    <h2>Useful Links</h2>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>

                </section>
                <section>
                    <h2>Contacts</h2>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </section>
            </div>

            <div className='bottom'>
                <p>©2024 Copyright : Trade Syndicate</p>
            </div>
        </div>
    )
}

export default F2
