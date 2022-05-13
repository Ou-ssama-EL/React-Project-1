import React, { Component } from 'react'

import Home from '../Home/Home'
import AboutPage from '../About/About'
import Footer from '../Footer/Footer'
import Work from '../Work/Work'
import SocialMedia from '../SocialMedia/SocialMedia'
import Profile from '../Profile/Profile'
import Portfolio from '../Portfolio/Portfolio'

class Index extends Component {

    render() {
        return (
            <div className="App">
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <AboutPage />
                <SocialMedia />
                <Footer />

            </div>
        )
    }
}

export default Index
