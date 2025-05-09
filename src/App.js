import React from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="header-container">
          <div className="brand-name">
            <h1>Axomi-Kart</h1>
          </div>

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
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('./assets/beachimage.jpg')" }}>
        <div className="hero-content">
          <h2>GREAT SUMMER SALE</h2>
          <p>Your favorite place for online shopping</p>
          <p>SHOP NOW</p>
        </div>
      </section>

      {/* Custom Div */}
      <div className="custom-div" style={{ backgroundImage: "url('./assets/main image0.jpg')" }}>
        <button className="nav-button prev-button"><i className="fas fa-chevron-left"></i></button>
        <button className="nav-button next-button"><i className="fas fa-chevron-right"></i></button>
      </div>

      {/* Small Divs */}
      <div className="small-divs-container">
        {['electronics product.jpg', 'fashion.jpg', 'home decor.jpg', 'skincare.jpg'].map((img, idx) => (
          <div key={idx} className="small-div" style={{ backgroundImage: `url('./assets/${img}')` }}></div>
        ))}
      </div>

      <div className="small-divs-container">
        {['google.jpg', 'plix.jpg', 'grinder.jpg', 'almonds.jpg'].map((img, idx) => (
          <div key={idx} className="small-div" style={{ backgroundImage: `url('./assets/${img}')` }}></div>
        ))}
      </div>

      {/* Product Banners */}
      {['seasonal-sale.jpg', 'new-arrivals.jpg', 'electronics-banner.jpg', 'fashion-banner.jpg'].map((banner, idx) => (
        <div key={idx} className={`product-div${idx === 1 ? ' second-product-div' : idx === 2 ? ' third-product-div' : idx === 3 ? ' fourth-product-div' : ''}`} style={{ backgroundImage: `url('assets/banners/${banner}')` }}>
          <button className="nav-button prev-button"><i className="fas fa-chevron-left"></i></button>
          <button className="nav-button next-button"><i className="fas fa-chevron-right"></i></button>
        </div>
      ))}

      {/* Small Product Containers */}
      <div className="small-product-container">
        {['kids wear.jpg', 'girls wear.jpg', 'girls saree.jpg', 'boys wear.jpg'].map((img, idx) => (
          <div key={idx} className="small-product-item" style={{ backgroundImage: `url('./assets/${img}')` }}>
            <button className="small-nav-button prev-button"><i className="fas fa-chevron-left"></i></button>
            <button className="small-nav-button next-button"><i className="fas fa-chevron-right"></i></button>
          </div>
        ))}
      </div>

      <div className="secondsmall-product-container">
        {['western mens wear.jpg', 'western wear girls.jpg', 'girl with shirt.jpg', 'mens casual wear.jpg'].map((img, idx) => (
          <div key={idx} className="secondsmall-product-item" style={{ backgroundImage: `url('./assets/${img}')` }}>
            <button className="small-nav-button prev-button"><i className="fas fa-chevron-left"></i></button>
            <button className="small-nav-button next-button"><i className="fas fa-chevron-right"></i></button>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {[
            { img: 'jwellery.jpg', name: 'Jwellery', price: '$99.99' },
            { img: 'cosmetics.jpg', name: 'Cosmetics', price: '$149.99' },
            { img: 'bag.jpg', name: 'Hand Bag', price: '$49.99' },
            { img: 'headphones.jpg', name: 'Premium Headphones', price: '$79.99' },
            { img: 'shoes.jpg', name: 'Running Shoes', price: '$89.99' },
            { img: 'camera.jpg', name: 'camera', price: '$129.99' },
            { img: 'luxery perfumes.jpg', name: 'Luxury Perfume', price: '$59.99' },
            { img: 'watch.jpg', name: 'Smart Watch Pro', price: '$179.99' },
            { img: 'sunglasses.jpg', name: 'Sunglasses Pro', price: '$69.99' }
          ].map((product, idx) => (
            <div key={idx} className="product-item">
              <img src={`./assets/${product.img}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;
