import React from 'react'
import { Link } from 'react-router-dom'



const handleSubmit = (e) => {
  e.preventDefault()

}

const SignUp = () => (
  <div className='main'>
    <div className="app-login">
      <div className="login">
        <div className="title">
          <h3>
            Sign Up
          </h3>
          <em>
            please Sign Up to get started
          </em>
        </div>
        <div  className="form-inputs">
          <form
            onClick={handleSubmit}
            className='login_form'>
            <input
              type="text"
              placeholder='Full Name'
              required/>
            <input type="email" placeholder='Email' required/>
            <input
              type="password"
              placeholder='Password'
              required/>
            <input
              type="number"
              placeholder='Secret Pin'
              required/>
            <div className='sign-up'>
              <p>
                <em>Already have an account? </em>
                <Link style={{textDecoration: 'none'}} to='login'>
                  <span>Login</span>
                </Link>
              </p>
            </div>
            <div className='b'>
              <Link to='/dashboard'>
                <button >ENTER</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
  </div>
)

export default SignUp
