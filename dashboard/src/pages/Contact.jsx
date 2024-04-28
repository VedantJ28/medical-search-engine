import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import "./Contact.css"
import { Nav_Cus } from '../components/Other/navbar/Nav_Cus';
import { Footer } from '../components/Other/footer/Footer';

export const Contact = () => {
    return (
        <div>
            <Nav_Cus/>
            <div className="contact-us-container">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <p>IIIT Allahabad</p>
                    </div>
                    <div className="contact-info-item">
                        <FaPhone className="contact-icon" />
                        <p>+91 9068340033</p>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="contact-icon" />
                        <p>iib2022033@iiita.ac.in</p>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}
