// import React from 'react';
import React, { useState } from 'react';

function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clear = () => {
        let newText = "";
        setText(newText);  
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select(); //The HTMLInputElement.select() method selects all the text in a <textarea> element or in an <input> element that includes a text field.
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');  
    // text = "Mango and orange";  // Wrong way to change the state.
    // setText("Mango and orange");  // Correct way to change the state.

return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    )
}

export default TextForm;