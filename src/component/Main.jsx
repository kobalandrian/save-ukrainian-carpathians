import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Home from "./Home";
import Contact from "./Contact";
import TodoList from "./Todo";

import "../css/main.css";
import "../css/slider.css";

import "../img/header1.jpg";
import "../img/header2.jpg";
import "../img/header3.jpg";


var imgSlide = [
    {
        img: "http://images4.fanpop.com/image/photos/21200000/The-Carpathian-mountains-ukraine-21240523-900-586.jpg",
        key: 0
    }, 
    {
        img: "https://static.thousandwonders.net/Carpathian.Mountains.original.405.jpg",
        key: 1
    },
    {
        img: "https://s3.envato.com/files/252791831/preview.jpg",
        key: 2
    }
];

 
class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animation: true,
            btnName: 'Stop slide'
        }    
        this.stopPlay = this.stopPlay.bind(this);                
    };   

    stopPlay(){
        var play = (this.state.animation === true) ? false : true;
        var buttonName = (this.state.btnName === 'Stop slide') ? 'Play slide' : 'Stop slide';
        this.setState({
            animation: play,
            btnName: buttonName
        })
    }

  render() {
    return (
        <HashRouter>
            <div className="bgimg">

                <Slider className="slider-wrapper" autoplay={7000} animating={this.state.animation}>
                    {imgSlide.map((item, key) => (
                        <img  key={key} src={item.img} />                    
	                ))}
                </Slider>

                <nav className="nav">
                    <ul className="nav-menu">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        {/*<li><NavLink to="/post">Post</NavLink></li>*/}
                         <li><NavLink to="/todo">Add Post</NavLink></li> 
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><button type="button" className='btn-stop' onClick={this.stopPlay} > {this.btnName} </button></li>
                    </ul>
                    
                </nav> 

                <h1 className="title">#SaveUkrainianCarpathians</h1>
                               

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    {/*<Route path="/post" component={Post}/>*/}
                     <Route path="/todo" component={TodoList}/> 
                    <Route path="/contact" component={Contact}/>
                </div>               
            </div>
        </HashRouter>        
    );
  }
}
 
export default Main;

