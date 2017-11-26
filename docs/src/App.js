// Vendor
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Slider from 'react-slick';
import NewsletterSignup from './components/NewsletterSignup';

// Assets
import logo from './static/images/ascend_logo.svg';
import arrowLeft from './static/images/arrow_left.svg';
import arrowRight from './static/images/arrow_right.svg';

// Sliders
import slide1 from './static/images/device/dashboard.png';
import slide2 from './static/images/device/progress.png';

// Style
import './App.css';


const NextArrow = (props) => {
  return (
    <img
      className="slick-arrow slick-next"
      onClick={props.onClick}
      src={arrowRight}
      alt="Arrow pointing right" />
    )
  }
  
  const PrevArrow = (props) => {
    return (
      <img
      className="slick-arrow slick-prev"
      onClick={props.onClick}
      src={arrowLeft}
      alt="Arrow pointing left" />
  )
}


class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div>
        <header className="header">
          <img src={logo} className="logo" alt="Ascend Logo" />
        </header>
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="slide">
              <div className="slide-image-wrapper">
                <img src={slide1} alt="Slide 1" />
              </div>
              <h2>Earn experience points and trophies to level up your profile and unlock aesthetic features.</h2>
            </div>
            <div className="slide">
              <div className="slide-image-wrapper">
                <img src={slide2} alt="Slide 1" />
              </div>
              <h2>Track your progress as you get closer to clearing all of the 14ers.</h2>
            </div>
          </Slider>
        </div>
        <div className="newsletter-signup-wrapper">
          <NewsletterSignup />
        </div>
        <div className="footer-bar-wrapper">
          <footer className="footer">
            &copy; Ascend 2017  || brought to you by <a href="http://tjn.io" target="_blank">tjn.io</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
