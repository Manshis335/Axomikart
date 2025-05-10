import React from 'react';

function ProductBanner() {
  const banners = [
    'seasonal-sale.jpg',
    'new-arrivals.jpg',
    'electronics-banner.jpg',
    'fashion-banner.jpg'
  ];

  return (
    <>
      {banners.map((banner, idx) => (
        <div
          key={idx}
          className={`product-div${idx === 1 ? ' second-product-div' : idx === 2 ? ' third-product-div' : idx === 3 ? ' fourth-product-div' : ''}`}
          style={{ backgroundImage: `url('assets/banners/${banner}')` }}
        >
          <button className="nav-button prev-button"><i className="fas fa-chevron-left"></i></button>
          <button className="nav-button next-button"><i className="fas fa-chevron-right"></i></button>
        </div>
      ))}
    </>
  );
}

export default ProductBanner;
