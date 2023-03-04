import React from "react";
import STYLE from "./netflix.module.css"

const Netflix =()=>{
    return(
        <div className={STYLE.diBlock}>
            
            <img src="https://deadline.com/wp-content/uploads/2022/08/Netflix_Symbol_logo.jpg" alt="" />
            <div id={STYLE.imgBlock}>
                <img src="https://i.ytimg.com/vi/DsodZLGmpIQ/hqdefault.jpg" alt="" />
            </div>
                <div className={STYLE.miBlock}>
                    <ul>
                        <li>Tv shows</li>

                        <li>My List</li>

                        <li>Info</li>
                    </ul>
                </div>
            
        </div>
    )
}
export default Netflix