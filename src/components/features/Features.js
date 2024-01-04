import React from 'react'
import "./Features.css"
import picture1 from "../../assets/dictionary.png"
import picture2 from "../../assets/ecommerce.png"
import picture3 from "../../assets/random-quote.png"
import picture4 from "../../assets/Foodieloo.png"
import { FaGit } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className='feature-container'>
         <section className='project-container'>
            <div className='project'>
              <div className='img-container'>
              <img src={picture1} className='project-image'></img>
              </div>
                <div className='project-summary'>
                  <h4 className='project-title'>WordFinder</h4>
                  <div className='project-icons'>
                    <FaGit />
                    <a href='https://dictionary-app-pi-bay.vercel.app/' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
            <div className='project'>
            <div className='img-container'>
              <img src={picture2} className='project-image'></img>
              </div>
                <div className='project-summary'>
                  <h4 className='project-title'>Ecommerce</h4>
                  <div className='project-icons'>
                    <FaGit />
                    <a href='https://brizbeauty-ecommerce.vercel.app/' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
            <div className='project'>
            <div className='img-container'>
              <img src={picture3} className='project-image'></img>
              </div>
                <div className='project-summary'>
                  <h4 className='project-title'>Quote Generator</h4>
                  <div className='project-icons'>
                    <FaGit />
                    <a href='https://quote-generator-rho-blue.vercel.app/' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
            <div className='project'>
            <div className='img-container'>
              <img src={picture4} className='project-image'></img>
              </div>
                <div className='project-summary'>
                  <h4 className='project-title'>FoodieLoo</h4>
                  <div className='project-icons'>
                    <FaGit />
                    <a href='https://foodieloo-project-practise.vercel.app/' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Features
