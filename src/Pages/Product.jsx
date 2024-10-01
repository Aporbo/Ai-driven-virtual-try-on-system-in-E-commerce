import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import data_product from '../Components/Assets/data'; // Adjust the path as necessary
import './Product.css';

const Product = () => {
  const { productId } = useParams();
  const product = data_product.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: Tk{product.new_price}</p>
      <p>{product.description}</p>
      <Link to="/work-in-progress">
        <button className="try-on-button">Try On</button>
      </Link>
    </div>
  );
};

export default Product;
