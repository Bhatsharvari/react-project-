import React from "react";
import STYLE from "./hotstar.module.css"

const HotStar =()=>{
    return(
        <>
        <div className={STYLE.divBlock}>
            <img src="https://cdn.mos.cms.futurecdn.net/c6fFaJ2NrD7u2g8TP2u2iY-1200-80.jpg" alt="" />

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