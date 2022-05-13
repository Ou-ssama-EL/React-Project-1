import React from 'react';
import './home.css'


const HomePage = () => {

    return (
        <div>
            {/* <!-- Home --> */}
            <div className="home">
                <div className="container">
                    <div className="home-information">
                        <h2 className="home-title margin-bottom">Oussama EL Haouari</h2>
                        <h4 className="home-info">Creative Director</h4>
                        <p className="home-desc">
                            I am an amateur <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                        </p>
                        {/* <!-- ./home-desc --> */}
                        <button className="home-btn">Let's Begin</button>
                    </div>
                    {/* <!-- ./home-information --> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage;
