import React, { Component } from 'react'
import TVCatSlider from '../tvCatSlider';

 class tvCategory extends Component {
    render() {
        return (
            <div className="wrapper">
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <TVCatSlider/>
                    </div>
    
                <div className="row">  
                    <div className="container-fluid tvFtitle">
                        <div className="container">
                            <a  href="/mag_atom/tv-film.html">
                                <h3>Title one_rollover</h3>
                                <p>Enquête sur le suicide d’une jeune gendarme à Lyon. “Merci au colonel G. ce connard !”</p>
                                <h5>2011 | 26 mn | Xavier Deleu</h5>
                            </a>    
                        </div>
                    </div>          
                </div>
                <div className="row">            
                <div className="container-fluid">
                <div className="row">
                    <nav className=" teliNav">
                        <ul>
                            <li>
                                <div className="container">
                                    <a href="">  Title two </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href="">  Title three </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> Title Four </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> Title Five </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href="">  Title Six </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> Title eight </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> Title nine </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            </div>
        </div>
        </main>
        </div>
        )
    }
}
export default tvCategory;