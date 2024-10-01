import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import { Link } from 'react-router-dom'; 

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <Link to={`/product/${item.id}`} key={item.id}>
              <Item 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
