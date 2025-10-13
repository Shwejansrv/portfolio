import React from "react";
import './Intro.css';
import propic from '../contents/humanface.jpg';
import Resume from '../contents/ShwejanPeddi_Resume.pdf'
import {motion} from 'framer-motion'

function Intro(){
    function viewResume(){
        window.open(Resume);
    }
    return(
        <div className="intro">
            
            <motion.div
                    initial={{x:-100, opacity:0,}}
                    whileInView = {{x:0,opacity:1}}
                    transition={{duration:0.5,ease:"easeOut"}}
                    className="intro-heading"
                >
                <h1>About me</h1>
            </motion.div>
            
            <motion.div 
                initial={{x:100, opacity:0,}}
                whileInView = {{x:0,opacity:1}}
                transition={{duration:0.5,ease:"easeOut"}}
                className="aboutme">
                <div className="aboutmecard">
                    <div className="card1">
                        <div className="card1img">
                            <img className="myimage" src={propic}></img>
                        </div>
                        <div className="card1desc">
                            <ul>
                                <p>Name : Shwejan Peddi</p>
                                <p>Profile : Software Developer/ Web Developer</p>
                                <p>Email : speddi@hawk.iit.edu</p>
                                <p>Current Location : Chicago, Illinois</p>
                                <button type="button" onClick={viewResume} className="about-resume-button">View Resume</button>
                            </ul>
                        </div>
                    </div>
                    <div className="card2">
                        <p>Hello, I'm Shwejan Peddi</p>
                        <p>
                        
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{x:-100, opacity:0,}}
                whileInView = {{x:0,opacity:1}}
                transition={{duration:0.5,ease:"easeOut"}}
                className="intro-edu">
                <h2>Education</h2>
                <hr/>
                <div className="iit-box">
                    <div>
                        <p>Illinois Institute of Technology</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
                <p>Masters in Computer Science</p>
                <hr/>
                <div className="iit-box">
                    <div>
                        <p>Indian Institute of Information Technology Kottayam</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
                <p>Bachelors in Computer Science and Engineering</p>
                <hr/>
            </motion.div>
        </div>
    )
}


export default Intro;
