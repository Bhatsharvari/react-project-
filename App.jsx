// import React from "react";
// import Logo from "./function based component/Logo"
// import Home from "./function based component/Home"
// import Search from "./function based component/Search"
// import Profile from "./function based component/Profile"
// import Location from "./function based component/Location"
// import About from "./function based component/About"
// import Like from "./function based component/Like"
// import Help from "./function based component/Help"
// import Address from "./function based component/Address"
// import Cart from "./function based component/Cart"
// // // import Nav from "./component/Nav";
// // //import NavBar from "./Assignment/NavBar"
// // //import "./global.css"

// const App=()=>{
//     return(
//         <>
//         <div>App</div>

//         <Logo/>
//         <Home/>
//         <Search/>
//         <Profile/>
//         <Location/>
//         <About/>
//         <Cart/>
//         <Like/>
//         <Help/>
//         <Address/>

//         {/* <NavBar/> */}

//         </>
//     )
// }

// export default App

import React from "react";
import { Component } from "react";
import Logo from "./Class based component/Logo"
import Bag from "./Class based component/Bag"
import Category from "./Class based component/Category"
import Footer from "./Class based component/Footer"
import Help from "./Class based component/Help"
import Like from "./Class based component/Like"
import Option from "./Class based component/Option"
import Orders from "./Class based component/Orders"
import Refund from "./Class based component/Refund"
import Shipping from "./Class based component/Shipping"


class App extends Component{
    render(){
        return(
            <>
            <div>App</div>

            <Logo/>
            <Bag/>
            <Category/>
            <Footer/>
            <Help/>
            <Like/>
            <Option/>
            <Orders/>
            <Refund/>
            <Shipping/>
            </>
        )
    }
}
export default App