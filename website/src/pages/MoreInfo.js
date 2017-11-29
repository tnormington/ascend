import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer'

import logo from '../static/images/logo/logo_letter.svg';

class MoreInfo extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <header className="header-short">
                    <div className="container">
                        <Link to="/" className="header-short__logo" title="Home">
                            <img src={logo} alt="Ascend letter logo" />
                        </Link>
                    </div>
                </header>
                <div className="container main-content">
                    <h2>Who?</h2>
                    <p>
                        My name is Tim Normington, I am a web developer from Denver, Colorado. I really enjoy hiking, mountains, and the outdoors. You can read a bit more about me on my website <a href="http://tjn.io/" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <h2>What?</h2>
                    <p>
                        The goal with Ascend is to create a place for you to track, share, and show-off your hikes. I want to inspire people to get out and try something they don't think they can do.
                    </p>
                    <h2>Why?</h2>
                    <p>
                        I want to inspire people to go outside and climb mountains, I figured a good way to do that is by turning it into a game. I would like to see people competing on the leaderboards for the most elevation, or fastest hike, or most night nikes, the list goes on.
                    </p>
                    <h2>Where?</h2>
                    <p>
                        My goal is to start with Denver, Colorado. Specifically the 14,000 ft mountains. Eventually I would like to expand the database to all mountains in the United States, and ideally all in the world.
                    </p>
                    <h2>When?</h2>
                    <p>
                        I would like to launch version 1 of the app spring 2018. This is the first app I have ever built, and I am building it alone. If you would like to receive updates on the timeline, sign up for the newsletter below!
                    </p>
                    <h2>Some Features I Have In Mind</h2>
                    <p>
                        You get a hiker profile that grows with you as you clear more summits. Each step of elevation earns you experience points which increases your level. There are leaderboards in place to promote a little friendly competetion. Events will be held to see who can hike certain mountains the fastest. Hikers can compete for highest level, fastest hike, most hikes, you name it.
                    </p>
                    <p>
                        There is trophy system in-place for the adventurous ones. Showcase your trophies on your profile, a token to remember those feats of strength.
                    </p>
                    <p>
                        Sync up with friends and add them to your crew. 
                        Hike with your Dog? Create a profile for your pet and tag them to your crew as well. Your pet's profile will earn experience and level up along side you.
                    </p>
                    <p>
                        I am certainly open to other ideas as well, feel free to reach out to me on twitter or instagram with any comments and/or feedback.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MoreInfo;