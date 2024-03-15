import React from 'react'
import {ImCross} from 'react-icons/im'
import {FaCartArrowDown} from 'react-icons/fa6'
import { Rate, Button } from 'antd';

export const WishlistCard = ({product, onAddToCart, onRemoveToWishlist}) => {
  return (
    <div className='wishlist-card position-relative'>
    <ImCross onClick={() => onRemoveToWishlist(product)} className='position-absolute cross img-fluid'/>
    <div className='wishlist-card-image'>
    <img src={product.image_url} alt={product.name} />
    </div> 
    <div className='bg-white px-2 py-3'>
        <h5 className='title'>{product.name}</h5>
        <Rate className='mb-3' allowHalf disabled defaultValue={product.averageRate} />
        <div className='d-flex gap-10'>
        <h4 className='discount' style={{color: 'red'}}>$ {product.discount}</h4>
        <h6 className='price text-decoration-line-through'>$ {product.price}</h6>
        </div>
    </div>
    <FaCartArrowDown color='green' size={50} onClick={() => onAddToCart(product)} className='position-absolute cart img-fluid'/>
    </div>
  )
}
