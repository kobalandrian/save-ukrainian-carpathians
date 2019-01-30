import React, { Component } from 'react';
import '../css/post.css';
import postImg1 from '../img/header2.jpg';


class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classPost: 'hide',
            name: 'Hello Kitty',
            img: '../img/header2.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1,
            day: new Date().getDate()            
        };
       
    };
    
    render() {
        var postName = this.state.name;
        var postText = this.state.text;        

        return (
          <article className = "Post-size">

            <section className = "Post  " >
              <h2 className = "post-title" > Post Title </h2> 
              <img className = "avatar" src = { postImg1 } alt = { postName } /> 
              <div className = "post-text" > { postText } </div> 
              <div className = "post-autor" >
                <h4 className = "autor col-6" > Autor: { postName } </h4> 
                <div className = "date col-6" > { this.state.year +' / '+ this.state.month +' / '+ this.state.day } </div> 
              </div >
            </section>

          </article>                  
        );
    }
}

export default Post;