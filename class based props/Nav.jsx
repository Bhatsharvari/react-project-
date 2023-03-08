import React from "react";
import { Component } from "react";


class Nav extends Component{
    render(){
        return(
            
            // <h1>{this.props.data}</h1>
            // <>

            // <h2>{this.props.name}</h2>
            // <h3>{this.props.password}</h3>
            // <h4>{this.props.boolean}</h4>
            // <h5>{this.props.data}</h5>
            // </>
            <>
<img src={this.props.data} alt="" />
            </>
        )
        // <div>Nav</div>
    }
}
export default Nav