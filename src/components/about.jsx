import React from "react";
import img from '../image/profile.png'

import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
    return (
        <div className="about min-h-[600px] flex flex-col">
            <div className="w-full bg-black flex flex-col p-5 order-0">
                <p className="text-[60px] font-extrabold text-white border-b-2">About</p>
                <p className="text-orange-400 font-bold mt-7">Let's know who I am !?</p>
                <p className="text-[1.2rem] text-justify mt-2 text-white">Hi, I'm Sujay, a passionate Full Stack Web Developer with a Master of Computer Applications (MCA) (2024). I have a strong foundation in MERN stack development and a keen interest in building dynamic, scalable, and user-friendly web applications.</p>
                <p className="text-[1.2rem] text-justify mt-2 text-white">I have completed a Full Stack Web Development course, enhancing my expertise in React, Node.js, Express.js, and MongoDB. Additionally, I hold a Python certification from NPTEL Swayam, showcasing my versatility in backend development and automation.</p>
                <p className="text-[1.2rem] text-justify mt-2 text-white">I'm always eager to learn and explore new technologies to build innovative solutions. Let's connect and collaborate!</p>
                <div className="flex gap-1.5 mt-8">
                    <button className="border border-white w-2/4 p-2 rounded font-semibold text-white">Contact Now</button>
                    <button className="border border-white w-2/4 p-2 rounded font-semibold text-white">Download CV</button>
                </div>
                
            </div>
            <div className="relative bg-white  flex w-full flex-col justify-centee items-center mt-10 h-[400px] order-1">
                <div className="relative flex gap-10 ">
                    <TbBrandLinkedinFilled className="text-[2rem] absolute right-13 top-15"/>
                    <FaGithub className="text-[2rem] absolute right-5 top-5" />
                    <FaFacebook className="text-[2rem] absolute"/>
                    <FaInstagram className="text-[2rem] absolute left-13 top-5"/>
                    <FaXTwitter className="text-[2rem] absolute left-22 top-15"/>
                </div>
                <img src={img} alt="" className="p-10" />
                <div className="absolute bottom-0">
                    <p className="text-[18px] font-extrabold absolute bottom-32 left-2 ">Hey, I'm</p>
                    <p className="sujay text-[7rem] font-extrabold">SUJAY</p>
                </div>
            </div>
        </div>
    )
}