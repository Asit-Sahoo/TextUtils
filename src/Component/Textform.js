import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("Enter your text");
    const handleUpClick=()=>{
      let newtext=text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to Uppercase!", "success");
     // document.title="TextUtils-Darkmode on";
    //  setInterval(()=>{
    //   document.title='TextUtils-Amazing Mode';
    //  },2000);
    //  setInterval(()=>{
    //   document.title='TextUtils-Round Mode';
    //  },1500);
      
    }
    const handleLwClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to Lowercase!","success");
    }
    const handleClClick=()=>{
      let newtext=text.replace(text,'');
      setText(newtext);
      props.showAlert("Clear!","success");
    }
    const handleOnChange=(event)=>{
      setText(event.target.value);
     
    }
  //   const [myStyle,setMyStyle]=useState({
   
  //   backgroundColor:props.mode
  // })
  // const toggle=()=>{
     
  //     setMyStyle({
  //         backgroundColor:
  //     })
  // }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          {/* <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div> */}
            
          <h1>{props.heading}</h1>
          <div className="mb-3">
              {/* <label for="mytext" class="form-label">Example textarea</label> */}
              <textarea className="form-control" id="mytext" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button className='btn btn-primary mx-1'  onClick={handleUpClick}>Convert To Upper Case</button>
          <button className='btn btn-primary mx-1' onClick={handleLwClick}>Convert To Lower Case</button>
          <button className='btn btn-primary mx-1' onClick={handleClClick}>Clear</button>
          

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h5>Your text summer</h5>
          <p>{text.split(" ").length} words and {text.length}characters</p>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h5>preview</h5>
          <p>{text}</p>

    </div>
    
    </>

  )
}
