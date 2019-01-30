import React, { Component } from "react";
import "../css/contacts.css"
 
class Contact extends Component {
  render() {
    return (
      <div className="Contacts col-6 col-10">
        <h2 className="title">Contacts</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;