import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => (
  <div className="header">
  <Link style={{textDecoration: 'none'}} to='/'><span>Xpencify</span></Link>
  </div>
)

export default Header