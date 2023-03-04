import React from "react";
import STYLE from "./hitv.module.css"

const HotStar =()=>{
    return(
        <>
        <div className={STYLE.divBlock}>
            <img src="https://s.gohitv.com/origin/eb22f0181431437484bb8c60bbfff3661659937846964.jpeg" alt="" />

            <div className={STYLE.menuBlock}>
                <ul>
                    <li>TV</li>

                    <li>WatchList</li>

                    <li>Login</li>
                </ul>
            </div>
        </div>
        </>
    )

}
export default HotStar