import React, {useState} from 'react'
import { WishlistCard } from '../components/WishlistCard';

export const Wishlist = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      name: 'Sample Produdsadssadsa assadasdsadsa 3444344334  1',
      description: 'This is a sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 19.99,
      image_url: './images/nike.png',
    },
    {
      id: 2,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/nike.png',
    },
    {
      id: 3,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
    {
      id: 4,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/nike.png',
    },
    {
      id: 5,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/nike.png',
    },
    {
      id: 6,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/golfbanner.jpg',
    },
    {
      id: 8,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      price: 29.99,
      image_url: './images/nike.png',
    },
    {
      id: 7,
      name: 'Sample Product 2',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/nike.png',
    },
  ])
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increment its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
    
      const handleRemoveToWishlist = (product) => {
        const updatedWishlist = productData.filter((item) => item.id !== product.id);
        setProductData(updatedWishlist);
      };
  return (
    <>
    <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='d-flex flex-wrap justify-content-space-between'>
            {productData.map((product) => (
            <div class='col-3 mb-5'>
              <WishlistCard
            onAddToCart={handleAddToCart}
            key={product.id}
            product={product}
            onRemoveToWishlist={handleRemoveToWishlist}
          />
            </div>
        ))}
            </div>
        </div>
    </div>
    </>
  )
}
