import React from 'react';
import Bar from './Bar';
import {motion} from 'framer-motion'
import {tools, languages} from './data/resume_data.js'   

const Resume = () => {
    const resume_variant = {
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
        <motion.div className="Container resume"
        variant={resume_variant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="row">
            <div className="col-lg-6 resume-card">
                <h4 className="resume-card_heading">
                    Education
                </h4>
                <div className="resume-card_body">
                <h5 className="resume-card_title">
                Computer Science Engineering
                </h5>
                <p className="resume-card_name">
              SIRT-Indore
            </p>
            <p className="resume-card_details">I am currently working with TATA CONSULTANCY SERVICES,Indore</p>
            </div>
            </div>
            <div className="col-lg-6 resume-card">
                <h4 className="resume-card_heading">
                Experience
                </h4>
                <div className="resume-card_body">
                    <h5 className="resume-card_title">
                Software Engineer
                </h5>
                <p className="resume-card_name">
                TCS
                </p>
                <p className="resume-card_details">
                I work as Software Engineer in TATA CONSULTANCY SERVICES.
                </p>
            </div>
            </div>
           </div>
            <div className="row">
            <div className="col-lg-6 resume-languages">
                <h5 className="resume-language_heading">
                Language and Framework
                </h5>
                <div className="resume-language_body">
                    { /*javascript here*/
                        languages.map(language=> <Bar value={language}/>)
                    }
                </div>
                </div>
                <div className="col-lg-6 resume-languages">
                <h5 className="resume-language_heading">
                Tools and Software
                </h5>
                <div className="resume-language_body mt-3">
                    { /*javascript here*/
                    tools.map(tool=> <Bar value={tool}/>)
                    }
                </div>
            </div>
        </div>
    </motion.div>
    );
};
export default Resume;
