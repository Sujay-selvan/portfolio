import react from 'react';

import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div className='bg-black p-5'>
            <p className='text-[2.5rem] font-bold text-center text-white text-[4rem]'>contact <span className='text-red-600'>ME</span></p>
            <div className='flex gap-10 mt-11 flex-col md:grid md:grid-cols-2'>
                <div className='text-gray-200'>
                    <div>
                        <p className='text-[1.5rem]'>GET IN TOUCH</p>
                        <p className='mt-3'>if you want to get in touch with me, the best way is to send me an email at the below email Id. I check my email regularly, and I'll get back to you as soon as possible</p>
                    </div>
                    <div className='mt-5 flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <FaMapLocationDot className='text-[2rem] mt-1 text-white'/>
                            <div>
                                <p>Address</p>
                                <p>2/50, Mela street, Thirumangalam, Mayiladuthurai-609 811,Tamil Nadu,India</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <MdEmail className='text-[2rem] text-white'/>
                            <div>
                                <p>Email</p>
                                <p>sujayselvan15@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <FaSquarePhone className='text-[2rem] mt-1 text-white'/>
                            <div>
                                <p>Number</p>
                                <p>+91-805-680-1347</p>
                            </div>
                        </div>
                        <div className='flex gap-2 text-[1.5rem] mt-5 text-white'>
                            <FaFacebook />
                            <FaSquareXTwitter />
                            <FaLinkedin />
                            <FaInstagram />
                            <FaGithubSquare />
                        </div>
                    </div>
                </div>

                <div className=' bg-gray-100 mt-10 p-6 flex flex-col gap-4 h-[30rem]'>
                    <div className='w-full flex gap-5'>
                        <input type="text" placeholder='your name' className='w-[48%] border rounded p-1 pl-2 focus:outline-none '/>
                        <input type="text" placeholder='your number' className='w-[48%] border rounded p-1 pl-2 focus:outline-none'/>
                    </div>
                    <div className='w-full flex gap-5'>
                        <input type="number" placeholder='your number' className='w-[48%] border rounded p-1 pl-2 focus:outline-none overflow-hidden'/>
                        <input type="text" placeholder='your subject' className='w-[48%] border rounded p-1 pl-2 focus:outline-none'/>
                    </div>
                    <textarea name="messafe" id="" placeholder='your message' className='border h-[100%] rounded p-2 resize-none focus:outline-none'></textarea>
                    <button className='bg-red-600 text-white h-[4rem]'>Submit</button>
                </div>
            </div>
        </div>
    )
}