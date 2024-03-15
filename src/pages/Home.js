import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {BsTruck, BsGift, BsHeadset, BsCreditCard2Front, BsPercent} from 'react-icons/bs'
import ProductCard from '../components/ProductCard'
import Marquee from 'react-fast-marquee'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/newProduct')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      });
  }, []);
  const productData = [
    {
      id: 1,
      name: 'Shoe Nike',
      description: 'This is a sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 19.99,
      image_url: './images/shoe.png',
    },
    {
      id: 2,
      name: 'Shoe Nike',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/shoe.png',
    },
    {
      id: 3,
      name: 'Apple Watch',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
    {
      id: 4,
      name: 'Apple Watch',
      description: 'Another sample product description.',
      averageRate: 5,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
    {
      id: 5,
      name: 'Apple Watch',
      description: 'Another sample product description.',
      averageRate: 4,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
    {
      id: 6,
      name: 'Apple Watch', 
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
    {
      id: 8,
      name: 'Apple Watch',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
    {
      id: 7,
      name: 'Apple Watch',
      description: 'Another sample product description.',
      averageRate: 3.2,
      discount: 10.99,
      price: 29.99,
      image_url: './images/watch.png',
    },
  ];

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };
  const handleRemoveToWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };

  return (<>
  <section className='home-wrapper-1 py-5'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-6'>
      <div className='main-banner position-relative '>
        <img src='./images/footballs.jpg' className='img-fluid rounded-3' alt='main banner'/>
        <div className='main-banner-content position-absolute'>
          <h4>STADIUM BOOKING OFFER</h4>
          <h5>Football stadium</h5>
          <p>From $30 per match</p>
          <Link className='button'>BOOKING NOW</Link>
        </div>
      </div>
    </div>
    <div className='col-6'>
      <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
      <div className='small-banner position-relative'>
        <img src='./images/Swimbanner.jpg' className='img-fluid rounded-3' alt='small banner'/>
        <div className='small-banner-content position-absolute'>
          <h4>SUPER OFFER</h4>
          <h5>Swimming Class</h5>
          <p>From $20 per month</p>
        </div>
      </div>
      <div className='small-banner position-relative'>
        <img src='./images/Gymbanner.jpg' className='img-fluid rounded-3' alt='small banner'/>
        <div className='small-banner-content position-absolute'>
          <h4>SUPER OFFER</h4>
          <h5>Gym Fitness</h5>
          <p>From $25 per month</p>
        </div>
      </div>
      <div className='small-banner position-relative'>
        <img src='./images/basketbanner.jpg' className='img-fluid rounded-3' alt='small banner'/>
        <div className='small-banner-content position-absolute'>
          <h4>NEW ARRIVAL</h4>
          <h5>Basketball Clothing</h5>
          <p>From $10</p>
        </div>
      </div>
      <div className='small-banner position-relative'>
        <img src='./images/golfbanner.jpg' className='img-fluid rounded-3' alt='small banner'/>
        <div className='small-banner-content position-absolute'>
          <h4>NEW ARRIVAL</h4>
          <h5>Golf clubs</h5>
          <p>From $50</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
  </section>
  <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='services d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center gap-15'>
            <BsTruck size={30}/>
            <div>
            <h6>Free Shipping</h6>
            <p className='mb-0'>From all orders over $100</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
            <BsGift size={30}/>
            <div>
            <h6>Daily Surprise Offers</h6>
            <p className='mb-0'>Save upto 25% off</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
            <BsHeadset size={30}/>
            <div>
            <h6>Support 24/7</h6>
            <p className='mb-0'>Shop with an expert</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
            <BsPercent size={30}/>
            <div>
            <p className='mb-0'>Get Factory Default Price</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-15'>
            <BsCreditCard2Front size={30}/>
          <div>
            <h6>Secure Payments</h6>
            <p className='mb-0'>100% Protected Payment</p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
         <Link className='d-flex gap-10 p-3 align-items-center'>
            <div className>
              <h6 style={{color: 'black'}}>Fashion</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/t-shirt.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Shoe</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/shoe.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Watch</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/Watch.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Uniforms</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/sport_uniform.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Basketball</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/basketball.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Gym</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/gym.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Golf</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/golf.png" alt="fashion"/>
          </Link>
          <Link className='d-flex gap-10 p-3 align-items-center'>
            <div>
              <h6 style={{color: 'black'}}>Football</h6>
              <p style={{color: 'black'}}>10 Items</p>
            </div>
            <img src="./images/football.png" alt="fashion"/>
          </Link>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section className='marque-wrapper home-wrapper-2 py-5'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-12'>
      <div className='marquee-inner-wrapper card-wrapper'>
<Marquee className='d-flex'>
  <div className='mx-5 w-25'>
    <img src='./images/addidas.png' alt='brand'/>
  </div>
  <div className='mx-5 w-25'>
    <img src='./images/nike.png' alt='brand'/>
  </div>
  <div className='mx-5 w-25'>
    <img src='./images/apple.png' alt='brand'/>
  </div>
  <div className='mx-5 w-25'>
    <img src='./images/newblance.png' alt='brand'/>
  </div>
  <div className='mx-5 w-25'>
    <img src='./images/mlb.png' alt='brand'/>
  </div>
  <div className='mx-5 w-25'>
    <img src='./images/casio.png' alt='brand'/>
  </div>
  <div className='mx-5 w-25'>
    <img src='./images/puma.png' alt='brand'/>
  </div>
</Marquee>
      </div>
    </div>
  </div>
</div>
  </section>
  <section className='new-product-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
      <h2 className='mb-3'>New Product</h2>
        <div className='row'>
          {productData.map((product) => (
            <div class='col-3'>
              <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onRemoveToWishlist={handleRemoveToWishlist}
          />
            </div>
        ))}
         </div>
      </div>
  </section>
    </>
  )
}

export default Home