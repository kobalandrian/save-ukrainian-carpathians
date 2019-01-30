import React, { Component } from "react";
import "../css/post.css";
 
class TodoItems extends Component {
    constructor(props){
        super(props);        
    };

  createTasks(item) {
    return (
    <li className = "Post" key={item.key}>
      <button className="btn-delete" >x</button>    
      <div className={this.class}>           
        <h2 className = "post-title" > {item.title}  </h2>  
      <img className = "avatar" src = {item.img} alt = { item.title } />      
      <div className = "post-text" > {item.text}  </div>      
      <div className = "post-autor" >
        <h4 className = "autor col-6" > Autor:  {item.name} </h4>
         <div className = "date col-6" > {item.year +' / '+ item.month +' / '+ item.day} </div> 
     </div>
     </div>   
    </li>
      )
  };

  render() {
    var todoEntries = this.props.entries;       
    var listItems = todoEntries.map(this.createTasks);     
    return (
      <ol className="theList">
          {listItems}
      </ol>
    );
  }
};
 
export default TodoItems;