import React, { Component } from 'react';
import TeliSlider from '../teliSlider';
import '../../components/Page_component/television.css';

class television extends Component {
    render() {
        return (
            <React.Fragment>
                <TeliSlider></TeliSlider>
                <div className="container-fluid">
                    <div className=" row">
                     <nav className="  teliNav">
                        <ul>
                            <li>
                                <div className="container">
                                    <a href=""> portraits </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> investigation </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> histoire & politique </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> nature & découverte </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> art & culture </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> société </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> en développement </a>
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

export default television;