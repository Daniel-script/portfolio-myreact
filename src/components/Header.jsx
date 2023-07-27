import React from 'react';

import milogo2 from '../assets/milogo2.png'

const Header = () => {
  return <div className=' py-8'>
    <div className="container mx-auto">
      <div className='flex items-center justify-between'>
        <a href="#">
          <img src={milogo2} alt="logo " className='h-14'/>
        </a>
        <button className='btn btn-sm'><a href="https://www.linkedin.com/in/daniel-python/" target='_blank'>Work whith me </a> </button>
      </div>
    </div>
  </div>;
};

export default Header;
