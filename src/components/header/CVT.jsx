import React from 'react'
import CV from '../../assets/Atul_Gupta-Resume.pdf'

const CVT = () => {
  return (
        <div className="cta">
            <a href="{CV} download" className="btn"> Download Resume </a>
            <a href="#contact" className="btn btn-primary"> Contact Me  </a>
        </div>
  )
}

export default CVT