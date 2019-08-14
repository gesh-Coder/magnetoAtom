import React, { Component } from 'react'
import slide_01 from '../img/main slider/main_slider_01.jpg';
import slide_02 from '../img/main slider/main_slider_02.jpg';

 class cenimaSlid extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid">
                <div className="row">
                        <div id="carouselmainslider" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselmainslider" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselmainslider" data-slide-to="1"></li>
                                <li data-target="#carouselmainslider" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={slide_01} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={slide_02} alt="Second slide" />
                                </div>
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={slide_01} alt="First slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselmainslider" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselmainslider" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                </div>
            </div>
 
            </div>
        )
    }
}
export default cenimaSlid;