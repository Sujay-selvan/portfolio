import React from 'react'
import myImg from '../image/profile.png'

export default function Home(){
    return(
        <>
            <div className="home bg-white relative font-anton h-[530px] flex flex-col items-center justify-center text-center  sm:h-160" id='home'>
                {/* <img src={myImg} alt="myImg" className='h-[80%] w-[60%]'/> */}
                {/* <p className='absolute bottom-105 text-[1.5rem] font-bold'></p> */}
                <p className="text-[4rem] font-anton font-black absolute bottom-85 sm:text-[6rem] sm:bottom-100">Full Stack</p>
                <p className="text-[5rem] font-black text-white absolute bottom-65 [-webkit-text-stroke:2px_black] sm:text-[7.5rem] sm:bottom-70">Developer</p>
                <p className='absolute bottom-22 text-justify pl-5 pr-5 text-[1.1rem] sm:text-[1.5rem] sm:bottom-25'>I'm a passionate Full Stack Web Developer with expertise in building modern, responsive websites and applications. I love turning ideas into reality using clean code and cutting-edge technologies. Let's create something amazing together!</p>
                <div className='flex gap-2 absolute bottom-7 sm:bottom-10'>
                    <button className='border pl-1 pr-1 text-[1.5rem] w-[130px] font-bold sm:w-[170px]'><a href="#about">About Me</a></button>
                    <button className='border pl-1 pr-1 text-[1.5rem] w-[130px] font-bold bg-black text-white sm:w-[170px]'><a href="#contact">Contact</a></button>
                </div>
            </div>
        </>
    )
}