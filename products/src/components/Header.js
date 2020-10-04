import React, {Component} from 'react'

export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div className="Header">
                    <button className="menu">Menu</button>
                    <button className="signin">Sign in</button>
                </div>
                <div className="logo1">
                    <div className="logo">Dom's</div>
                <nav className="navlist">
                    <ul>Mens</ul>
                    <ul>Womens</ul>
                    <ul>Kids</ul>
                </nav>
                <input placeholder="Search" className="Search"></input>
                </div>
            </div>
        )
    }
}