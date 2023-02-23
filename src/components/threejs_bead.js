import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'


function Hoop ({RADIUS, position, rotation, omega, simSpeed, paused}) {
    const ref = useRef();
    useFrame((state, delta) => {
        if (!paused){
            ref.current.rotation.y = rotation;
    }})

    return (
        <mesh
          ref={ref}>
          <torusGeometry args={[RADIUS,3,16,50,2*Math.PI]}/>
          <meshBasicMaterial color="rgb(68, 170, 136)"  />
        </mesh>
      )
}
function Ball ({positionProp, opacity, radius}){
    //useFrame((state, delta) => (setPos([150*Math.cos(rotation),150*Math.sin(rotation),-150*Math.sin(rotation)])))
    return(
        <mesh
            position={positionProp}
            >
            <sphereGeometry attach='geometry' args={[radius,24, 24]} />
            <meshStandardMaterial attach='material' color={'red'} transparent={true} opacity={opacity}/>
        </mesh>
    );
    
}
function getPos(angle, radius){
    let x = radius*Math.cos(angle);
    let y = radius*Math.sin(angle);
return [x,y];
}

function Balls({rotation, data, time, setTime, RADIUS, simSpeed, paused}){
    const trailLen = 20;
    const ref = useRef(null);
    let createBalls = []
    const ballRad = 8
    const [cords, setCords] = useState(Array(trailLen).fill([0,0,0]))
    for (let i = 0; i < trailLen; i++){
        createBalls.push(<Ball key={i} positionProp={[0,0,0]} radius={(i/trailLen)*ballRad} opacity={i/trailLen}/>)
    }
    const [balls, setBalls] = useState(createBalls)
    useFrame((state, delta) => { //move this to a web worker?
        if (!paused){
        let tempCords = cords
        const curAngle = data.getTheta(time)
        const ballCords = getPos(curAngle+3*Math.PI/2, RADIUS);
        //tempCords.push([ballCords[0]*150*Math.cos(rotation),ballCords[1],-150*ballCords[0]*Math.sin(rotation)])
        tempCords.push([ballCords[0]*Math.cos(rotation),ballCords[1],-ballCords[0]*Math.sin(rotation)])
        tempCords.shift()
        setCords(cords => [...tempCords])
        let newBalls = []
        for (let i = 0; i < balls.length; i++){
            newBalls[i] = (<Ball key={i} positionProp={cords[i]} radius={(i/balls.length)*ballRad} opacity={i/balls.length}/>)
        }
        setBalls(balls =>[...newBalls])
        
        }})
    return (
        <mesh>
            {balls}
        </mesh>
    );
}

function BeadOnHoop({data, omega, simSpeed, paused, time, setTime}){
    const RADIUS = 150
    const [rotation, setRotation] = useState(0)
    useFrame((state, delta)=>{
        if(!paused){
            setTime(time+(delta*simSpeed))
            setRotation(rotation+delta*omega*(simSpeed));
        
    }
    })
    return (
        <mesh>
                <Hoop rotation={rotation} RADIUS={RADIUS} omega={omega} simSpeed={simSpeed} paused={paused}/> 
                <Balls rotation={rotation} data = {data} time = {time} setTime={setTime} RADIUS={RADIUS} simSpeed={simSpeed} paused={paused}/>
        </mesh>
    );
}


export default function BeadCanvas({data, omega, simSpeed, paused}){
    const [time, setTime] = useState(0)
    //try moving Hoop and Balls into its own component so that useFrame syncronized
    return (
        <div style={{width: "500px", height: "500px"}}>
            <p>Time: {time.toFixed(4)}</p>
            <Canvas camera={{fov:"25", position: [0,0,1000], near:".1", far:"100000", type:"PerspectiveCamera"}}>
                <ambientLight intensity={.5} />
                <pointLight position={[0,0,10000]} intensity={2}/>
                <BeadOnHoop data={data} omega={omega} simSpeed={simSpeed} paused={paused} time = {time} setTime= {setTime}/>
            </Canvas>
            
        </div>
    );

}
