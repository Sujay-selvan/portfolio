
import React, { useState } from "react";

import { TiThMenu } from "react-icons/ti";

function Menu(){
   let [hideNav,setHidenav] = useState(false);
    return(
        <div className="menu bg-black text-white flex justify-between item-center p-2 flex-col">
            <div className="flex justify-between">
            <p className="text-[30px]">Portfolio</p>
            <TiThMenu className="text-[3rem]" onClick={()=>setHidenav(!hideNav)}/>
            </div>
            
            <div className={`flex flex-col gap-5 text-xl m-auto items-center mt-5 mb-5 gap-8 text-[1.5rem] ${hideNav?" ":"hidden"}`}> 
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skill</a>
                <a href="#">Project</a>
                <a href="#">Education</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}
export default Menu;