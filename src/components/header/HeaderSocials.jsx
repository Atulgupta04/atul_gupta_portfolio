import React from 'react'
import  {BsLinkedin} from 'react-icons/bs'
import  {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/atul-gupta04/" target="_blank"> <BsLinkedin /> </a>
            <a href="https://github.com/Atulgupta04" target="_blank"> <FaGithub/> </a>
            <a href="https://www.linkedin.com/in/atul-gupta04/" target="_blank"><BsLinkedin/></a>
        </div>

  )
}

export default HeaderSocials