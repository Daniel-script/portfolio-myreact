import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'





const Services = () => {
  return <div className='container mx-auto'>
    <div id='services' className='section'>
      <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 mx-10'>
        <h2 className='h2 text-accent'>My skills</h2>
        <h3 className='h3 mb-4'>Mobile app developer and UI/UX user interface creator</h3>
        <p className='mb-6'>Front-end Developer  proficient in HTML, CSS, JavaScript and React Strong collaborator with cross-functional teams  passionate about seamless web experiences. Also knowledgeable in Python for backend development and working with databases like MySQL and MongoDB to build data-driven solutions.</p>
        
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>Contact me</button>
          <a href="#" className='text-gradient btn-link'>my portfolio</a>
        </div>
      </motion.div>
      
      
    </div>
    
  </div>


};

export default Services;
