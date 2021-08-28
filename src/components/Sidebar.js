import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import github from '../assets/icons/github.svg'
import instagram from '../assets/icons/instagram.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'
import {motion} from 'framer-motion'
const Sidebar = () => {
   const handleEmailMe =() => {
        window.open("mailto:shreyash.choudharyiam@gmail.com")
    }
const sidebar_variant = {
   hidden : {
        x: '-20vw',
    },
    visible: {
        x:0 ,
        transition : {
            delay:0.1, duration: 0.5,type:'spring'
        }
    }

}
    return(
        <motion.div className="sidebar"
        variants={sidebar_variant}
        initial='hidden'
        animate='visible'
        >
            <img src={mightycoder}  alt="avatar" className="sidebar_avatar"/>
            <div className="sidebar_name">Shreyash<span>Choudhary</span> </div>
            <div className="sidebar_item sidebar_title">Software Engineer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar_resume">
                <img src={tie}  alt="resume" className="sidebar_icon"/>Download Resume
                </div>
            </a>
                <figure className="sidebar_social-icons my-2">
                <a href=""><img src={facebook}  alt="facebook" className="sidebar_icon mr-3"/></a>
                <a href=""><img src={instagram}  alt="instagram" className="sidebar_icon"/></a>
                </figure>
            <div class="sidebar_contact">
            <div className="sidebar_item sidebar_github">
            <a href=""><img src={github}  alt="github" className="sidebar_icon mr-3"/>github</a>
            </div>
            <div className="sidebar_location">
            <img src={pin}  
            alt="loaction" className="sidebar_icon" />
            Indore, India</div>
            <div className="sidebar_item ">shreyash.choudhary@gmail.com</div>
            <div className="sidebar_item ">82828278278271</div>
        </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}> email me</div>
        </motion.div>
    )
}
export default Sidebar;