import React from 'react';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
      <div className='icon-logo'></div><Link href="/">Bazaar</Link>
      </p>
                <ul id="navbar">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/women"><a>Women</a></Link></li>
                    <li><Link href="/men"><a>Men</a></Link></li>
                    <li><Link href="/about"><a>About Me</a></Link></li>
                    <li><Link href="/contact"><a>Contact Us</a></Link></li>
                </ul>
      <div>
      <button type="button" className="search-icon">
        <AiOutlineSearch />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      </div>
      

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar