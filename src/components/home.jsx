import React from 'react'
import myImg from '../image/profile.png'

export default function Home(){
    return(
        <>
            <div className="home relative font-anton h-[480px] flex flex-col items-center justify-center text-center">
                {/* <img src={myImg} alt="myImg" className='h-[80%] w-[60%]'/> */}
                {/* <p className='absolute bottom-105 text-[1.5rem] font-bold'></p> */}
                <p className="text-[4rem] font-anton font-black absolute bottom-85">Full Stack</p>
                <p className="text-[5rem] font-black text-white absolute bottom-65 [-webkit-text-stroke:2px_black]">Developer</p>
                <p className='absolute bottom-22 text-justify pl-5 pr-5 text-[1.1rem]'>I'm a passionate Full Stack Web Developer with expertise in building modern, responsive websites and applications. I love turning ideas into reality using clean code and cutting-edge technologies. Let's create something amazing together!</p>
                <div className='flex gap-2 absolute bottom-7'>
                    <button className='border pl-1 pr-1 text-[1.5rem] w-[130px] font-bold'>About Me</button>
                    <button className='border pl-1 pr-1 text-[1.5rem] w-[130px] font-bold bg-black text-white'>Contact</button>
                </div>
            </div>
        </>
    )
}