import React, {useState} from 'react'

export default function TextForm(props) {
    const handleToupper= () =>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("converted to Uppercase","success");
    }

    const handleTolower= () =>{
        let newText= text.toLocaleLowerCase();
        setText(newText);
        props.showalert("converted to Lowercase","success");
    }

    const handleOnchange= (event) =>{
        setText(event.target.value);
    }

    const clearAll= () => {
        let newText= '';
        setText(newText);
        props.showalert("Text cleared","success");
    }

    // const copyText= () =>{
    //     var text = document.getElementByID("myBox");
    //     text.Select();
    //     navigator.clipboard.writeText(text.value);
    // }
    const handleSpaces= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    return (
    <>
    
    <div className="container" >
    <h2 style={{color: props.mode=== 'dark'? 'white': 'black' }}>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleOnchange} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode=== 'dark' ? '#4d5fae' : 'white', color: props.mode=== 'dark'? 'white': 'black' }}></textarea>
    </div>
    <button className="btn btn-primary mt-2 mx-1 my-1" onClick={handleToupper} disabled={text.length===0}>CONVERT TO UPPERCASE</button>
    <button className="btn btn-primary mt-2 mx-1 my-1" onClick={handleTolower} disabled={text.length===0}>CONVERT TO LOWERCASE</button>
    <button className="btn btn-primary mt-2 mx-1 my-1" onClick={clearAll} disabled={text.length===0}>CLEAR</button>
    <button className="btn btn-primary mt-2 mx-1 my-1" onClick={handleSpaces} disabled={text.length===0}>Handle Spaces</button>
    </div>
    <div className="container my-3">
        <h2 style={{color: props.mode=== 'dark'? 'white': 'black' }}>TEXT SUMMARY</h2>
        <p style={{color: props.mode=== 'dark'? 'white': 'black' }}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p style={{color: props.mode=== 'dark'? 'white': 'black' }}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2 style={{color: props.mode=== 'dark'? 'white': 'black' }}>Preview</h2>
        <p style={{color: props.mode=== 'dark'? 'white': 'black' }}>{text.length > 0 ? text: 'Nothing to preview'}</p>
    </div>
    </>
    )
}
