import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { Input } from '@mui/material';




export default function VarTable({data, setVals, arr, reDraw}){
    //const jsonObj = JSON.parse(data)
    //const varData = new Map(Object.entries(this.props.json));
    //setVals(data)
    
    const DisplayData=data.map(
        (info, index)=>{

          const handleInputChange = (e) => {
            let newArr = arr;
                    if (info.id === 'omegaRads'){
                      newArr['omega'] = Number(e.target.value) * 57.2958
                      
                      
                    } else if (info.id === 'omega'){
                      newArr['omegaRads'] = Number(e.target.value) / 57.2958
                      
                      
                    }
            //for (let i = 0; i < arr.length; i++){
            //     if (e.target.id === arr[i].split(":")[0]){
                    if (e.target.value === 'true' || e.target.value === 'false'){
                        newArr[info.id] = e.target.checked
                    } else{
                        newArr[info.id] = Number(e.target.value)                     
                    }
                    console.log(index)
            //     }
            // }
            //newArr[index] = e.target.value
            // setVals.current=newArr
            setVals(arr => ({...newArr}))
            // console.log(e)
  }
            return(
                <tr>
                    <td className = 'varCol' data-toggle="tooltip" data-placement="right" title={info.tooltip}>{info.display} {info.name}</td>
                    
                    <td>{info.type === 'range' ? 
                    <Box sx={{ width: 250 }}>
                    <Grid container spacing={2} alignItems="center">
                      
                      <Grid item xs>
                        <Slider
                        value = {arr[info.id]}
                          onBlur={reDraw}
                          onChange={handleInputChange}
                          aria-labelledby="input-slider"
                          min={Number(info.min)}
                          max ={Number(info.max)}
                        />
                      </Grid>
                      <Grid item>
                        <Input
                          value={arr[info.id]}
                          size="small"
                          onBlur={reDraw}
                          onChange={handleInputChange}
                          inputProps={{
                            step: 1,
                            min: Number(info.min),
                            max: Number(info.max),
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                            : <input min={info.min} max = {info.max} onBlur={reDraw}defaultChecked={info.checked}  type={info.type} id={info.id} name={info.id} defaultValue={info.val} onChange={
                              handleInputChange}/>}</td>
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
                    <th>Parameters</th>
                    <th>Value</th>
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