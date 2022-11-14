import React from 'react'
import nav from './nav.css'
import {AiOutlineHome} from'react-icons/ai'
import {AiOutlineUser} from'react-icons/ai'
import {BiBook } from 'react-icons/bi'
import {AiOutlineProject } from 'react-icons/ai'
import {RiMessageFill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>

      <a href="#" className='active'> <AiOutlineHome /> </a>
      <a href="#about"> <AiOutlineUser /> </a>
      <a href="#experience"> <BiBook /> </a>
      <a href="#projects"> <AiOutlineProject/> </a>
      <a href="#contact"> <RiMessageFill /> </a>
    </nav>

          /* Start from 1: 18:16   */
  )
}

export default Nav