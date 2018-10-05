import React, { Component } from 'react'
import { Link } from 'react-router-dom'





class Login extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("nnn", e.target.elements.pin.value)
  }

  render(){
    return (
      <div>
        <div className="app-login">
          <div className="login">
            <div className="title"><h3>Login</h3> <em>please login to get started</em> </div>
              <div  className="form-inputs">
                <form onSubmit={this.handleSubmit} className='login_form'>
                  <input name="email" type="email" placeholder='Email' />
                  <input name="password" type="password" placeholder='Password' />
                  <input name="pin" type="text" placeholder='Secret Pin' />
                  <div className='sign-up'><p><em>Don't have an account? </em><Link style={{textDecoration: 'none'}} to='sign-up'><span>Sign Up</span></Link></p></div>
                   <div className='b'><button ><Link style={{textDecoration: 'none'}} to="/dashboard">ENTER</Link></button></div>
                </form>
            </div>
          </div>
        </div>

      </div>
      )
  }
}

export default Login
