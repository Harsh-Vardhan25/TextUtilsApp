import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react'

export default function TextBox(props) {

    // const [mode, setMode] = useState("Enable Dark Mode");

    // const [style, setStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
        
    // });
    // const toggleStyle = () => {
    //     if (style.color === "black") {
    //         setStyle({
    //             color: "white",
    //             backgroundColor: "black"
                
    //         });
    //         setMode("Enable Light Mode");
    //     }
    //     else {
    //         setStyle({
    //             color: "black",
    //             backgroundColor: "white"
                
    //         });
    //         setMode("Enable Dark Mode");
    //     }
    //};
    const [text, setText] = useState('');
    const toUpperCase = () => {
        // sTxt("text has been changed");
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    };
    const toLowerCase = () => {
        // sTxt("text has been changed");
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    };
    const clearText = () => {
        setText('');
        props.showAlert("Text cleared", "success");
    }
    const onChange = (event) => {
        setText(event.target.value);
    };
    const removeExtraSpace = () => {
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert("Extra Space Cleared", "success");
    }
    // const copyText = ()=> {
    //     
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("Text copied to Clipboard", "success");
    //};
    return (
        <>
            <div style={{color: props.mode==='light'?'black':'white'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="textBox" value={text} onChange={onChange} rows="8" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 my-1' onClick={toUpperCase}>Convert to UpperCase</button>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 my-1' onClick={toLowerCase}>Convert to LowerCase</button>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 my-1' onClick={removeExtraSpace}>Clear Extra Space</button>
                {/* <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy To Clipboard</button> */}
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            </div>
            {/* <div className="form-check form-switch d-flex">
                <input className="form-check-input form-control me-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
                <label className="form-check-label" for="flexSwitchCheckDefault">{mode}</label>
            </div> */}
        </>
    )
}
