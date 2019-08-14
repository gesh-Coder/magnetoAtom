import React, { Component } from 'react'
import TVCatSlider from '../tvCatSlider';

 class brandClient extends Component {
    render() {
        return (
<div classNameName="wrapper">
        <main>
            <div classNameName="container-fluid">
                <div classNameName="row">
                <TVCatSlider/>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="magPtitle text-center">
                            <h1 className="display-5">LVMH</h1>
                            <hr />
                            <h4>Since 2018</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p>
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L’avantage du Lorem Ipsum sur un texte générique comme ‘Du texte. Du texte. Du texte.’ est qu’il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour ‘Lorem Ipsum’ vous conduira vers de nombreux sites qui n’en sont encore qu’à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d’y rajouter de petits clins d’oeil, voire des phrases embarassantes).
                        </p>
                    </div>
                </div>
                <div className="row">
                    <hr className="mt-4 mb-4 d-flex justify-content-center" />
                </div>
            </div>
            <div className="container-fluid">            
                <div id="mixedSlider" className="my-3">
                    <h5>Relate</h5>
                    <div className="MS-content">
                        <div className="item">
                            <div className="imgTitle">
                                <img src="img/img_01.jpg" alt="" />
                            </div>
                            <h6 className="blogTitle">titre 1</h6>
                        </div>
                        <div className="item">
                            <div className="imgTitle">
                                <img src="img/img_01.jpg" alt="" />
                            </div>
                            <h6 className="blogTitle">titre 2</h6>
                        </div>
                        <div className="item">
                            <div className="imgTitle">
                                <img src="img/img_01.jpg" alt="" />
                            </div>
                            <h6 className="blogTitle">titre 3</h6>
                        </div>
                        <div className="item">
                            <div className="imgTitle">
                                <img src="img/img_01.jpg" alt="" />
                            </div>
                            <h6 className="blogTitle">titre 4</h6>
                        </div>
                        <div className="item">
                            <div className="imgTitle">
                                <img src="img/img_01.jpg" alt="" />
                            </div>
                            <h6 className="blogTitle">titre 5</h6>
                        </div>
                    </div>
                    <div className="MS-controls">
                        <button className="MS-left"><img className="img-fluid" src="img/Prev_slide_multi.png" /></button>
                        <button className="MS-right"><img className="img-fluid" src="img/Next_slide_multi.png" /></button>
                    </div>
                </div>
            </div>
        </main>
    </div>
 
        )
    }
}

export default brandClient;