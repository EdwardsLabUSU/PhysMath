import React, { useEffect, useRef, useState} from 'react';
import MathInput from '../components/math_input';
import VarTable from '../components/var_table';
import JsonData from '../data/bead_var.json'
import BeadCanvas from '../components/threejs_bead';
import { simData } from '../simulation_code/bead/simData';
import {getGraphData} from '../simulation_code/bead/rk4functions'


    function getData(vars,equations,useEval, data, time){
        const props = [vars[7],vars[4],vars[3],vars[5],vars[0],vars[1],vars[2],equations,useEval,vars[8],data,time,vars[10]]
        //console.log(...props)
        return getGraphData(...props)//graphInt, v, angle, r, g, k, equations, useEval, graphLen, graphData, 0(time, starts at 0) , wrap
    }   
    
    function Bead (){
        const [thetaEq, setThetaEq] = useState('1');
        const [velocityEq, setVelocityEq] = useState('1');
        let values = new Array()
        for (const [key, value] of Object.entries(JsonData)) {
            //values.push(`${value.id}:${value.val}`)
            if (value.name !== "wrap" && value.name !== "projection"){
                values.push(Number(value.val))
            } else{
                values.push(Boolean(value.val))
            }
        }
        const [vars, setVars] = useState(values);
        const [refData, setRefData] = useState(getData(values, {}, false, new simData(vars[7]), 0));
        const [testData, setTestData] = useState(getData(vars, {thetadot:thetaEq, velocitydot:velocityEq}, true, new simData(vars[7]), 0))
        const [paused, setPaused] = useState(false)

        const keyboardEventListener = (e) =>{
            e.preventDefault();
            if (e.key == ' '){
            setPaused(!paused);
            } else if (e.key == 'r'){

            }
        }
        useEffect(()=>{
            window.addEventListener('keydown', keyboardEventListener)
            return()=>{
                window.removeEventListener('keydown', keyboardEventListener)
            }
            
        });
        
        return( //make a site where you can type equations and add the values for it
            <div className='bead-on-hoop'>
            <div className="title-box">
                <p id="lab-title">Bead On Hoop</p>
            </div>
            <div className='canvas-form'>
                <div className='canvas-container'>
                    <p>Reference Equations:</p>
                    {/* <canvas ref ={canvas2ref} className = "canvas2" id="c2" width = "400" height="400"></canvas> */}
                    <BeadCanvas data={refData} omega={vars[5]} simSpeed={vars[6]} radius = {vars[0]} paused={paused}/>
                    
                    <p>Test Equations:</p> 
                    <BeadCanvas data={testData} omega={vars[5]} simSpeed={vars[6]} radius = {vars[0]}  paused={paused}/>
                    {/* <canvas ref ={canvas1ref} className = "canvas1" id="c" width = "400" height="400"></canvas> */}
                </div>
                <form className='variables'>
                    <VarTable data={JsonData} setVals={setVars} arr={vars}/>
                    <div className = "time-stuff">
                        <p className="time-label">Time(seconds):</p>
                        <p className = "time-value" id="time">0</p>
                    </div>   
                    <div className="equations-input">
                        <MathInput label = "theta" value={thetaEq} id="thetadot" setEq={setThetaEq}/>
                        <MathInput label = "velocity" value={velocityEq} id="velocitydot" setEq={setVelocityEq}/>
                    </div>
                </form>
                <div className="graphs">
                    <div className="actual">
                        <div id="staticSim-theta"></div>
                        <div id="staticSim-velocity"></div>
                    </div>
                    <div className = "inputed">
                        <div id="variableSim-theta"></div>
                        <div id="variableSim-velocity"></div>
                    </div>
                </div>
            </div>
            <p>Test: {vars}</p>
            <p>Result: {testData.getTheta(0)}</p>
            <button type="button" 
                id = "generate" 
                className="btn btn-outline-light btn-lg"
                // onClick={draw({thetadot:thetaEq, velocitydot:velocityEq}, true, "variableSim-theta","variableSim-velocity", vars, canvas1ref, canvas2ref)}
                // onFocus="blur()"
                ><i className="fas fa-sync-alt"></i> reset position (r)</button>

            <button type="button" 
                className="btn btn-outline-light btn-lg"
                onClick={()=>setPaused(!paused)}
                // onFocus="blur()"
                ><i className="fas fa-play"></i> play/pause animation (spacebar)</button>
        </div>
    );
    }
    


export default Bead; //look into https://cortexjs.io/compute-engine/ and the mathView/mathlive,