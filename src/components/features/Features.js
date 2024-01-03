import React from 'react'
import "./Features.css"
import picture1 from "../../assets/picture 1.jpg"
import picture2 from "../../assets/picture 2.jpg"
import picture3 from "../../assets/picture 3.jpg"
import picture4 from "../../assets/picture 4.jpg"
import picture5 from "../../assets/picture 5.jpg"
import picture6 from "../../assets/picture 6.jpg"
import picture7 from "../../assets/picture 7.jpg"
import picture8 from "../../assets/picture 8.jpg"
import { FaGit } from "react-icons/fa";

const Features = () => {
  return (
    <div className='feature-container'>
         <section className='project-container'>
            <div className='project'>
                <img src={picture5} className='project-image'></img>
                <div className='project-summary'>
                  <h4 className='project-title'>lorem1jbdask</h4>
                  <div className='project-icons'>
                    <FaGit />
                  </div>
                </div>
            </div>
            <div className='project'>
                <img src={picture6} className='project-image'></img>
                <div className='project-summary'>
                  <h4 className='project-title'>loetfwajhHJ</h4>
                  <div className='project-icons'>
                    <FaGit />
                  </div>
                </div>
            </div>
            <div className='project'>
                <img src={picture7} className='project-image'></img>
                <div className='project-summary'>
                  <h4 className='project-title'>JHkjcblkblHQL</h4>
                  <div className='project-icons'>
                    <FaGit />
                  </div>
                </div>
            </div>
            <div className='project'>
                <img src={picture8} className='project-image'></img>
                <div className='project-summary'>
                  <h4 className='project-title'>JHVAJBKBKbckl</h4>
                  <div className='project-icons'>
                    <FaGit />
                  </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Features
