import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      name='about'
      ref={ref}
      initial={{ x: '100vw', opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      className='w-full h-full pt-8 pb-8 bg-white text-black'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <motion.div
            className='sm:text-right pb-8 pl-4'
            initial={{ opacity: 0, x: '-100vw' }}
            animate={controls}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, delay: 0.2 }}
          >
            <p className='text-4xl font-bold inline border-b-4 border-black'>About Me</p>
          </motion.div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <motion.div
            className='sm:text-right text-4xl font-bold'
            initial={{ opacity: 0, x: '-100vw' }}
            animate={controls}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, delay: 0.4 }}
          >
            <p>Hi. Im David and welcome to my website portfolio. Take a look around and I hope you Like what you see.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={controls}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, delay: 0.6 }}
          >
            <p>Welcome to my little corner of the internet. I think I should tell you a little 
              about myself. I am a graduate from the University of Hertfordshire where I completed my
              BSc Computer Science(Software Engineering) getting a 2.1 at the end of the period. 
              While in university I worked for the university as a student guide and a wifi warrior and did 
              a few virtual interships to gain valuable experience. After my degree, I signed up to an online 
              bootcamp offered by FreeCodeCamp Academy in web development which was where my web development learning
              process started. The bootcamp introduced the basics in HTML,CSS and JavaScript and during the bootcamp
              successfully completed a wide variety tasks offered from frontend simplified to practice out what i had learnt.
              After the bootcamp I went on to learn frameworks of the technology in React and Tailwind to further my knowledge 
              in the field. With my extensive learning experience I deem myself a well educated Web Developer 
              currently looking for a role where I can learn, grow, contribute and thrive.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
