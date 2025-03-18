import React from "react";
import Slider from "react-slick";


const HomeBanner = () =>{


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
      };
return(
    <div className='HomeBannerSection'>
            <Slider {...settings}>
                <div className="item">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h47/h85/33279588368414/AE-%26-TH-web600_ue--j93.jpg"className="w-100"/>
                </div>
                <div className="item">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h95/hf9/33279582535710/kraus-%26-Latin-Quarters-web600_398--o9u.jpg"className="w-100"/>
                </div>
                <div className="item">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h86/h42/33283675095070/Main-web_070824f.jpg"className="w-100"/>
                </div>
                <div className="item">
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h2e/hbf/32809094742046/Women-Western-web-------2024--03545000bargain.jpg"className="w-100"/>
                </div>
            </Slider>
   
    </div>
)
}

export default HomeBanner;