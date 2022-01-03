import React, { useState } from "react";

let myinterval;

const Counter = () =>{
    
    let [count,setcount] = useState(0);
    const [toggle,settoggle] = useState(true);
    const [firstclick,setfirstclick] = useState(true);
    const myincrease = () => {
        if(firstclick){
            myinterval = setInterval(()=>{
                count = count + 2;
                setcount(count);
            },2000)

        }
        setfirstclick(false);
    }
    const mypause = () =>{
        if(toggle){
           clearInterval(myinterval);
        }
        settoggle(false);
    }

    const myresume = () =>{
        myinterval = setInterval(()=>{
            count = count + 2;
            setcount(count);
        },2000)
        settoggle(true);
    }
    const mystop = () =>{
        clearInterval(myinterval);
        setcount(0);
    }
    return (
        <div className="main-div">
            <button type="button" id="start" onClick={myincrease}>Start</button>
            {toggle?<button type="button" id="pause" onClick={mypause}>Pause</button>
            :<button type="button" id="resume" onClick={myresume}>Resume</button>}
            <button type="button" id="stop" onClick={mystop}>Stop</button>
            <div id="result">{count}</div>
        </div>
    )
}

export default Counter;