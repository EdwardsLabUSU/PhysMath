import React, { useEffect, useRef, useState} from 'react';
// import MathInput from '../components/math_input';
import VarTable from '../components/var_table';
import JsonData from '../data/bead_var.json'
import BeadCanvas from '../components/threejs_bead';
import { simData } from '../simulation_code/bead/simData';
import {getGraphData} from '../simulation_code/bead/rk4functions'
import MathQuillInput from '../components/mathquill_input'
import VelocityGraph from '../components/VelocityGraph';
import ThetaGraph from '../components/ThetaGraph';
// import { waitFor } from '@testing-library/react';
// import { wait } from '@testing-library/user-event/dist/utils';


    function getData(vars,equations,useEval, data, time, len){
        const props = [vars['graphint'],vars['velocity'],vars['theta'],vars['omega'] ,vars['radius'],vars['gravity'],vars['friction'],equations,useEval,len,data,time,vars['wrap']]
        //console.log(...props)
        return getGraphData(...props)//graphInt, v, angle, omega, r, g, k, equations, useEval, graphLen, graphData, 0(time, starts at 0) , wrap
    }   
    
    function Bead (){
        const thetaEqInput = useRef('vr');
        const velocityEqInput = useRef('vrg');
        const thetaEq = useRef('vr');
        const velocityEq = useRef('vrg');
        let values = new Array()
        let dict = {}
        for (const [key, value] of Object.entries(JsonData)) {
            //values.push(`${value.id}:${value.val}`)
            if (value.id !== "wrap" && value.id !== "projection" && value.id !== "trail"){
                values.push(Number(value.val))
                dict[value.id] = Number(value.val)
            } else{
                values.push(Boolean(value.val))
                dict[value.id] = Boolean(value.val)

            }
        }
        // console.log(dict)
        const [vars, setVars] = useState(dict);
        // const storedVars = useRef(vars)
        const [storedVars, setStored] = useState(dict);
        const refData = useRef(getData(vars, {}, false, new simData(vars['graphint']), 0, vars['graphlen']))
        const testData = useRef(getData(vars, {thetadot:thetaEq.current, velocitydot:velocityEq.current}, true, new simData(vars['graphint']), 0, vars['graphlen']))//start time must equal last time? use time
        const paused = useRef(false)
        const playRef = useRef(false)
        const playTest = useRef(false)
        const maxTime = useRef(vars['graphlen'])
        const refBall = useRef({time:0, velocity:0, theta:0})
        const testBall = useRef({time:0, velocity:0, theta:0})
        const graphDimensions = {width:250,height:250,margin:{left:60,right:30,top:20,bottom:30}}
        const [update, setUpdate] = useState(0)
        const [reset, setReset] = useState(0)
        
        const reDraw = function () {
            paused.current = true
            setVars(vars => ({...storedVars}));
            //console.log(refData.current)
            
        }

        useEffect(()=>{
            refBall.current = {time:0, velocity:0, theta:0}
            testBall.current = {time:0, velocity:0, theta:0}
            maxTime.current = vars['graphlen']
            //console.log("maxtime:"+maxTime.current)
            //console.log("graphLen:"+vars[8])
            playRef.current = true
            playTest.current = true
            refData.current = testData.current = null
            refData.current = getData(vars, {}, false, new simData(vars['graphint']), 0, vars['graphlen'])
            testData.current = getData(vars, {thetadot:thetaEq.current, velocitydot:velocityEq.current}, true, new simData(vars['graphint']), 0, vars['graphlen'])
            setUpdate(update=>update+1)  //UNCOMMENT ONCE FIGURE OUT WHY OTHER SET UPDATE IS RUNNING AT BAD TIME
            paused.current = false
            console.log(refData.current.getVelocity(0));
        },[vars])
        
        
        const refreshDataPoint = function (id, time) {
            
            if(time<vars['graphlen']){
                if (maxTime.current > vars['graphlen']){
                //console.log(time + ""+vars[8])
                maxTime.current = vars['graphlen']
                setReset(reset=>reset + 1)
                //console.log("LENGTHHH:" + refData.current.data.length)
            }
            }
            if ( id === "reference" && time >= maxTime.current && playRef.current == false ){ 
                //console.log("LENGTHHH:" + refData.current.data.length)//why does this run during or after reset?
                //console.log("maxTime:" + maxTime.current)
                //console.log("Time:" + time)
                if(time<vars['graphlen']){
                    console.log(time + ""+vars['graphlen'])
                    maxTime.current = vars['graphlen']
                } 
                //console.log(time+":"+maxTime.current)
                maxTime.current=(maxTime.current+vars['graphlen'])
                //console.log(maxTime.current)
                refData.current = getGraphData(vars['graphint'], refData.current.getVelocity(time), refData.current.getTheta(time), vars['omega'], vars['radius'], vars['gravity'], vars['friction'], {}, false, maxTime.current, refData.current, time, vars['wrap'])
                testData.current = getGraphData(vars['graphint'], testData.current.getVelocity(time), testData.current.getTheta(time), vars['omega'], vars['radius'], vars['gravity'], vars['friction'], {thetadot:thetaEq.current, velocitydot:velocityEq.current}, true, maxTime.current, testData.current, time, vars['wrap'])
                //console.log(refData.current)
                setUpdate(update=>update+1)
                
            }
            
            if (id === "reference"){
                refBall.current = { time:time, velocity:refData.current.getVelocity(time), theta:refData.current.getTheta(time)}
                //setRefBall({time:time, velocity:refData.current.getVelocity(time), theta:refData.current.getTheta(time)})
                return refData.current.getTheta(time)
            }
            else{
                testBall.current = { time:time, velocity:testData.current.getVelocity(time), theta:testData.current.getTheta(time)}
                return testData.current.getTheta(time)
            }
        }

        const keyboardEventListener = (e) =>{
            
            if (e.key === ' '){
                e.preventDefault();
                paused.current = !paused.current
            } else if (e.key === 'r'){
                if( e.target.nodeName == "INPUT" || e.target.nodeName == "TEXTAREA" ) return;
                e.preventDefault();
                reDraw();

            } else if (e.ctrlKey && e.key === 'q'){ //press control-q and then r to put in default equations
                console.log('control q pressed');
                thetaEq.current = '\\frac{v}{r}';
                velocityEq.current = 'r\\sin\\left(t\\right)\\left(w^2\\cos\\left(t\\right)-\\frac{g}{r}\\right)-k\\cdot v';
                thetaEqInput.current = '\\frac{v}{r}';
                velocityEqInput.current = 'r\\sin\\left(\\theta\\right)\\left(\\omega^2\\cos\\left(\\theta\\right)-\\frac{g}{r}\\right)-k\\cdot v';
            }
        }
        // const [count, setCount] = useState(0)
        // useEffect(() => {
        //     const intervalId = setInterval(() => {
        //     setCount(count+1)
        //     }, 1000);
        //     return () => clearInterval(intervalId);
        //   }, []);

        useEffect(()=>{
                window.addEventListener('keydown', keyboardEventListener)
            return()=>{
                window.removeEventListener('keydown', keyboardEventListener)
            }
        },[]);

        
        
        return( //make a site where you can type equations and add the values for it
            <div className='bead-on-hoop'>
            <div className="title-box">
                <p id="lab-title">Bead On Hoop</p>
            </div>
            <div className='canvas-form'>
                <div className='canvas-container'>
                    <p>Reference Equations:</p>
                    {/* <canvas ref ={canvas2ref} className = "canvas2" id="c2" width = "400" height="400"></canvas> */}
                    <BeadCanvas id="reference" getData={refreshDataPoint} play={playRef} data={refData.current} omega={vars['omega']} simSpeed={vars['simSpeed']} radius = {vars['radius']} paused={paused} project={vars['projection']}  trail ={true}/>
                    
                    <p>Test Equations:</p> 
                    <BeadCanvas id="test" getData={refreshDataPoint} play={playTest} data={testData.current} omega={vars['omega']} simSpeed={vars['simSpeed']} radius = {vars['radius']}  paused={paused} project={vars['projection']} trail ={true}/>
                    {/* <canvas ref ={canvas1ref} className = "canvas1" id="c" width = "400" height="400"></canvas> */}
                </div>
                <form className='variables'>
                    <VarTable data={JsonData} setVals={setStored} arr={storedVars} reDraw={reDraw}/>
                    <div className="equations-input">
                        {/* <MathInput label = "theta" value={thetaEq} id="thetadot"/>
                        <MathInput label = "velocity" value={velocityEq} id="velocitydot"/> */}
                        <p>Use the variables in the parenthesis as the variables in the equations ex: w</p>
                        <p>If you need help with the equation input <a href="https://www.youtube.com/watch?v=IgasxD9f4_s&ab_channel=Udacity">Here</a> is a useful guide!</p>
                        <MathQuillInput label = "θ&#x307;" latex={thetaEqInput}  eq = {thetaEq} reDraw={reDraw} norm='vr'/>
                        <MathQuillInput label = "v&#775;" latex={velocityEqInput} eq = {velocityEq} reDraw={reDraw} norm='vrg'/>
                    </div>
                    <span>
                        <button type="button" 
                            id = "generate" 
                            className="btn btn-outline-light btn-sm"
                            onClick={()=>{reDraw()}}
                            // onFocus="blur()"
                            ><i className="fas fa-sync-alt"></i> reset position (r)</button>
                        
                        <button type="button" 
                            className="btn btn-outline-light btn-sm"
                            onClick={()=>{paused.current = !paused.current}}
                            // onFocus="blur()"
                            ><i className="fas fa-play"></i> play/pause animation (spacebar)</button>
                    </span>
                </form>
                <div className="graphs">
                    <div className="actual">
                        <div id="staticSim-theta">
                            <ThetaGraph data={refData} graphLen={maxTime} type="reference" ball={refBall} dimensions={graphDimensions} update={update} />
                        </div>
                        <div id="staticSim-velocity">
                            <VelocityGraph data={refData} graphLen={maxTime} type="reference" ball={refBall} dimensions={graphDimensions} update={update} />
                        </div>
                    </div>
                    <div className = "inputed">
                        <div id="variableSim-theta">
                        <ThetaGraph data={testData} graphLen={maxTime} type="test" ball={testBall} dimensions={graphDimensions} update={update} />
                        </div>
                        <div id="variableSim-velocity">
                        <VelocityGraph data={testData} graphLen={maxTime} type="test" ball={testBall} dimensions={graphDimensions} update={update}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
    }
// TODO 
// 1. Button to insert omega and theta, tooltip instructs how to type it in the mathquil input
// 2. Keyboard shortcut to insert the correct equations
// 3. Introduce other omega that uses omega, both omegas will effect each other


export default Bead; //look into https://cortexjs.io/compute-engine/ and the mathView/mathlive,