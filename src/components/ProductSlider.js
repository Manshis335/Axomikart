import React from 'react';

function ProductSlider() {
  const productSets = [
    ['kids wear.jpg', 'girls wear.jpg', 'girls saree.jpg', 'boys wear.jpg'],
    ['western mens wear.jpg', 'western wear girls.jpg', 'girl with shirt.jpg', 'mens casual wear.jpg']
  ];

  return (
    <>
      {productSets.map((set, i) => (
        <div key={i} className={i === 0 ? 'small-product-container' : 'secondsmall-product-container'}>
          {set.map((img, idx) => (
            <div key={idx} className={i === 0 ? 'small-product-item' : 'secondsmall-product-item'} style={{ backgroundImage: `url('./assets/${img}')` }}>
              <button className="small-nav-button prev-button"><i className="fas fa-chevron-left"></i></button>
              <button className="small-nav-button next-button"><i className="fas fa-chevron-right"></i></button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductSlider;
