import react from 'react'
import { IoSchool } from "react-icons/io5";

export default function Education() {

    let eduData=[{
        year:"Mar 2014 - Apr 2017",
        qualification:"Higher Secoundary 12th",
        About:"I scored 65% on the higher secoundary bord exam. And i am very much interest in electronics and computer, so i have taken the BCA degree at Collage."
    },
    {
        year:"Mar 2014 - Apr 2017",
        qualification:"Higher Secoundary 12th",
        About:"I scored 65% on the higher secoundary bord exam. And i am very much interest in electronics and computer, so i have taken the BCA degree at Collage."
    },
    {
        year:"Mar 2014 - Apr 2017",
        qualification:"Higher Secoundary 12th",
        About:"I scored 65% on the higher secoundary bord exam. And i am very much interest in electronics and computer, so i have taken the BCA degree at Collage."
    },
    {
        year:"Mar 2014 - Apr 2017",
        qualification:"Higher Secoundary 12th",
        About:"I scored 65% on the higher secoundary bord exam. And i am very much interest in electronics and computer, so i have taken the BCA degree at Collage."
    }
]

    return (
        <div className='bg-black'>
            <p className='text-white text-[5rem] font-bold text-center'><sapn className='text-red-700 text-[8rem]'>E</sapn>ducation</p>
            <div className='p-5 flex flex-wrap'>   
                {eduData.map((item)=>(
                <div className='edu-box'>
                    <div className='edu-icon'><sapn><IoSchool /></sapn></div>
                    <p className='text-white'>{item.year}</p>
                    <p className='text-white'>{item.qualification}</p>
                    <p className='text-white'>{item.About}</p>
                </div>))}
            </div>
        </div>
    )
}