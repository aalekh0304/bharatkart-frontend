import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://bharatkart-backend-abc.onrender.com/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to BharatKart</h1>

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
