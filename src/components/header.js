import React from 'react'

function Header() {
  let navbarStyle = {
    padding : '20px',
    height:'60px'


  }
  return (
    <nav style={navbarStyle}>
        <p style={{fontSize:'3rem', textAlign:'center'}}>Counter</p>
    </nav>
  )
}

export default Header;
