import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <div class="title-box">
                    <p id="lab-title">DynamicsLab</p>
                </div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/bead">Bead on Hoop Simulation</Link>
                        </li>
                        <li>
                        <Link to="/drag">Projectile Air Drag</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Home;