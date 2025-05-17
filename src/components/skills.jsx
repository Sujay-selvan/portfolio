import React from 'react'
import '../App.css'

import html from '../image/html.png'
import css from '../image/css.png'
import js from '../image/js.png'
import bootstrap from '../image/bootstrap.png'
import tailwind from '../image/tailwind.png'
import react from '../image/react.png'
import node from '../image/node.png'
import express from '../image/express.png'
import mongodb from '../image/mongodb.svg'

import { SiHtml5 } from "react-icons/si";

function Skills() {

    let skillArr=[
        {
            img:html,
            name:"HTML"
        },
        {
            img:css,
            name:"CSS"
        },
        {
            img:bootstrap,
            name:"Bootstrap"
        },
        {
            img:tailwind,
            name:"Tailwind"
        },
        {
            img:js,
            name:"JavaScript"
        },
        {
            img:react,
            name:"React"
        },
        {
            img:node,
            name:"Node.js"
        },
        {
            img:express,
            name:"Express"
        },
        {
            img:mongodb,
            name:"mongoDB"
        },
        
];

    return (
        <div className='skills min-h-[500px] bg-black p-5 pt-20' id='skill'>
            <p className='text-[2.5rem] border-b-2 text-white text-[4rem] font-bold' ><span className='text-red-600'>S</span>kills</p>
            <div className='grid grid-cols-2 gap-4 mt-15 justify-center items-center h-[100%] sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap'>
                {skillArr.map((item)=>(
                    <div className='lg:w-[180px] h-[150px] bg-gray-900 flex flex-col p-3 justify-center items-center rounded gap-2'>
                    <img src={item.img} alt="" className='h-[60%] w-[50%]'/>
                    <p className='text-[1.5rem] font-bold text-white'>{item.name}</p>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default Skills;

