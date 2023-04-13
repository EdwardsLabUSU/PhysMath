import React, { createRef, useRef, useState } from 'react'
import { Canvas, invalidate, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'


function Hoop ({RADIUS, hoop}) {

    return (
        <mesh
          ref={hoop}>
          <torusGeometry args={[RADIUS,4,20,80,2*Math.PI]}/>
          <meshLambertMaterial color="rgb(68, 170, 136)"  />
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
    let x = radius*Math.cos(angle*Math.PI/180);
    let y = radius*Math.sin(angle*Math.PI/180);
return [x,y];
}

function Balls({rotation, time, RADIUS, paused, project, trail, getData, id, angle}){
    const trailLen = 50
    const ref = useRef(null);
    let createBalls = []
    const ballRad = 8
    const [cords, setCords] = useState(Array(trailLen).fill([0,0,0]))
    const [hoopCords, setHoopCords] = useState(Array(trailLen).fill(0))
    if (trail){
        for (let i = 0; i < trailLen; i++){
            createBalls.push(<Ball key={i} positionProp={[0,0,0]} radius={(i/trailLen)*ballRad} opacity={i/trailLen}/>)
        }}
    else{
        createBalls = [<Ball key={0} positionProp={[0,0,0]} radius={8} opacity={1}/>]
    }
    const [balls, setBalls] = useState(createBalls)
    useFrame((state, delta) => { //move this to a web worker?
        if (!paused.current){
            // console.log("useFrame time: " + time.current)
            const curAngle = angle.current
            const ballCords = getPos(curAngle+(3*Math.PI/2)*180/Math.PI, RADIUS);
            if (trail){
            //console.log(curAngle + id + time) 
            if (!project){
                
                let tempCords = cords
                tempCords.push([ballCords[0]*Math.cos(rotation.current),ballCords[1],-ballCords[0]*Math.sin(rotation.current)])
                tempCords.shift()
                setCords(cords => [...tempCords])
            }
            else{
                let tempHoopCords = hoopCords
                tempHoopCords.push(curAngle)
                tempHoopCords.shift()
                setHoopCords(hoopCords => [...tempHoopCords])
            }
            let newBalls = []
            for (let i = 0; i < balls.length; i++){
                if (!project){
                    newBalls[i] = (<Ball key={i} positionProp={cords[i]} radius={(i/balls.length)*ballRad} opacity={i/balls.length}/>)
                } else{
                    const tempHoopCord = getPos(hoopCords[i]+(3*Math.PI/2)*180/Math.PI, RADIUS)
                    newBalls[i] = (<Ball key={i} positionProp={[tempHoopCord[0]*Math.cos(rotation.current),  tempHoopCord[1],  -tempHoopCord[0]*Math.sin(rotation.current)]} radius={(i/balls.length)*ballRad} opacity={i/balls.length}/>)
                }
            }
            setBalls(balls =>[...newBalls])}
            else{
                // ball set here
                setBalls(balls =>[...[<Ball key={0} positionProp={[ballCords[0]*Math.cos(rotation.current),ballCords[1],-ballCords[0]*Math.sin(rotation.current)]} radius={8} opacity={1}/>]])
            }
        }})
    return (
        <mesh>
            {balls}
        </mesh> 
    );
}

function BeadOnHoop({data, omega, simSpeed, paused, setTime, project, play, getData,id, trail, time}){
    const RADIUS = 150
    const rotation = useRef(0)
    const offset = useRef(0)
    const angle = useRef(0)
    const hoop = createRef(null)

    useFrame((state, delta)=>{
        
        if(!paused.current){
            angle.current = getData(id,time.current)
            time.current = time.current+(delta*simSpeed) 
            setTime(timer=>time.current)
            offset.current = delta*simSpeed*omega/180*Math.PI
            rotation.current = rotation.current+delta*omega*(simSpeed)/180*Math.PI
            hoop.current.rotation.y = rotation.current - offset.current*2
            
        }else{
            hoop.current.rotation.y = rotation.current - offset.current
        }
        if(play.current){
            time.current = 0
            setTime(timer=>0)
            rotation.current = 0;
            play.current=false
        } 
        })
    return (
        <mesh>
                <Balls angle={angle}id={id} getData={getData} trail ={trail} project ={project} rotation={rotation}  omega={omega} simSpeed={simSpeed} data = {data} time = {time} RADIUS={RADIUS} paused={paused}/>
                <Hoop hoop={hoop} RADIUS={RADIUS} paused={paused}/> 
        </mesh>
    );
}


export default function BeadCanvas({data, omega, simSpeed, paused, project, play, getData,id, trail}){
    const time = useRef(0)
    const [timer,setTime] = useState(0)
    //try moving Hoop and Balls into its own component so that useFrame syncronized
    return ( 
        <div style={{width: "350px", height: "350px"}}>
            <p>Time: {timer.toFixed(4)}</p>
            <Canvas camera={{fov:"25", position: [0,0,1000], near:".1", far:"100000", type:"PerspectiveCamera"}}>
                {/* <ambientLight intensity={.5} /> */}
                <pointLight position={[25,0,10000]} intensity={1.5}/>
                <BeadOnHoop time={time} setTime={setTime}trail ={trail} id={id} getData={getData} play={play} data={data} omega={omega} simSpeed={simSpeed} paused={paused} project={project}/>
            </Canvas>
            
        </div>
    );

}
