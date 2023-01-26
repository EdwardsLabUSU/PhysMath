t = document.getElementById("vars");
vars = {r:{val: ".1", name: "radius", id: "r", type: "text", units:"m"}, //add adnother attribute display name, to make compatible with both simulations
 g:{val: "9.8", name: "gravity", id: "g", type: "text", units:"m/s&#178;"},
  k:{val: "5.0", name: "friction", id: "k", type: "text", units:""},
   theta:{val: "5.0", name: "theta", id: "θ", type: "text", units:"degrees"},
    v:{val: "0.6", name: "velocity", id: "v", type: "text", units:"m/s"},
     omega:{val: "20", name: "omega", id: "ω", type: "text", units:"radians/s"},
      simSpeed:{val: "0.3", name: "simSpeed", id: "simulation speed", type: "text", units:"x"},
       graphUpdateInterval:{val: ".005", name: "graphint", id: "graph update interval", type: "text", units:"seconds"},
       graphLen:{val: "5", name: "graphlen", id: "graph record length", type: "text", units:"seconds"},
       project:{val: "true", name: "projection", id: "Project trail on hoop?", type: "checkbox", units:""},
       graphWrap:{val: "true", name: "wrap", id: "graph theta beyond 0-6.28", type: "checkbox", units:""},
       trailLen:{val: "100", name: "trailLen", id: "trail length", type: "text", units:""}

    };

html = "<table>";
for (const [key, value] of Object.entries(vars)) {
  html += `<tr><td class = 'varCol'>${value.name} (${value.id}): </td><td><input type=${value.type} id=${value.name} name=${value.id} value=${value.val} onBlur ="refresh()"></td><td>${value.units}</td>`;
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