import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Oracle from '../assets/Oracle.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#E5E7EB] text-black'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4  border-black'>Experience</p>
            <p className='py-4 '>These are the technologies i have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>React</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={GitHub} alt="HTML icon" />
                <p className='my-4'>GitHub</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={Oracle} alt="HTML icon" />
                <p className='my-4'>Oracle</p>
            </div>
        </div>


      </div>
      
    </div>

    
  )
}

export default Skills
