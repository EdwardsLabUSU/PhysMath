t = document.getElementById("vars");
vars = {r:{val: ".1", id: "radius", name: "r", type: "text", units:"m", display:"radius"}, //add adnother attribute display name, to make compatible with both simulations
 g:{val: "9.8", id: "gravity", name: "g", type: "text", units:"m/s&#178;", display:"gravity"},
  k:{val: "5.0", id: "friction", name: "k", type: "text", units:"", display:"friction"},
   theta:{val: "5.0", id: "theta", name: "θ", type: "text", units:"degrees", display:"theta"},
    v:{val: "0.6", id: "velocity", name: "v", type: "text", units:"m/s", display:"velocity"},
     omega:{val: "20", id: "omega", name: "ω", type: "text", units:"radians/s", display:"omega"},
      simSpeed:{val: "0.3", id: "simSpeed", name: "simSpeed", type: "text", units:"x", display:"simulation speed"},
       graphUpdateInterval:{val: ".005", id: "graphint", name: "graphint", type: "text", units:"seconds", display:"graph update interval"},
       graphLen:{val: "5", id: "graphlen", name: "graphLen", type: "text", units:"seconds", display:"graph record length"},
       project:{val: "true", id: "projection", name: "projection", type: "checkbox", units:"", display:"Project trail on hoop?"},
       graphWrap:{val: "true", id: "wrap", name: "wrap", type: "checkbox", units:"", display:"graph theta beyond 0-6.28"},
       trailLen:{val: "100", id: "trailLen", name: "trailLen", type: "text", units:"", display: "trail length"}

    };

html = "<table>";
for (const [key, value] of Object.entries(vars)) {
  html += `<tr><td class = 'varCol'>${value.display} (${value.name}): </td><td><input type=${value.type} id=${value.id} name=${value.id} value=${value.val} onBlur ="refresh()"></td><td>${value.units}</td>`;
}
html += "</table>";
t.innerHTML = html;
document.getElementById("projection").checked = true;
document.getElementById("wrap").checked = true;
window.play = true;
// graphs = {thetaInput:{loc:"variableSim-theta",width:300,height:300,top:10,bottom:30,right:30,left:60,yDataIndex:1,xDomain:[],xRange:[],yDomain,yRange:[],title:"",xLabel:"",yLabel:""},
// thetaActual:{loc:"staticSim-theta"},//if values such as graphLen are changed, how are they supposed to change the graph? will the graph only be partially made and finished later? 
// velocityInput:{loc:"variableSim-velocity"},
// velocityActual:{loc:"staticSim-velocity"}}

//make airdrag like this, make a common, convert to react