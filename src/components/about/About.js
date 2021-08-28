import React from 'react';
import skills from './../data/about_data.js'
import {motion} from 'framer-motion'
import Skillcard from './../Skillcard'
import './about.css'
const About = () => {
    const about_variant = {
        hidden : {
            opacity:0,
        },
        visible: {
           opacity:1,
            transition : {
                delay:0.2, duration: 0.6,
            }
        },
        exit:{
            opacity:0,
            transition : {
               ease:'easeInOut'
            }
        }
    
    }
    return(
       <motion.div className="about"
       variant={about_variant}
       initial="hidden"
       animate="visible"
       exit="exit"
       >
            <h6 className="about_intro">
            I describe myself as persistent learner, a quick learner and problem solver by using simple and scalkable solution
            </h6>
        <div className="container about_container">
        <h6 className="about__heading">What i offer</h6>
        <div className="row">
            { /*executing javascript here */
                skills.map(skill =>  
                    <Skillcard skill={skill}/>
                )       
            }
        </div>
   </div>
</motion.div>
    );
};
export default About;
