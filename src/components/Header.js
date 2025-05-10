import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="brand-name"><h1>Axomi-Kart</h1></div>
        <div className="header-left">
          <div className="header-item">Free Shipping</div>
          <div className="header-item">24/7 Support</div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><i className="fas fa-search"></i></button>
        </div>
        <div className="header-right">
          <div className="header-item">Secure Payments</div>
          <div className="header-item">Hot Deals</div>
          <div className="header-item">New Arrivals</div>
          <div className="header-item">hello, sign in Account&lists</div>
          <div className="header-item">Cart</div>
        </div>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/deals">Deals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
