import React ,{useState}from 'react'
import './Container.css'

export default function Container() {
  let [text,setText] = useState("");
  let [x,setx] = useState(0);
  let [m,setm] = useState(0);
  let [z,setz] = useState(0);
    var click1 = ()=>{
      text=text+"1";
      setx((10*x) + 1);
      console.log(x)
      setText(text);      
    };
    var click2 = ()=>{
      text=text+"2";
      setx((10*x) + 2);
      setText(text);  
    };
    var click3 = ()=>{
      text=text+"3";
      setx(10*x + 3);
      setText(text);       
    };
    var click4 = ()=>{
      text=text+"4";
      setx(10*x +4);
      setText(text);        
    };
    var click5 = ()=>{
      text=text+"5";
      setx(10*x + 5);
      setText(text);        
    };
    var click6 = ()=>{
      text=text+"6";
      setx(10*x + 6);
      setText(text);        
    };
    var click7 = ()=>{
      text=text+"7";
      setx(10*x + 7);
      setText(text);        
    };
    var click8 = ()=>{
      text=text+"8";
      setx(10*x + 8);
      setText(text);        
    };
    var click9 = ()=>{
      text=text+"9";
      setx(10*x + 9);
      setText(text);        
    };
    var click0 = ()=>{
      text=text+"0";
      setx(10*x + 0);
      setText(text);        
    };
    var clickmul = ()=>{
      text=text+"*";
      setz(1);
      setm(x);
      setx(0);
      setText(text);       
    };
    var clickdiv = ()=>{
      text=text+"/";
      setz(2);
      setm(x);
      setx(0);     
      setText(text);    
    };
    var clickadd = ()=>{
      text=text+"+";
      setz(3);
      setm(x);
      setx(0);
      setText(text);      
    };
    var clicksub = ()=>{
      text=text+"-";
      setz(4);
      setm(x);
      setx(0);      
      setText(text);    
    };
    var clickeq = ()=>{
      let result=0;
      

      
      
      if(z===3)
      result=m+x;
      else if(z===1)
      result=m*x;
      else if(z===2)
      result=m/x;


      setx(0);

      setText(result);
      

    }

    let changehandle = (event)=>{
      setText(event.target.value);
    }

    let reset = ()=>{
      setText("")
    }


  return (

    
    <>
    <div className="input" onChange={changehandle}>

        <textarea name="input" id="input" cols="26" rows="1" value={text}></textarea>

    </div>
    <div className='y'>       
    
     <div className='x'>
      
        <div className="box one" onClick={click1}>1</div>
        <div className="box two" onClick={click2}>2</div>
        <div className="box three" onClick={click3}>3</div>
        <div className="box four" onClick={click4}>4</div>
        <div className="box five" onClick={click5}>5</div>
        <div className="box six" onClick={click6}>6</div>
        <div className="box seven" onClick={click7}>7</div>
        <div className="box eight" onClick={click8}>8</div>
        <div className="box nine" onClick={click9}>9</div>
        <div className="box zero" onClick={click0}>0</div>
        <div className="box plus" onClick={clickadd}>+</div>
        <div className="box minus" onClick={clicksub}>-</div>
        <div className="box division" onClick={clickdiv}>/</div>
        <div className="box multiply" onClick={clickmul}>*</div>
        <div className="box equal" onClick={clickeq}>=</div>

    </div>

    
    </div>

    <div className="btn">
        
    <button className='bttn' onClick={reset}>Reset</button>

    </div>
    </>
  )
}
