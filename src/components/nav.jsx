
import React, { useState } from "react";

import { TiThMenu } from "react-icons/ti";

function Menu(){
   let [hideNav,setHidenav] = useState(false);
    return(
        <div className="menu bg-black text-white flex justify-between item-center p-2 flex-col lg:flex-row lg:justify-between relative">
            <div className="flex justify-between">
            <p className="text-[30px]">Portfolio</p>
            <TiThMenu className="text-[3rem] text-white lg:hidden" onClick={()=>setHidenav(!hideNav)}/>
            </div>
            
            <div className={`bg-black flex flex-col text-xl m-auto items-center gap-8 text-[1.5rem] absolute ${hideNav?"top-[60px] w-full z-1 p-5 m-0 left-0":"top-[-400px] w-full z-1"} lg:flex-row lg:w-fit lg:relative lg:top-0 lg:m-0`}> 
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skill">Skill</a>
                <a href="#project">Project</a>
                <a href="#edu">Education</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}
export default Menu;