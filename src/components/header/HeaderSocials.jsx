import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/roland-ajeti-834335207/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com" target='_blank'><FaGithub /></a>
      <a href="https://twitter.com/RolandAjeti" target='_blank'><SiTwitter /></a>
    </div>
  )
}

export default HeaderSocials
