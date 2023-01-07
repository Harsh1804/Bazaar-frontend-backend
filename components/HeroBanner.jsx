import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div >
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className= "heroBanner-midText">{heroBanner.midText}{heroBanner.midText2}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="" className="hero-banner-image" />

        <div className="button1">
          <Link href="/">
            <button type="button" >{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner