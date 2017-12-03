// Vendor
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from 'react-router-dom'

// Components
import Slider from 'react-slick';
// import NewsletterSignup from '../components/NewsletterSignup';
import Slide from '../components/Slide';
// import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

// Assets
import logo from '../static/images/logo/ascend_logo.svg';
import arrowLeft from '../static/images/arrow_left.svg';
import arrowRight from '../static/images/arrow_right.svg';

// Sliders
import slide1 from '../static/images/device/dashboard.png';
import slide2 from '../static/images/device/progress.png';
import slide3 from '../static/images/device/leaderboards.png';

const NextArrow = (props) => {
    return (
        <img
        className="slick-arrow slick-next"
        src={arrowRight}
        onClick={props.onClick}
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

class Home extends Component {
    constructor(props) {
        super(props)

        this.handleLoad = this.handleLoad.bind(this);

        this.state = {
            loading: true,
        }
    }

    handleLoad() {
        this.setState({
            loading: false
        });
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);

        if(document.readyState === 'complete') this.handleLoad();
    }
    
    // componentWillUpdate() {
        // if(this.state.loading) this.setState({loading: false});
    // }

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
                { this.state.loading &&
                    <div className="loading-spinner"></div>
                }
                { !this.state.loading &&
                    <div>
                        <header className="header">
                            <Link to="/ascend/more-info" className="header__link">More Information</Link>
                            <div className="header__image">
                                <img src={logo} className="logo" alt="Ascend Logo" />
                            </div>
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
                            <div className="center">
                                <Link className="cta cta-yellow more-info-cta" to="/ascend/more-info">MORE INFORMATION</Link>
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </div>
        )
    }
}

export default Home;