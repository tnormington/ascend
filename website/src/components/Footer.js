import React, { Component } from 'react';

import NewsletterSignup from '../components/NewsletterSignup';
import SocialLinks from '../components/SocialLinks';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="newsletter-signup-wrapper">
                    <NewsletterSignup />
                    <SocialLinks />
                </div>
                <div className="footer-bar-wrapper">
                    <footer className="footer">
                    &copy; Ascend 2017  || brought to you by <a href="http://tjn.io" target="_blank" rel="noopener noreferrer">tjn.io</a>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer;