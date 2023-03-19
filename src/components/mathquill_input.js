import React, { useState, useEffect} from 'react'
import MathQuill from "mathquill-node";
//import { addStyles, EditableMathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by 
export default function MathQuillInput ({latex, label, reDraw}) {
    let myField = React.createRef()
    let myOutput = React.createRef()
    // const verify = () =>{

    // }
    useEffect (()=>{
        //var mathFieldSpan = document.getElementById('math-field');
        var mathFieldSpan = myField.current
        //var latexSpan = document.getElementById('latex');
        var latexSpan = myOutput.current
        latexSpan.textContent = latex.current
        mathFieldSpan.textContent = latex.current
        var MQ = MathQuill.getInterface(2); // for backcompat
        var mathField = MQ.MathField(mathFieldSpan, {
        spaceBehavesLikeTab: true, // configurable
        handlers: {
            edit: function() { // useful event handlers
            latexSpan.textContent = mathField.latex(); // simple API
            latex.current = mathField.latex();

            }
        }
    }
    );
    myField.current.querySelector('textarea').addEventListener('focusout', reDraw)
    });
        
    

    return (
        <div>
            <p>{label}: <span ref={myField} id="math-field"></span></p>
            <p>LaTeX of what you typed: <span ref = {myOutput} id="latex"></span></p>
        </div>
        );
    
}