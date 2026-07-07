import "./Hero.css";
import HeroStats from "./HeroStats";


import profile from "../../assets/images/profile.png";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
function Hero() {
  return (
    <section className="hero" id="home">
      
      <motion.div
      className="hero-content"
      initial={{opacity:0,x:-60}}
      animate={{opacity:1,x:0}}
      transition={{duration:.8}}
      >

        <span className="hello">
          👋 Hello, I'm
        </span>

        <h1>Shiva Gupta</h1>

        <h2>

<Typewriter

words={[

"Electrical Engineering Enthusiast",

"Robotics Developer",

"Embedded Systems Developer",

"PCB Design Enthusiast",

"AI Automation Explorer"

]}

loop={0}

cursor

/>

        </h2>

        <p>

Building intelligent engineering solutions through hardware,
software, robotics, PCB design,
and AI-powered automation.

        </p>

<div className="hero-buttons">

<a href="/resume.pdf" className="primary-btn">

Download Resume

</a>

<a href="#contact" className="secondary-btn">

Contact Me

</a>

</div>

<div className="socials">

<a href="#">
<FaGithub/>
</a>

<a href="#">
<FaLinkedin/>
</a>

<a href="#">
<FaEnvelope/>
</a>

</div>

<HeroStats/>

      </motion.div>

<motion.div

className="hero-image"

initial={{opacity:0,x:60}}

animate={{opacity:1,x:0}}

transition={{duration:.8}}

>

<div className="image-ring">
  <img
    src={profile}
    alt="Shiva Gupta"
  />
</div>



</motion.div>

    </section>
  );
}

export default Hero;