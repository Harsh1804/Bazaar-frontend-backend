import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Men = ({ men: { image, name, slug, price, Shop } }) => {
  return (
    <div>
      <Link href={`/men/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <div className="product-desc">
          <p className="product-price">₹{price}</p>
          <p className="product-price">{Shop}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Men