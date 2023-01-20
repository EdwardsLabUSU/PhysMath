export class simData {
    constructor(interval){
        this.data = [];
        this.interval = interval;
    }
    
    insert(time, xdot, ydot, vxdot, vydot){
        this.data.push(new dataPoint(time, xdot, ydot, vxdot, vydot));
    }

    getVelocity(time){
        let dataIndex = (time/this.interval).toFixed(0);
        if (dataIndex > this.data.length-1) {
            dataIndex = this.data.length-1;
            }
        return this.data[dataIndex].xdot;
    }

    getVelocity(time){
        let dataIndex = (time/this.interval).toFixed(0);
        if (dataIndex > this.data.length-1) {
            dataIndex = this.data.length-1;
            }
        return this.data[dataIndex].ydot;
    }

    getVelocity(time){
        let dataIndex = (time/this.interval).toFixed(0);
        if (dataIndex > this.data.length-1) {
            dataIndex = this.data.length-1;
            }
        return this.data[dataIndex].vxdot;
    }

    getVelocity(time){
        let dataIndex = (time/this.interval).toFixed(0);
        if (dataIndex > this.data.length-1) {
            dataIndex = this.data.length-1;
            }
        return this.data[dataIndex].vydot;
    }
    
}

class dataPoint {
    constructor(time, xdot, ydot, vxdot, vydot){
        this.time =time;
        this.xdot = xdot;
        this.ydot = ydot;
        this.vxdot = vxdot;
        this.vydot = vydot;
    }
}
