import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Rate, Button } from 'antd';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const ProductCard = ({ product, onAddToCart, onAddToWishlist, onRemoveToWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Function to handle adding/removing from the wishlist
  const handleAddToWishlist = () => {
    if (isInWishlist) {
      // If already in wishlist, remove it
      onRemoveToWishlist(product);
      
    } else {
      // If not in wishlist, add it
      onAddToWishlist(product);
    }
    setIsInWishlist(!isInWishlist);
  };
  return (
    <div className="product-card">
      <Link className="product-images">
      <img src={product.image_url} alt={product.name} />
      </Link>
      <div className='product-info'>
      <Link><h3 style={{color: '#febd69'}}>{product.name}</h3></Link>
      <Rate className='mb-3' allowHalf disabled defaultValue={product.averageRate} />
      <h1 style={{color: '#232f3e'}}>${product.discount}</h1>
      <h6 className='text-decoration-line-through' style={{color: 'red'}}>$ {product.price}</h6>
      <div className='d-flex align-items-center justify-content-center gap-3'> 
      <div className='add-to-cart'>
      <button class="btn btn-primary btn-lg" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
       
        <Button type="text"
            icon={isInWishlist ? <AiFillHeart size={30} color='red' /> : <AiOutlineHeart color='red' size={30}/>}
            onClick={handleAddToWishlist}
      >
      </Button>
       </div>
      </div>  
    </div>
  );
};

export default ProductCard;