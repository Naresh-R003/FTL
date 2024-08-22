import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  .slick-slide {
    margin: 0px 0px;
  }

  .slick-slide img {
    width: 150px;
    height:60px;
  }

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
  height:100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
  
    display: block;
    
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 5px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`;



const SliderComponent = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  const logos = [
    'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/EXL%20Service.svg',
    'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Accenture.svg',
    'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Crisil.svg',
    'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Deloitte.svg',
    'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Genpact.svg',
   'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/HCL.svg',
   'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Hexaware.svg',
   'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Infosys.svg',
   'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/iOPEX%20IT.svg',
   'https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Prodapt.svg',
   "https://cdn-kohnj.nitrocdn.com/FkqlVXDhHrwlAoYVtoMCHwYEqhLTtDwv/assets/images/optimized/rev-8ebc8bd/teceze.com/sites/default/files/2023-10/Wipro.svg"
  ];

  return (
    <div className="sliderContainer">
      <SliderContainer>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="slide">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
};

export default SliderComponent;
