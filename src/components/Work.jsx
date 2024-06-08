import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import Work1 from '../assets/project1.png';
import jetsetjoy from '../assets/JetSetJoy.png';
import Luke from '../assets/ptsite.png';
import chioma from '../assets/Chioma.png';
import plant from '../assets/PlantApp.png';
import translate from '../assets/Translatepic.png';

const Work = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} name='work' className='w-full md:h-screen text-black bg-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.0 }}
                    className='pb-8'
                >
                    <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </motion.div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 '>
                    {/*Grid Item 1*/}  
                    <motion.div
                        style={{backgroundImage: `url(${Work1})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>Website Portfolio</span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/*Grid Item 2*/}  
                    <motion.div
                        style={{backgroundImage: `url(${jetsetjoy})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>Holiday Booking site</span>
                            <div className='pt-8 text-center'>
                                <a href="https://jet-set-joy-asem.vercel.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Cu19aaa/Jet-Set-Joy">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/*Grid Item 3*/}  
                    <motion.div
                        style={{backgroundImage: `url(${Luke})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>Personal Trainer Site</span>
                            <div className='pt-8 text-center'>
                                <a href="https://lukesratfordpt.vercel.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Cu19aaa/Luke">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/*Grid Item 4*/}  
                    <motion.div
                        style={{backgroundImage: `url(${chioma})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>UX/UI Designer Portfolio</span>
                            <div className='pt-8 text-center'>
                                <a href="https://cou-designs.vercel.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Cu19aaa/Cou-Designs">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/*Grid Item 5*/}  
                    <motion.div
                        style={{backgroundImage: `url(${plant})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>Plant Disease Classification</span>
                            <div className='pt-8 text-center'>
                                <a href="https://plantapp-4px6bmbdbq-uc.a.run.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/igbodani/new-plant-diseases">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/*Grid Item 6*/}  
                    <motion.div
                        style={{backgroundImage: `url(${translate})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>English to Igbo ML Translator</span>
                            <div className='pt-8 text-center'>
                                <a href="https://translatorapp-4px6bmbdbq-uw.a.run.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/igbodani/En-Ig_Translator">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Work;
