import React, { useEffect, useRef, useState} from 'react';
import MathInput from '../components/math_input';
import VarTable from '../components/var_table';
import JsonData from '../data/bead_var.json'
import BeadCanvas from '../components/threejs_bead';

    function Bead (){
        const [thetaEq, setThetaEq] = useState('');
        const [velocityEq, setVelocityEq] = useState('');
        let values = new Array()
        for (const [key, value] of Object.entries(JsonData)) {
            //values.push(`${value.id}:${value.val}`)
            values.push(value.val)
        }
        const [vars, setVars] = useState(values);
        const [thetaData, setThetaData] = useState();
        const [velocityData, setVelocityData] = useState();
        return(
            <div className='bead-on-hoop'>
            <div className="title-box">
                <p id="lab-title">Bead On Hoop</p>
            </div>
            <div className='canvas-form'>
                <div className='canvas-container'>
                    <p>Reference Equations:</p>
                    {/* <canvas ref ={canvas2ref} className = "canvas2" id="c2" width = "400" height="400"></canvas> */}
                    <BeadCanvas/>
                    
                    <p>Test Equations:</p> 
                    
                    {/* <canvas ref ={canvas1ref} className = "canvas1" id="c" width = "400" height="400"></canvas> */}
                </div>
                <form className='variables'>
                    <VarTable data={JsonData} setVals={setVars} arr={vars}/>
                    <div className = "time-stuff">
                        <p className="time-label">Time(seconds):</p>
                        <p className = "time-value" id="time">0</p>
                    </div>   
                    <div className="equations-input">
                        <MathInput label = "theta" value="1" id="thetadot" setEq={setThetaEq}/>
                        <MathInput label = "velocity" value="1" id="velocitydot" setEq={setVelocityEq}/>
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
            <button type="button" 
                id = "generate" 
                class="btn btn-outline-light btn-lg"
                // onClick={draw({thetadot:thetaEq, velocitydot:velocityEq}, true, "variableSim-theta","variableSim-velocity", vars, canvas1ref, canvas2ref)}
                onFocus="blur()"
                ><i class="fas fa-sync-alt"></i> reset position (r)</button>

            <button type="button" 
                class="btn btn-outline-light btn-lg"
                onClick="playPause()"
                onFocus="blur()"
                ><i class="fas fa-play"></i> play/pause animation (spacebar)</button>
        </div>
    );
    }
    


export default Bead; //look into https://cortexjs.io/compute-engine/ and the mathView/mathlive,