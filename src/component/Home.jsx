import React, { Component } from "react";
import "../css/home.css"
 
class Home extends Component {
  render() {
    return (
      <div className="Home col-6 ">
        <h2 className="title">Hello</h2>
        <p className="home-txt">This site was created like a blog, for sharing, keeping the moment and try to save a nature of Ukrainians Carpathians.
          Anybody, who want to share with his impressions about the Carpathians nature can add a photo and an article in the post.
          Also, we will be trying to draw attention to a human act, whose devastated bring the harm to our nature and future.
          </p>          
        <p className="home-txt">You can also send request to <a href="https://menr.gov.ua/en/">ministry of ecology and natural resources of Ukraine</a> and international organization <a href="https://www.greenpeace.org/international/">Greenpease.</a></p>
      </div>
    );
  }
}
 
export default Home;