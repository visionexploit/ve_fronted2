import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../new_logo-removebg-preview.png';
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/career-blog'>Careers</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div className="footer-link-items">
                <h2>Contact Us</h2>
                <Link to='tel:+905528117433'>Whatsapp</Link>
                <Link to='mailto:visionexploitconsultants@gmail.com'>Email</Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Social Media</h2>
                <Link to='https://www.facebook.com/share/1EhWL84fZE/'>Facebook</Link>
                <Link to='https://www.instagram.com/visionexploit?igsh=dDVpank1azZkNzNj'>Instagram</Link>
                <Link to='https://whatsapp.com/channel/0029VallfVQKAwEr474NrW3P'>Whatsapp</Link>
            </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to="/" className="social-logo">
                VEC <img src={logo} alt="VEC logo" className='navbar-logo-img' />
                </Link>
            </div>
            <small className="website-rights">© {new Date().getFullYear()} VEC. All rights reserved.</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to="https://www.facebook.com/share/1EhWL84fZE/"
                target="_blank"
                aria-label="Facebook"
                >
                   <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram"
                to="https://www.instagram.com/visionexploit?igsh=dDVpank1azZkNzNj"
                target="_blank"
                aria-label="Instagram"
                >
                   <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link whatsapp"
                    to="https://whatsapp.com/channel/0029VallfVQKAwEr474NrW3P"
                    target="_blank"
                    aria-label="Whatsapp"
                >
                <i className="fab fa-whatsapp"></i>
                </Link>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
