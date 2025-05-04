import react from 'react'
import { IoSchool } from "react-icons/io5";

export default function Education() {

    let eduData=[{
        year:"Aug 2024 - Jan 2025",
        qualification:"Full Stack Web Development",
        About:`I’m a Full Stack Developer skilled in the MERN stack (MongoDB, Express, React, Node.js).
I build responsive frontends using HTML, CSS, JavaScript, Bootstrap, and React.
On the backend, I develop RESTful APIs with Node.js and Express, and manage data with MongoDB.
I enjoy creating full-featured web apps that solve real-world problems.`
    },
    {
        year:"Jun 2022 - Jul 2024",
        qualification:"Master of Computer Application (MCA)",
        About:"I completed my MCA degree with 7.2 CGPA in Bishop Appasamy collage of Arts and Science, Race Course, Coimbatore, Tamil Nadu, India."
    },
    {
        year:"Mar 2019 - Apr 2022",
        qualification:"Batchular of Computer Application (BCA)",
        About:"I completed my BCA degree with 6.9 CGPA in AVC collage(autonomus), Mannampanthal, Mayiladuthurai, Tamil Nadu, India."
    },
    {
        year:"Mar 2015 - Apr 2017",
        qualification:"Higher Secoundary 12th",
        About:"I scored 52% on the higher secoundary bord exam. And i am very much interest in electronics and computer, so i have taken the BCA degree at Collage."
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