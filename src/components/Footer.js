import React from 'react';

function Footer() {
  return (
    <>
      <div className="large-nav-footer">
        <ul>
          {['Home', 'Shop', 'Deals', 'New Arrivals', 'Contact Us', 'FAQs', 'Shipping Information', 'Careers'].map((item, idx) => (
            <li key={idx}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>

      <footer>
        <div className="footer-links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; 2025 E-Shop, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
