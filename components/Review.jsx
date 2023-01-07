import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = ({ review }) => {
    return (
      <div>
            <selection className="reviews" id="reviews">
        <h2 className="review-heading">Our Customer's</h2>
        <div className="review-container">
            <div className="box">
            <h2>Priya Singh</h2>
                <div className="stars">
                <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
                </div>
                <p>"I recently purchased a product from <b>Bazaar</b> and I am extremely satisfied with my experience. The website was easy to navigate and I was able to find exactly what I was looking for."</p>
                
            </div>
            <div className="box">
            <h2>Anuj Kumar</h2>
                <div className="stars">
                <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
                </div>
                <p>"My experience with <b>Bazaar</b> was excellent and I would highly recommend it to others. The product I received was of high quality and I am very happy with my purchase. Thank you for the great service!"</p>
                
            </div>
            <div className="box">
            <h2>Varun Sharma</h2>
                <div className="stars">
                <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
                </div>
                <p>"I am extremely satisfied with my experience. The product I ordered was exactly as described and arrived promptly. Overall, I had a great shopping experience and would highly recommend <b>Bazaar</b> to others."</p>
                
            </div>
        </div>
    </selection>
    <section class="newsletter">
        <h2>Subscribe For Special Discounts</h2>
        <form name="submit-to-google-sheet">
            <input type="email" name="Email" placeholder="Enter Your Email..." required></input>
            <button type="submit" class="email-btn">Subscribe</button>
        </form>
    </section>
    
      </div>
    )
  }

export default Review