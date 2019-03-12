import React, { Component } from "react";
import "../css/todo.css";
//import TodoItems from "./TodoItems";
import Post from "./Post";
 
class TodoList extends Component {
    constructor(props){
        super(props);             
        this.state = {
          items: [],
          classPost: 'hide',
          list: [],
          newItem: "",          
        };       
        this.addItem = this.addItem.bind(this);
        this.addPost = this.addPost.bind(this);            
    };

    componentDidMount() {
      this.hydrateStateWithSessionStorage();      
   }

    addPost(){
      var post = (this.state.classPost === 'hide') ? 'visible' : 'hide';
      this.setState({
        classPost: post
      })
    }   

    addItem(e) {     
      if (this._inputElement.value !== "") {        
        var newItem = {
          title: this._inputTitle.value,
          name: this._inputName.value,
          text: this._inputElement.value,         
          img: this._inputImg.value,
          key: Date.now(),
          year: new Date().getFullYear(),
          month: new Date().getMonth()+1,
          day: new Date().getDate(),
          id: 1 + Math.random()          
        };    
/*
        this.setState((prevState) => {          
          return {             
            items: prevState.items.concat(newItem)            
          };
        });
*/
        // copy current list of items
    const list = [...this.state.list];
    // add the new item to the list
    list.unshift(newItem);
    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });

    // update sessionStorage
    sessionStorage.setItem("list", JSON.stringify(list));
    sessionStorage.setItem("newItem", "");
         

        this._inputElement.value = "";
        this._inputTitle.value = "";
        this._inputName.value = "";
        this._inputImg.value="";
      }
               
      e.preventDefault();
    }    

    deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);  
      this.setState({ list: updatedList });  
      // update sessionStorage
    sessionStorage.setItem("list", JSON.stringify(updatedList));
    }

    hydrateStateWithSessionStorage() {
      // for all items in state
      for (let key in this.state) {
        // if the key exists in sessionStorage
        if (sessionStorage.hasOwnProperty(key)) {
          // get the key's value from sessionStorage
          let value = sessionStorage.getItem(key);  
          // parse the sessionStorage string and setState
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            // handle empty string
            this.setState({ [key]: value });
          }
        }
      }
    }

  render() {

    return (         
      <section className="todoListMain col-10">
        <div className="add-post ">
          <h2 className = "add-post-title" > Add Post
            <button className="btn-add-post" onClick={this.addPost}>Add Post</button>
          </h2>
        </div>
        

        <article className={this.state.classPost}>           
          <div className="header add-post col-6">
            <form onSubmit={this.addItem}>
              <label > Post Title <br />
                <input type = "text" placeholder = "Post Title" ref={(b) => this._inputTitle = b} required />
              </label> 
              <br />
              <label > Author Name <br />
                <input type = "text" placeholder = "Full Name" ref={(c) => this._inputName = c} required />
              </label>
              <br />
              <label > Post Body <br />
                <textarea className="textarea" ref={(a) => this._inputElement = a} placeholder="Write post" required />
              </label>
              <br />
              <label > Image URL - <span className = "highlight" > use this one to test 'https://bit.ly/1P9prpc' </span> 
                <input type = "url"  ref={(d) => this._inputImg = d} placeholder = "The URL of the featured image for your post"  />
              </label> 
              <br />             
                <button type="submit" className="btn-public">Public Post</button>              
            </form>
          </div>
        </article>

       {/* <TodoItems entries={this.state.list} /> */}
       <ol className="theList">
        {this.state.list.map(list => {
          return(
            <li className = "Post flex-container" key={list.key}>
              <button className="btn-delete" onClick={() => this.deleteItem(list.id)}>x
                <span className="tooltiptext">Delete</span>
              </button>
              <div className="flex-items">
                <img className = "avatar" src = {list.img} alt = { list.title } />      
              </div>
              <div className="flex-items">
                <h2 className = "post-title" > {list.title}  </h2>  
                <div className = "post-text" > {list.text}  </div>      
                <div className = "post-autor" >
                  <h4 className = "autor col-6" > Autor:  {list.name} </h4>
                  <div className = "date col-6" > {list.year +' / '+ list.month +' / '+ list.day} </div> 
                </div>
              </div>                   
            </li>  
          )
        })}
       </ol>

       <Post />
      </section> 
      
    );
  }
}
 
export default TodoList;