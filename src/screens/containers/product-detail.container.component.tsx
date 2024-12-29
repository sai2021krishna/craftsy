import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetailsContainer = () => {
    const location = useLocation();
    console.info(location.pathname);
  return (
    <div>ProductDetailsContainer</div>
  )
}

export default ProductDetailsContainer;