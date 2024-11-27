import React from 'react'
import './F3.css'
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import logo from '../assets/Trade Logo.png'

const F3 = () => {
    return (
        <div className='f3'>
            <div className="foot-nav">
                <h1>MENU</h1>
                <p>CALL US +91 123456789 <button>BOOK NOW</button> </p>
            </div>

            <div className='flex'>
                <section className='left'>
                    <ul>
                        <li><img src={logo} alt="jhjhghj" height="60px" width="120px" /></li>
                        <li>ITA / ENG</li>
                        <li>OVERVIEW</li>
                        <li>HOTEL</li>
                        <li>CLUB LOUNGE</li>
                        <li>SUITES</li>
                        <li>DINING</li>
                        <li>WEDDINGS</li>
                        <li>CONTACTS</li>
                        <li><FaFacebookF className='icon' /> | <RiInstagramLine className='icon' /></li>
                    </ul>
                </section>

                <section className='middle'>
                    <div className='flex'>
                        <h2>Contacts</h2>
                        <hr />
                        <ul>
                            <li>
                                <p>
                                    PAIZZA DELLA VITTORIA,<br />
                                    80067 SORRENTO, ITALY
                                </p>
                            </li>
                            <li>
                                <p>
                                    PHONE +39 789456123 <br />
                                    FAX +91 741852963
                                </p>
                            </li>
                            <li>
                                <p>INFO@BELLEVUE.IT</p>
                            </li>


                        </ul>
                    </div>
                    <hr />
                    <div className='flex'>
                        <div className='flex'>
                            <h2>Suites</h2>
                            <hr />
                            <ul>
                                <li>VENERE</li>
                                <li>VESUVIO</li>
                                <li>ROCCIA</li>
                                <li>POMPEIANA</li>
                                <li>LADY HAMILTON</li>
                                <li>CAMELIA</li>
                                <li>GRAND TOUR</li>
                                <li>DE LA SYRENE</li>
                                <li>LORD ASTRO</li>
                            </ul>
                        </div>
                        <div className='flex'>
                            <h2>Rooms</h2>
                            <hr />
                            <ul>
                                <li>SUPERIOR COURTYARD VIEW</li>
                                <li>CLASSIC SEA VIEW</li>
                                <li>COMFORT SEA VIEW</li>
                                <li>DELUXE SEA VIEW</li>
                                <li>JUNIOR SUITE SEA VIEW</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr />

                <section className='right'>
                    <h1>ARE YOU GOING TO ENJOYOUR DINING EXPERIENCE</h1><hr />
                    <h1>ARE YOU GOING TO ENJOYOUR DINING EXPERIENCE</h1> <hr />
                </section>
            </div>
        </div>
    )
}

export default F3;