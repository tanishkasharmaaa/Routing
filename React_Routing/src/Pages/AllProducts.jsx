import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8080/products');
      const finalData = await res.json();
      setData(finalData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>All Products</div>

      <div data-testid="products-wrapper">
        {data.map((item) => (
          <div key={item.id}>
            <p>
              <Link to={`/products/${item.id}`}><p>{item.id}</p>
               <p>{item.name}</p> <p>{item.price}</p></Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
