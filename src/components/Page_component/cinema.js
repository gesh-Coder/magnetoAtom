import React, { Component } from 'react'
import CenimaSlider from '../cenimaSlid';
import { Link }  from 'react-router-dom';

class cinema extends Component {
    render() {
        return (
        <React.Fragment>
            <CenimaSlider/>
            <div className="container-fluid">
                <div className="row">
                    <nav className=" teliNav">
                        <ul>
                            <li>
                                <div className="container">
                                    <Link to="/tvCategory"> Monsieur </Link>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <Link  to=""> Un jour, ça ira </Link>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <Link to=""> en développement </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
export default  cinema;