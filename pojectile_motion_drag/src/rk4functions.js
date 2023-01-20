import { simData } from './simData.js';

export function updateVals(dt, variables, equations, useEval){
    //console.log(omega)
      const N = 4;
      let h = dt; 
      let t = 0.0;
      let y = [variables.xdot , variables.ydot,  variables.vxdot,  variables.vydot];
      let ynew = [];
      ynew = rk4(y,N,t,h,ynew,variables, equations, useEval);
      for(const index of y){
        ynew[index] = y[index];
      }
      return y;
    }


 export function getGraphData(variables, equations, useEval, graphLen, graphVals, time){
    
    const N = 4;
      let h = dt; 
      let t = time;
      let y = [variables.xdot , variables.ydot,  variables.vxdot,  variables.vydot];
      let ynew = [variables.xdot , variables.ydot,  variables.vxdot,  variables.vydot];
    while(t<graphLen){
        graphVals.insert(t,ynew[0],ynew[1],ynew[2],ynew[3]);
        ynew = rk4(y,N,t,h,ynew,variables, equations, useEval);
        for(const index of y){
          ynew[index] = y[index];
        }
        t = t + h;
    }
    return graphVals;
}
  
  function derivsEval(t,y,dydt, variables, equations){
    try{
      const xdot = globalThis.window.evaluatex(equations.xdot, {m:variables.m,
        g:variables.g,
        c:variables.c,
        x:variables.y[0],
        y:variables.y[1],
        vx:variables.y[2],
        vy:variables.y[3]}, {latex:true});

      dydt[0]= xdot({});
      } catch (err){
        //console.log(err);
        document.getElementById("error-output").innerHTML="[BAD OR NO EQUATION INPUTED]";
      }

      try{
        const ydot = globalThis.window.evaluatex(equations.ydot, {m:variables.m,
          g:variables.g,
          c:variables.c,
          x:variables.y[0],
          y:variables.y[1],
          vx:variables.y[2],
          vy:variables.y[3]}, {latex:true});

        dydt[0]= ydot({});
        } catch (err){
          //console.log(err);
          document.getElementById("error-output").innerHTML="[BAD OR NO EQUATION INPUTED]";
        }

        try{
          const vxdot = globalThis.window.evaluatex(equations.vxdot, {m:variables.m,
            g:variables.g,
            c:variables.c,
            x:variables.y[0],
            y:variables.y[1],
            vx:variables.y[2],
            vy:variables.y[3]}, {latex:true});
          dydt[0]= vxdot({});
          } catch (err){
            //console.log(err);
            document.getElementById("error-output").innerHTML="[BAD OR NO EQUATION INPUTED]";
          }

          try{
            const vydot = globalThis.window.evaluatex(equations.vydot, {m:variables.m,
              g:variables.g,
              c:variables.c,
              x:variables.y[0],
              y:variables.y[1],
              vx:variables.y[2],
              vy:variables.y[3]}, {latex:true});
            dydt[0]= vydot({});
            } catch (err){
              //console.log(err);
              document.getElementById("error-output").innerHTML="[BAD OR NO EQUATION INPUTED]";
            }

      return dydt;
  }

  function derivs(t, y, dydt, variables){
      dydt[0] = y[2];
      dydt[1] = y[3];
      dydt[2] = -(variables.c/variables.m)*(Math.sqrt(Math.pow(y[2], 2) + Math.pow(y[3], 2)))*(y[2])
      dydt[3] = -(variables.g)-(variables.c/variables.m)*(Math.sqrt(Math.pow(y[2], 2) + Math.pow(y[3], 2)))*(y[3])
      return dydt;
  }
  
  function rk4(y,N,x,h,ynew, variables, equations, useEval){
      let h6;
      let hh;
      let xh;
      let dym = [];
      let dyt = [];
      let yt = [];
      let dydx = [];
      let index;
      hh = h*0.5;
      h6 = h/6.0;
      xh=x+hh;
      dydx = useEval ?  derivsEval(x,y,dydx, variables, equations) : derivs(x,y,dydx, variables) ;
      
      for (index = 0; index <= N; index++){
          yt[index] = y[index]+hh*dydx[index];
      }
      dyt = useEval ?  derivsEval(xh,yt,dyt, variables, equations) : derivs(xh,yt,dyt, variables) ;
      
      for (index = 0; index <= N; index++){
          yt[index] = y[index]+hh*dyt[index];
      }
      dym = useEval ?  derivsEval(xh,yt,dym, variables, equations) : derivs(xh,yt,dym, variables);
      
      for (index = 0; index <= N; index++){
          yt[index] = y[index]+h*dym[index];
          dym[index] = dyt[index]+dym[index];
      }
      dyt = useEval ? derivsEval(x+h,yt,dyt, variables, equations) : derivs(x+h,yt,dyt, variables) ;
      
      for (index = 0; index <= N; index++){
          ynew[index]=y[index]+h6*(dydx[index]+dyt[index]+2.0*dym[index]);
      }
      for (index = 0; index <= N; index++){
          if (ynew[index] instanceof Number){
              ynew[index] = ynew[index].toFixed(4);
          }
      }
      //console.log(dydx);
      return ynew;
  }