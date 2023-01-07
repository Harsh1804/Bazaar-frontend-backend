import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <section class="footer">
        <div class="footer-box">
            <h3>BAZAAR</h3>
            <p>Our online store is the perfect place to shop for unique, one-of-a-kind clothing items that you won't find anywhere else.
            </p>
        </div>
        <div class="footer-box">
            <h3>Support</h3>
            <li><a href="#">Products</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
        </div>
        <div class="footer-box">
            <h3>View Guides</h3>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Our Partners</a></li>
        </div>
        <div class="footer-box contact">
            <h3>Contact</h3>
            <li><a href="#">250 New Delhi, India</a></li>
            <li><a href="#">+91 999 5555 999</a></li>
            <li><a href="#">Bazaar@shop.in</a></li>
        </div>
    </section>
      <p>2023 Bazaar All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer