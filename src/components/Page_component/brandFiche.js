import React, { Component } from 'react'
import TVCatSlider from '../tvCatSlider';
import img_01 from '../../img/img_01.jpg';

 class brandFiche extends Component {
    render() {
        return (
<div className="wrapper">
        <main>
            <div className="container-fluid">
                <div className="row">
                <TVCatSlider/>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="magPtitle text-center">
                            <h1 className="display-5">Clarins</h1>
                            <hr />
                            <h4>2018 / 2019</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 offset-md-3">
                        <h5 className="pgTtitle my-3">LE CONTEXTE</h5>
                        <p>
                            La direction de la communication internationale de CLARINS souhaitait mettre en valeur les
                            ingrédients naturels contenus dans ses produits et l’innovation scientifique des
                            laboratoires du groupe, n°1 des soins de beauté haut de gamme en Europe.
                        </p>
                    </div>
                    <div className="row">
                        <hr className="mt-4 mb-4 d-flex justify-content-center" />
                    </div>
                </div>
                <div className="container mt-3 mb-3">
                    <div className="row serviceIteam">
                        <div className="col-md-4 offset-md-2 ">
                            <h4 className=" text-center my-3">L’ACEROLA</h4>
                            <img className="img-fluid" src={img_01}  alt="" />
                        </div>
                        <div className="col-sm-4">
                            <h4 className="text-center my-3">LES BIENFAITS DU CURCUMA</h4>
                            <img className="img-fluid" src={img_01}  alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 my-3 offset-md-3">
                            <h5 className="pgTtitle my-3">NOTRE PROPOSITION</h5>
                            <p>
                                Une collection de formats premium en 4K déclinée sur différents supports et différents
                                formats - retail, web, réseaux sociaux - retraçant l’origine de l’ingrédient naturel,
                                ses propriétés, ses utilisations locales et son utilisation dans les gammes de soin
                                CLARINS.
                            </p>
                        </div>
                        <div className="row">
                            <hr className="mt-4 mb-4 d-flex justify-content-center" />
                        </div>
                    </div>
                    <div className="row ">
                            <div className="col-lg-3 col-md-12 my-3 offset-md-3 movDetailList">
                                <ul>
                                    <li>DURÉE</li>
                                    <li>3 x 3'</li>
                                    <li>6 x 1'30</li>
                                    <li>5 x 45"</li>
                                    <li>2 x 30"</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12  my-3 movDetailList ">
                                <ul>
                                    <li>FORMATS</li>
                                    <li>horizontal</li>
                                    <li>vertical</li>
                                    <li>carré</li>
                                    <li>VF + VA</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
        )
    }
}


export default brandFiche;