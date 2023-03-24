import { React, ReactDOM, useState } from "react";
import "./App.css";



export default function App(){
    const[val, setVal] = useState("");
    console.log(val)
    return(
        <div className="App" style={{padding: "20px 0px 0px 400px"}}>
            <div className = "Calculator" style={{height: "490px", width: "400px", backgroundColor:"#141452", borderRadius: "10%", padding: "50px 0px 0px 25px" }}>
                <div className = "flex-container">
                    <div className = "Box" style = {{height: "50px", width: "307px", margin: "10px 0px 40px 33px", backgroundColor:"#404040", color: "white"}}>{val}</div>
                        
                        <div className = "level">
                            <button className="button" onClick={()=>setVal(val.concat("1"))}>1</button>
                            <button className="button" onClick={()=>setVal(val.concat("2"))}>2</button>
                            <button className="button" onClick={()=>setVal(val.concat("3"))}>3</button>
                            <button className="button" onClick={()=>setVal("")}>AC</button>
                        </div>
                    
                        <div className = "level">
                            <button className="button" onClick={()=>setVal(val.concat("4"))}>4</button>
                            <button className="button" onClick={()=>setVal(val.concat("5"))}>5</button>
                            <button className="button" onClick={()=>setVal(val.concat("6"))}>6</button>
                            <button className="button" onClick={()=>setVal(val.concat("+"))}>+</button>
                        </div>
                    
                    
                        <div className = "level">
                            <button className="button" onClick={()=>setVal(val.concat("7"))}>7</button>
                            <button className="button" onClick={()=>setVal(val.concat("8"))}>8</button>
                            <button className="button" onClick={()=>setVal(val.concat("9"))}>9</button>
                            <button className="button" onClick={()=>setVal(val.concat("-"))}>-</button>
                        </div>
                   
                        <div className = "level">
                            <button className="button" onClick={()=>setVal(val.concat("."))}>.</button>
                            <button className="button" onClick={()=>setVal(val.concat("0"))}>0</button>
                            <button className="button" onClick={()=>setVal(eval(val))}>=</button>
                            <button className="button" onClick={()=>setVal(val.concat("*"))}>*</button>
                        </div>
                    
                        <div className = "level">
                            <button className="button" onClick={()=>setVal(val.slice(0,-1))}>C</button>
                            <button className="button" onClick={()=>setVal(val.concat("("))}>(</button>
                            <button className="button" onClick={()=>setVal(val.concat(")"))}>)</button>
                            <button className="button" onClick={()=>setVal(val.concat("/"))}>/</button>
                        </div>
                    
                </div>

            </div>
        </div>

    );
}
