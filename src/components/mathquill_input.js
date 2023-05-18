import React, { useState, useEffect} from 'react'
import MathQuill from "mathquill-node";
import { useRef } from 'react';
//import { addStyles, EditableMathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by 
export default function MathQuillInput ({latex, label, reDraw, norm, eq}) {
    let myField = React.createRef()
    const [update, setUpdate] = useState(0);
    // const myLatex = useRef(norm)
    //let myOutput = React.createRef()
    // const verify = () =>{

    // }
    var MQ;
    var mathField;
    var mathFieldSpan
    useEffect (()=>{
        //var mathFieldSpan = document.getElementById('math-field');
        mathFieldSpan = myField.current
        //var latexSpan = document.getElementById('latex');
        //var latexSpan = myOutput.current
        //latexSpan.textContent = latex.current
        mathFieldSpan.textContent = latex.current
        MQ = MathQuill.getInterface(2); // for backcompat
        
        mathField = MQ.MathField(mathFieldSpan, {
        spaceBehavesLikeTab: true, // configurable
        handlers: {
            edit: function() { // useful event handlers
            latex.current = mathField.latex(); // simple API
            eq.current = mathField.latex().replace('\\theta','t').replace('\\omega','w');
            // latex.current = latex.current;
            console.log(latex.current)
            }
        }
        
    }
    );
    myField.current.querySelector('textarea').addEventListener('focusout', reDraw)
    });
        
    

    return (
        <div>
            <table>
                <tr>
                    <td style={{'padding': '15px'}}>{label} = <span ref={myField} id="math-field"></span></td>
                    <td style={{'padding': '5px'}}><button onClick={e =>{
                        // mathFieldSpan.textContent += '\\theta ';
                        latex.current += '\\theta ';
                        eq.current += 't';
                        setUpdate(update => update+1);
                    }} data-toggle="tooltip" title='type \theta and then space to insert theta'>Insert θ</button></td>
                    <td style={{'padding': '5px'}}><button onClick={e =>{
                        latex.current += '\\omega  ';
                        eq.current += 'w';
                        setUpdate(update => update+1);
                    }} data-toggle="tooltip" title='type \omega and then space to insert omega'>Insert ω</button></td>
                </tr>
            </table>
            {/* <p>LaTeX of what you typed: <span ref = {myOutput} id="latex"></span></p> */}
        </div>
        );
    
}
