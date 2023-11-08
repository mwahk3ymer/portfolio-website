import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
     <h5> Get To Know</h5>
     <h2>About Me</h2>

     <div className='container about__container'>
      <div className="about__me">
       <div className='about__me-image'>
        <img src={ME} alt="About Image" />
       </div>

      </div>
      <div className="about__content">
       <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1 year working</small>
        </article>

        <article className='about__card'>
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small>loremm ipsum</small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>19+ completed</small>
        </article>
       </div>

       <p>
        My name is Audrey Mwakima a web developer lorem ipsum intr
        projec lorem ipsum lorem ipsum mfkedmmfrkemfkle lorem ipsu
        and thats all for nw
       </p>

       <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
     </div> 
    </section>
  )
}

export default About
