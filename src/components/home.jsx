import React from 'react'
import myImg from '../image/profile.png'

export default function Home(){
    return(
        <>
            <div className="home relative font-anton h-[400px] flex flex-col items-center justify-center text-center">
                <img src={myImg} alt="myImg" className='h-[80%] w-[60%]'/>
                <p className="text-[4rem] font-anton font-black absolute bottom-18">Full Stack</p>
                <p className="text-[5rem] font-black text-white absolute bottom-0 [-webkit-text-stroke:2px_black]">Developer</p>
            </div>
        </>
    )
}