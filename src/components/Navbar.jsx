import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import  Logo from '../assets/Logo David.png'
import {Link} from 'react-scroll'
import Pdf from '../assets/Chinaza Chinonso David Ugwu Official Resume.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black'>
        <div>
            <img src={Logo} alt="logo image" style={{width: '50px'}} />
        </div>    

        {/*Menu*/}    
            <ul className=' hidden md:flex'>
                <li>
                    <Link  to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link  to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link  to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link  to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li>
                    <Link  to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

        {/*Hamburger*/}    
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ?  <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#E5E7EB] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                        Contact
                </Link>
            </li>
        </ul>

        {/*Social Icons*/}    
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-white' 
                    href="https://www.linkedin.com/in/david-ugwu-06503a14b/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-white' 
                    href="https://github.com/Cu19aaa">
                        Github <FaGithub size={30} />
                    </a>
                </li>


                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-white' 
                    href="mailto:dazzid.ugwws@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>


                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-white' 
                    href={Pdf}>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>

            </ul>


        </div>


    </div>
  )
}

export default Navbar
