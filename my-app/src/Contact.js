import React from 'react';
import './Contact.css'

function Contact(props) {
    var st = { color: "red" }
    return (
        <div className="main-class">
            <label style={{ color: "blue" }}>{props.name} name</label>
            <input type="text" placeholder="contact number" />
            <label style={st}>{props.id.age} </label>
            <input type="text" placeholder="contact number" />
        </div>
    )
}

export default Contact;