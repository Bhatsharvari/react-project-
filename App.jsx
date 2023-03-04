import React from "react";
import Logo from "./function based component/Logo"
import Home from "./function based component/Home"
import Search from "./function based component/Search"
import Profile from "./function based component/Profile"
import Location from "./function based component/Location"
import About from "./function based component/About"
import Like from "./function based component/Like"
import Help from "./function based component/Help"
import Address from "./function based component/Address"
import Cart from "./function based component/Cart"
// // import Nav from "./component/Nav";
// //import NavBar from "./Assignment/NavBar"
// //import "./global.css"

const App=()=>{
    return(
        <>
        <div>App</div>

        <Logo/>
        <Home/>
        <Search/>
        <Profile/>
        <Location/>
        <About/>
        <Cart/>
        <Like/>
        <Help/>
        <Address/>

        {/* <NavBar/> */}

        </>
    )
}

export default App