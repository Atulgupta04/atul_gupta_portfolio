import React from 'react'
import header from './header.css'
import CVT from './CVT'
import ME from '../../assets/img/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>
        
        <div className=" container header__container">
          <h5> Hello I'm </h5>
          <h1> Atul Gupta </h1>
          <h5 className="text-light">
              Front End Web Developer 
          </h5>
          <CVT />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>



          <a href="#contact" className='scroll__down'> Scroll Down </a>

        </div>

      </header>
  )
}

export default Header