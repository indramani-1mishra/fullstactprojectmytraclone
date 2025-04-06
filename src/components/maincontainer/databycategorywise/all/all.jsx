import React, { useState, useEffect } from 'react';
import Usefetchapi from '../../../customhooks/Usefetchapi';
import Reuseablecompont from '../../../reauseblecomponet/reuseablecompont';

export default function All() {
  const [product, setProduct] = useState([]);
  const { response } = Usefetchapi("https://mytrabackendclone-3.onrender.com/api/v1/products");

  useEffect(() => {
    if (response && response.data && Array.isArray(response.data)) {
      setProduct(response.data);
    }
  }, [response]);

  return (
    <>
      <Reuseablecompont data={product} />
    </>
  );
}
