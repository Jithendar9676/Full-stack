import React,{useState} from 'react'

function TextForm(props) {

   const touppercase=()=>{
        
            
            let newtext=text.toUpperCase();
            settext(newtext)
            console.log("clicked to uppercare: " + newtext );
            props.showAlert("Converted to uppercase", "success");

        }
        const tolowercase=()=>{
        
            
            let newtext=text.toLowerCase();
            settext(newtext)
            console.log("clicked to lowercare: " + newtext );
            props.showAlert("Converted to lowercase", "success");

        }
        const toremoveextraspaces = () => {
            let newtext = text.split(/[ ]+/)
            settext(newtext.join(' '));
            props.showAlert("Removed extra spaces", "success");
        }
        const tocopy =()=>{
            let text=document.getElementById('myBox');
            text.select('');
            document.getSelection().removeAllRanges();
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied", "success");
        }
        const toclear=()=>{
            let newtext=('')
            settext(newtext);
            props.showAlert("Text cleared", "success");
        
        }
      const  onChange=(e)=>{
            settext(e.target.value)
            

        }

    const [text, settext] = useState("");
    
    
    
    return (
        
        <>
        <div className='container'style={{color: props.mode ==="dark"?"white":"black"}} >
          <h1>{props.heading}</h1>  
          <div className='mb-3' >
              <textarea className='form-control' style={{backgroundColor:props.mode === "dark"?"#212837":"white",color: props.mode ==="dark"?"white":"black"}} placeholder='Type or paste your text here' id='myBox' rows='8' value={text} onChange={onChange} ></textarea>
              </div>
              <button disabled={text.length===0} className="btt btn-primary mx-1 my-1"  onClick={touppercase}>Convert to UPPERCASE</button>
              <button disabled={text.length===0} className="btt btn-primary mx-1 my-1" onClick={tolowercase}>Convert to lowercase</button>
              <button disabled={text.length===0} className="btt btn-primary mx-1 my-1" onClick={toremoveextraspaces}>Remove Extra Spaces</button>
              <button  disabled={text.length===0} className="btt btn-primary mx-1 my-1" onClick={tocopy}>Copy</button>
              <button disabled={text.length===0} className="btt btn-primary mx-1 my-1" onClick={toclear}>Clear</button>

              <div className="container my-3" >
                  <h2>Your text summary</h2>
                  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
                  <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                  <h2>Preview</h2>
                  <p>{text.length>0?text: "Nothing to preview!"}</p>
              </div>
              </div>
        
        </>
    )
}

export default TextForm
