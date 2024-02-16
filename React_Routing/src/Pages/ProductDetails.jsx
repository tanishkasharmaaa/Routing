import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:8080/products/${id}`);
      const finalData = await res.json();
      setData(finalData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div data-testid="product-details">
     <div>
        <div key={data.id}>
          <p>{data.id}</p>
          <p data-testid = "product_name">{data.name}</p>
          <p data-testid ="product_price">{data.price}</p>
        </div>
      </div>
    </div>
  );
}