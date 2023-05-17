import React, { useState, useEffect} from 'react'
import MathQuill from "mathquill-node";
import { useRef } from 'react';
//import { addStyles, EditableMathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by 
export default function MathQuillInput ({latex, label, reDraw, norm, eq}) {
    let myField = React.createRef()
    // const myLatex = useRef(norm)
    //let myOutput = React.createRef()
    // const verify = () =>{

    // }
    useEffect (()=>{
        //var mathFieldSpan = document.getElementById('math-field');
        var mathFieldSpan = myField.current
        //var latexSpan = document.getElementById('latex');
        //var latexSpan = myOutput.current
        //latexSpan.textContent = latex.current
        mathFieldSpan.textContent = latex.current
        var MQ = MathQuill.getInterface(2); // for backcompat
        
        var mathField = MQ.MathField(mathFieldSpan, {
        spaceBehavesLikeTab: true, // configurable
        handlers: {
            edit: function() { // useful event handlers
            latex.current = mathField.latex(); // simple API
            eq.current = mathField.latex().replace('\\theta','t').replace('\\omega','w');
            // latex.current = latex.current;
            // console.log(latex.current)
            }
        }
    }
    );
    myField.current.querySelector('textarea').addEventListener('focusout', reDraw)
    });
        
    

    return (
        <div>
            <p>{label} = <span ref={myField} id="math-field"></span></p>
            {/* <p>LaTeX of what you typed: <span ref = {myOutput} id="latex"></span></p> */}
        </div>
        );
    
}