import React from 'react'
import slack from '../images/slack.png'
import { Link } from 'react-router-dom'




const LandingPage = () => (

      <div className="app__text">
        <h3>Xpencify</h3>
        <p>
          Keep track of your daily, weekly, monthly and yearly expenditure
        </p>
        <Link to='/login'>
          <button>
            Get Started
          </button>
        </Link>
        <div className="app__text-icons">
          <div className="face">
            <i className="fab fa-facebook-f">
            </i>
            <span>Facebook</span>
          </div>
          <div className="google">
            <i className="fab fa-google-plus-g">
            </i>
          </div>
          <div className="twitter">
            <i className="fab fa-twitter">
            </i>
            <span>Twitter</span>
          </div>
          <br/>
        </div>
        <span className="version">
          Currently v1.0.0 * Author: OI Design <br/> [ <b>OI Hub -</b>  creativity<b>+</b> ]
        </span>

        <div>
          <div className="app__img">
            <img className="image" src={slack}/>
            <span>
              Make it a team work.
            </span>
          </div>
        </div>


  </div>
)

export default LandingPage
