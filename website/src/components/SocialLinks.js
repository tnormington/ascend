import React, { Component } from 'react';

import twitter from '../static/images/social/twitter.svg';
import instagram from '../static/images/social/instagram.svg';
import github from '../static/images/social/github.svg';

class SocialLinks extends Component {
    render() {

        return (
            <div className="social-links">
                <a
                href="https://twitter.com/__ascend_"
                target="_blank" 
                title="Ascend Twitter"
                rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter logo" />
                </a>
                <a
                href="https://www.instagram.com/ascend_app_/"
                target="_blank" 
                title="Ascend Instagram"
                rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram logo" />
                </a>
                <a
                href="https://github.com/tnormington/ascend"
                target="_blank" 
                title="Ascend Github Repo"
                rel="noopener noreferrer">
                    <img src={github} alt="Github logo" />
                </a>
            </div>
        )
    }
}

export default SocialLinks