import React, {useState, useEffect, useRef} from "react";
import MathView from "react-math-view";
import { parseTex, evaluateTex } from 'tex-math-parser'

export default function MathInput({value, id, label, setEq}) {
  const [latex, setLatex] = useState(value);
  const [text, setText] = useState(value);
  const [ans, setAns] = useState("");
  
  return (<><span><p>{label} =<MathView style={{display:"inline-block", verticalAlign:"middle"}}
    value = {text}
    latex = {text}
    onChange={
        (e)=>{
            setText(e.target.value);
            setLatex(e.target.value);
            setEq(e.target.value);
        }}
  /> </p></span>
  {/* <p><span>{tryEval(ans,setAns,text)}</span></p> */}

  </>)
}

// function tryEval(ans, setAns,text){
//     try{
//         let test = evaluateTex(text).evaluated;
//         if (test != ans){
//         setAns(evaluateTex(text).evaluated);
//         }
//     } catch{
//         return ans;
//     }
//     return ans;
// }