import React from 'react'
import projects from './projects.css'

export const Projects = () => {
  return (
    <section id='projects'>
    
    <h2>Projects</h2>

    <div class="grid-container">
      <div class="item1"  className="texth">Project 1
      <div className="projectwork" class="textt"> <a className='ahreff' href=""> Blog App</a> </div>
      </div>
      <div className="texth">Project 2
      <div className="projectwork" class="textt"> <a className='ahreff' href=""> Blog App</a> </div>
      </div>
      <div className="texth">Project 3
      <div className="projectwork" class="textt"> <a className='ahreff' href=""> Blog App</a> </div>
      </div>
      
    </div>
    {/* <div className="projectwork">
      <div className="container">

        <h4><b>Project 1</b></h4> 
        <p> <a href="" className='textt'> Blog App </a></p> 

        
        

        <h4><b>Project 2</b></h4> 
        <p> <a href="" className='textt'> Blog App </a></p> 

        <h4><b>Project 3</b></h4> 
        <p> <a href="" className='textt'>  </a></p> 
        </div>
    </div> */}

    
    
    
    </section>
  )
}

export default Projects
