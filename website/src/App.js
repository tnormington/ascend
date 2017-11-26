// Vendor
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Slider from 'react-slick';
import NewsletterSignup from './components/NewsletterSignup';
import Slide from './components/Slide';

// Assets
import logo from './static/images/ascend_logo.svg';
import arrowLeft from './static/images/arrow_left.svg';
import arrowRight from './static/images/arrow_right.svg';

// Sliders
import slide1 from './static/images/device/dashboard.png';
import slide2 from './static/images/device/progress.png';
import slide3 from './static/images/device/leaderboards.png';

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
            <div>
              <Slide
                body="Earn experience points and trophies to level up your profile and unlock aesthetic features."
                image={slide1}
                imageAlt="Screenshot of the dashboard" />
            </div>
            <div>
              <Slide
                body="Track your progress as you get closer to clearing all of the 14ers."
                image={slide2}
                imageAlt="Screenshot of a mountain record" />
            </div>
            <div>
              <Slide
                body="Compete against everyone for first place on the leaderboards."
                image={slide3}
                imageAlt="Screenshot of a leaderboards" />
            </div>
          </Slider>
        </div>
        <div className="newsletter-signup-wrapper">
          <NewsletterSignup />
        </div>
        <div className="footer-bar-wrapper">
          <footer className="footer">
            &copy; Ascend 2017  || brought to you by <a href="http://tjn.io" target="_blank" rel="noopener noreferrer">tjn.io</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
