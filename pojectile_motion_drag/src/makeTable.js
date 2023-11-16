t = document.getElementById("vars");
vars = {
m:{val: "0.15", id: "m", name: "m", type: "text", units: "kg", display:"mass"},
 g:{val: "9.8", id: "g", name: "g", type: "text", units: "m/s<sup>2</sup>", display:"gravity"},
   c:{val: "0.0012", id: "c", name: "c", type: "text", units: "kg/m", display:"drag"},
    x:{val: "0", id: "x", name: "x<sub>0</sub>", type: "text", units: "m", display:"x"},
    y:{val: "1000", id: "y", name: "y<sub>0</sub>", type: "text", units: "m", display:"y"},
    vx:{val: "50", id: "vx", name: "v<sub>x0</sub>", type: "text", units: "m/s", display:"vx0"},
    vy:{val: "0", id: "vy", name: "v<sub>y0</sub>", type: "text", units: "m/s", display:"vy0"},
      simSpeed:{val: "0.3", id: "simSpeed", name: "simSpeed", type: "text", units: "", display:"simulation speed"},
       graphUpdateInterval:{val: ".005", id: "graphint", name: "graphInt", type: "text", units: "", display:"graph update interval"},
    };

html = "<table>";
for (const [key, value] of Object.entries(vars)) {
  html += `<tr><td class = 'varCol'>${value.display} (${value.name}): </td><td><input type=${value.type} id=${value.id} name=${value.id} value=${value.val} onBlur ="refresh()"></td><td>${value.units}</td>`;
}
html += "</table>";
t.innerHTML = html;
window.play = true;
// graphs = {thetaInput:{loc:"variableSim-theta",width:300,height:300,top:10,bottom:30,right:30,left:60,yDataIndex:1,xDomain:[],xRange:[],yDomain,yRange:[],title:"",xLabel:"",yLabel:""},
// thetaActual:{loc:"staticSim-theta"},//if values such as graphLen are changed, how are they supposed to change the graph? will the graph only be partially made and finished later? 
// velocityInput:{loc:"variableSim-velocity"},
// velocityActual:{loc:"staticSim-velocity"}}