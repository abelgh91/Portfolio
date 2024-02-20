import React from 'react'
import "./Landing.css";
import { Typewritter, AnimatedBackground } from '../components';

let mesgArray = [
    " ",
    "Front-end developer",
    "Back-end developer",
    "Also known as an",
    "Full stack developer",
    "Or!",
    '"a coder"',
    " ",
]

const Landing = () => {
    return ( 
        <AnimatedBackground>
            <div className='landing-type'>
                <div>What am I?</div>
                <Typewritter data={mesgArray} />
            </div>
        </AnimatedBackground>
     )
        
}
 
export default Landing;