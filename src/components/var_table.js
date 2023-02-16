import React from 'react'

export default function VarTable({data, setVals, arr}){
    //const jsonObj = JSON.parse(data)
    //const varData = new Map(Object.entries(this.props.json));
    //setVals(data)
    
    const DisplayData=data.map(
        (info, index)=>{
            return(
                <tr>
                    <td class = 'varCol'>{info.display} ({info.name})</td>
                    <td><input defaultChecked={info.checked} type={info.type} id={info.id} name={info.id} defaultValue={info.val} onChange={
                        (e) => {
                            let newArr = arr;
                            //for (let i = 0; i < arr.length; i++){
                            //     if (e.target.id === arr[i].split(":")[0]){
                                    if (e.target.value === 'true' || e.target.value === 'false'){
                                        newArr[index] = `${e.target.checked}`
                                    } else{
                                        newArr[index] = e.target.value                     
                                    }
                            //         console.log(newArr[i])
                            //     }
                            // }
                            //newArr[index] = e.target.value
                            setVals(arr => [...newArr])
                        }}/></td>
                    <td>{info.units}</td>
                </tr>
            )
        }
    )
    
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Values</th>
                    <th>Input</th>
                    <th>Units</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
}