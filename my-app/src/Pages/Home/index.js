
import HomeBanner from '../../Components/HomeBanner';
import Button from '@mui/material/Button';
import { GoArrowRight } from "react-icons/go";
import banner from '../../assets/images/banner.jpg';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../Components/ProductItem';



const Home = () => {

  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return <>
 <HomeBanner/>
 <section className='homeProducts'>
  <div className='container'>
<div className='row'>
<div className='col-md-3'>

  <div className='banner'> <img src={banner} className='cursor w-100'/>
  </div >
</div>
<div className='col-md-9 productRow'>
  <div className='d-flex align-items-center'>
    <div className='info w-75'>
      <h3 className='mb-0 hd'>BEST SELLERS</h3>
      <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of march.</p>
      
    </div>
    <Button className='viewAllBtn ml-auto'>View All < GoArrowRight/></Button>
  </div>
  <div className='product_row w-100 mt-4'>

  <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>

       <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>

       <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>
       <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>
       <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>

       <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>

       <SwiperSlide>
          <ProductItem/>
       </SwiperSlide>
   
   
   
  </Swiper>
  </div>
</div>
</div>
  </div>
 
 </section>

  </> 
};

export default Home; // Correct export