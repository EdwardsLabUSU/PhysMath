import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'


function Hoop ({radius, position, rotation, omega, simSpeed}) {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta;
        rotation(ref.current.rotation.y);
        //console.log(ref.current.rotation.y)
    })

    return (
        <mesh
          ref={ref}>
          <torusGeometry args={[150,3,16,50,2*Math.PI]}/>
          <meshBasicMaterial color="rgb(68, 170, 136)"  />
        </mesh>
      )
}
function Ball ({positionProp, opacity, radius, rotation}){
    const ref = useRef(null);
    const [position, setPos] = useState(positionProp)
    //useFrame((state, delta) => (setPos([150*Math.cos(rotation),150*Math.sin(rotation),-150*Math.sin(rotation)])))
    return(
        <mesh
            ref={ref}
            position={positionProp}
            opacity={opacity}>
            <sphereBufferGeometry attach='geometry' args={[radius,24, 24]} />
            <meshStandardMaterial attach='material' color={'red'}/>
        </mesh>
    );
    
}
function Balls({rotation}){
    const ref = useRef(null);
    let createBalls = []
    const [cords, setCords] = useState(Array(20).fill([0,0,0]))
    for (let i = 0; i < 20; i++){
        createBalls.push(<Ball key={i} positionProp={[0,0,0]} radius={i/20*6} opacity={i/20} rotation={rotation}/>)
    }
    const [balls, setBalls] = useState(createBalls)
    useFrame((state, delta) => { //move this to a web worker?
        let tempCords = cords
        tempCords.push([150*Math.cos(rotation),0,-150*Math.sin(rotation)])
        tempCords.shift()
        setCords(cords => [...tempCords])
        let newBalls = []
        for (let i = 0; i < balls.length; i++){
            newBalls[i] = (<Ball key={i} positionProp={cords[i]} radius={i/20*6} opacity={i/20} rotation={rotation}/>)
        }
        setBalls(balls =>[...newBalls])
        })
    return (
        <mesh>
            {balls}
        </mesh>
    );
}

export default function BeadCanvas(){
    const [rotation, setRotation] = useState(0)
    return (
        <div style={{width: "500px", height: "500px"}}>
            <Canvas camera={{fov:"25", position: [0,0,1000], near:".1", far:"100000", type:"PerspectiveCamera"}}>
                <ambientLight intensity={.5} />
                <pointLight position={[0,0,10000]} intensity={2}/>
                <Hoop rotation={setRotation}/>
                <Balls rotation={rotation}/>
            </Canvas>
        </div>
    );

}
