import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="blog__footer">
        <div className="footer__brand">
            <a href="/">TEKUN.IO</a>
        </div>
        <div className="footer__desc">
            <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="footer__tittle">
            <a href="/" alt="Content">Campaigns</a>
            <a href="/" alt="Content">Email Marketing</a>
            <a href="/" alt="Content">Branding</a>
            <a href="/" alt="Content">Offline</a>
            <a href="/" alt="Content">Contact</a>
            <a href="/" alt="Content">FAQs</a>
        </div>
        <div className="footer__social">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default Footer