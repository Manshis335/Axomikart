import React from 'react';

function FeaturedProducts() {
  const products = [
    { img: 'jwellery.jpg', name: 'Jwellery', price: '$99.99' },
    { img: 'cosmetics.jpg', name: 'Cosmetics', price: '$149.99' },
    { img: 'bag.jpg', name: 'Hand Bag', price: '$49.99' },
    { img: 'headphones.jpg', name: 'Premium Headphones', price: '$79.99' },
    { img: 'shoes.jpg', name: 'Running Shoes', price: '$89.99' },
    { img: 'camera.jpg', name: 'camera', price: '$129.99' },
    { img: 'luxery perfumes.jpg', name: 'Luxury Perfume', price: '$59.99' },
    { img: 'watch.jpg', name: 'Smart Watch Pro', price: '$179.99' },
    { img: 'sunglasses.jpg', name: 'Sunglasses Pro', price: '$69.99' }
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product, idx) => (
          <div key={idx} className="product-item">
            <img src={`./assets/${product.img}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
