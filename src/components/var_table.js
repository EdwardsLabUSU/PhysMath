import React from 'react'

export default function VarTable({data, setVals, arr, reDraw}){
    //const jsonObj = JSON.parse(data)
    //const varData = new Map(Object.entries(this.props.json));
    //setVals(data)
    
    const DisplayData=data.map(
        (info, index)=>{
            return(
                <tr>
                    <td className = 'varCol'>{info.display} ({info.name})</td>
                    <td><input onBlur={reDraw}defaultChecked={info.checked} type={info.type} id={info.id} name={info.id} defaultValue={info.val} onChange={
                        (e) => {
                            let newArr = arr.current;
                            //for (let i = 0; i < arr.length; i++){
                            //     if (e.target.id === arr[i].split(":")[0]){
                                    if (e.target.value === 'true' || e.target.value === 'false'){
                                        newArr[index] = e.target.checked
                                    } else{
                                        newArr[index] = Number(e.target.value)                     
                                    }
                                     console.log(index)
                            //     }
                            // }
                            //newArr[index] = e.target.value
                            setVals.current=newArr
                        }}/></td>
                    <td dangerouslySetInnerHTML={{__html: `${info.units}`}}></td>
                </tr>
            )
        }
    )
    
    return(
        <div>
            <table className="table table-striped">
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