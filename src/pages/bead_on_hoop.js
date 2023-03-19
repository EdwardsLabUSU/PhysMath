import React, { useEffect, useRef, useState} from 'react';
import MathInput from '../components/math_input';
import VarTable from '../components/var_table';
import JsonData from '../data/bead_var.json'
import BeadCanvas from '../components/threejs_bead';
import { simData } from '../simulation_code/bead/simData';
import {getGraphData} from '../simulation_code/bead/rk4functions'
import MathQuillInput from '../components/mathquill_input'
import VelocityGraph from '../components/VelocityGraph';
import ThetaGraph from '../components/ThetaGraph';
import { waitFor } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';


    function getData(vars,equations,useEval, data, time, len){
        const props = [vars[7],vars[4],vars[3],vars[5],vars[0],vars[1],vars[2],equations,useEval,len,data,time,vars[10]]
        //console.log(...props)
        return getGraphData(...props)//graphInt, v, angle, r, g, k, equations, useEval, graphLen, graphData, 0(time, starts at 0) , wrap
    }   
    
    function Bead (){
        
        const thetaEq = useRef('vro');
        const velocityEq = useRef('tor');
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
        const storedVars = useRef(vars)
        const refData = useRef(getData(vars, {}, false, new simData(vars[7]), 0, vars[8]))
        const testData = useRef(getData(vars, {thetadot:thetaEq.current, velocitydot:velocityEq.current}, true, new simData(vars[7]), 0, vars[8]))//start time must equal last time? use time
        const paused = useRef(false)
        const playRef = useRef(false)
        const playTest = useRef(false)
        const maxTime = useRef(vars[8])
        const refBall = useRef({time:0, velocity:0, theta:0})
        const testBall = useRef({time:0, velocity:0, theta:0})
        const graphDimensions = {width:250,height:250,margin:{left:60,right:30,top:20,bottom:30}}
        const [update, setUpdate] = useState(0)
        const [reset, setReset] = useState(0)
        const reDraw = function () {
            paused.current = true
            setUpdate(update=>update+1)  //UNCOMMENT ONCE FIGURE OUT WHY OTHER SET UPDATE IS RUNNING AT BAD TIME
            setVars(vars => [...storedVars.current])
            refBall.current = {time:0, velocity:0, theta:0}
            testBall.current = {time:0, velocity:0, theta:0}
            maxTime.current = vars[8]
            //console.log("maxtime:"+maxTime.current)
            //console.log("graphLen:"+vars[8])
            playRef.current = true
            playTest.current = true
            refData.current = testData.current = null
            refData.current = getData(vars, {}, false, new simData(vars[7]), 0, vars[8])
            testData.current = getData(vars, {thetadot:thetaEq.current, velocitydot:velocityEq.current}, true, new simData(vars[7]), 0, vars[8])
            paused.current = false
            //console.log(refData.current)
            
        }
        // useEffect(()=>{
        //     console.log('Updated :)')
        // },[update])
        
        
        const refreshDataPoint = function (id, time) {
            
            if(time<vars[8]){
                if (maxTime.current > vars[8]){
                //console.log(time + ""+vars[8])
                maxTime.current = vars[8]
                setReset(reset=>reset + 1)
                //console.log("LENGTHHH:" + refData.current.data.length)
            }
            }
            if ( id === "reference" && time >= maxTime.current  && playRef.current == false){ 
                //console.log("LENGTHHH:" + refData.current.data.length)//why does this run during or after reset?
                //console.log("maxTime:" + maxTime.current)
                //console.log("Time:" + time)
                if(time<vars[8]){
                    console.log(time + ""+vars[8])
                    maxTime.current = vars[8]
                } 
                //console.log(time+":"+maxTime.current)
                maxTime.current=(maxTime.current+vars[8])
                //console.log(maxTime.current)
                refData.current = getGraphData(vars[7], refData.current.getVelocity(time), refData.current.getTheta(time)*180/Math.PI, vars[5], vars[0], vars[1], vars[2], {}, false, maxTime.current, refData.current, time, vars[10])
                testData.current = getGraphData(vars[7], testData.current.getVelocity(time), testData.current.getTheta(time)*180/Math.PI, vars[5], vars[0], vars[1], vars[2], {thetadot:thetaEq.current, velocitydot:velocityEq.current}, true, maxTime.current, testData.current, time, vars[10])
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
                reDraw()

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
                    <BeadCanvas id="reference" getData={refreshDataPoint} play={playRef} data={refData.current} omega={vars[5]} simSpeed={vars[6]} radius = {vars[0]} paused={paused} project={vars[9]}  trailLen ={vars[11]}/>
                    
                    <p>Test Equations:</p> 
                    <BeadCanvas id="test" getData={refreshDataPoint} play={playTest} data={testData.current} omega={vars[5]} simSpeed={vars[6]} radius = {vars[0]}  paused={paused} project={vars[9]} trailLen ={vars[11]}/>
                    {/* <canvas ref ={canvas1ref} className = "canvas1" id="c" width = "400" height="400"></canvas> */}
                </div>
                <form className='variables'>
                    <VarTable data={JsonData} setVals={storedVars} arr={storedVars} reDraw={reDraw}/>
                    <div className = "time-stuff">
                        <p className="time-label">Time(seconds):</p>
                        <p className = "time-value" id="time">0</p>
                    </div>   
                    <div className="equations-input">
                        {/* <MathInput label = "theta" value={thetaEq} id="thetadot"/>
                        <MathInput label = "velocity" value={velocityEq} id="velocitydot"/> */}
                        <MathQuillInput label = "theta" latex={thetaEq} reDraw={reDraw}/>
                        <MathQuillInput label = "velocity" latex={velocityEq} reDraw={reDraw}/>
                    </div>
                </form>
                <div className="graphs">
                    <div className="actual">
                        <div id="staticSim-theta">
                            <ThetaGraph data={refData} graphLen={maxTime} type="reference" ball={refBall} dimensions={graphDimensions} update={update} />
                        </div>
                        <div id="staticSim-velocity">
                            <VelocityGraph data={refData} graphLen={maxTime} type="reference" ball={refBall} dimensions={graphDimensions} update={update}/>
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
            <button type="button" 
                id = "generate" 
                className="btn btn-outline-light btn-lg"
                onClick={()=>{reDraw()}}
                // onFocus="blur()"
                ><i className="fas fa-sync-alt"></i> reset position (r)</button>

            <button type="button" 
                className="btn btn-outline-light btn-lg"
                onClick={()=>{paused.current = !paused.current}}
                // onFocus="blur()"
                ><i className="fas fa-play"></i> play/pause animation (spacebar)</button>
        </div>
    );
    }
    


export default Bead; //look into https://cortexjs.io/compute-engine/ and the mathView/mathlive,