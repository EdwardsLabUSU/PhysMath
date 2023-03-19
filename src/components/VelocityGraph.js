import React, { useState, useEffect, useRef} from 'react'
import * as d3 from "https://esm.run/d3";
import { invalidate } from '@react-three/fiber';
export default function VelocityGraph({ ball, data, dimensions, graphLen, type, update}){
    const svgRef = React.createRef()
    const { width, height, margin } = dimensions;
    const svgWidth = width + margin.left + margin.right;
    const svgHeight = height + margin.top + margin.bottom;
    const minYV = useRef(0);
    const maxYV = useRef(0);
    const draw = function () {
              //console.log(graphLen)
        
              const svg = d3.select(svgRef.current)
              svg.selectAll("*").remove()
          svg.append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        //Read the data
            const minY = d3.min(data.current.data, (d) => d.velocity)
            const maxY = d3.max(data.current.data, (d) => d.velocity)
            minYV.current = minY
            maxYV.current = maxY
            // Add X axis --> it is a date format
            const x = d3.scaleLinear()
              .domain([0,graphLen.current])
              .range([ 0, width]);
            svg.append("g")
              .attr("transform", `translate(${margin.left}, ${height})`)
              .call(d3.axisBottom(x));
        
            // Add Y axis
            const y = d3.scaleLinear()
              .domain([minY, maxY])
              .range([ height, margin.top]);
            svg.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            //.attr("transform", "rotate(150)")
              .call(d3.axisLeft(y));
        
            
            // Add the line
            svg
              .append("path")
              .datum(data.current.data)
              .attr("fill", "none")
              .attr("stroke", "steelblue")
              .attr("stroke-width", 1.5)
              .attr("d", d3.line()
                .x(function(d) { return x(d.time) })
                .y(function(d) { return y(d.velocity) })
                )
              .attr("transform", `translate(${margin.left}, ${0})`)
            svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -(height/2))
            .attr("y", 30)
            .style("text-anchor", "middle")
            .style("font-size", "17px")
            .text("Velocity")
        
            svg.append("text")
            .attr("transform", "translate(" + (width/2) + "," + (height + 30) + ")")
            .style("text-anchor", "middle")
            .style("font-size", "17px")
            .text("Time (s)")
        
            svg.append("text")
            .attr("x", (height/2))
            .attr("y", 13)
            .style("text-anchor", "middle")
            .style("font-size", "13px")
            .text(`Velocity over Time: ${type} eqn`)
            if (!Number.isNaN(data.current.data[1].velocity)){
              d3.interval( () => {
                svg.selectAll("circle").remove();
                svg.selectAll("dot")
                .data([50,50])
                .enter().append("circle")
                  .attr("r", 3.5)
                  .attr("cx", x(ball.current.time)+margin.left)
                  .attr("cy", y(ball.current.velocity))
                  .attr("fill", "red")
                  .attr("stroke", "red")
                }, 5)
              }

    }
    useEffect(()=>{
      draw()
    },[update])
    

    return(
        <svg ref={svgRef} width={svgWidth} height={svgHeight} />
    );
}