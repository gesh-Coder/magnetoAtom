import React, { Component } from 'react';
import FilmSlider from '../filmSlider';
import leftArrow from '../../img/Prev_slide_multi.png';
import rightArrow from '../../img/Next_slide_multi.png';
import yLogo from '../../img/youtube_logo.png';
import fLogo from '../../img/French_tv.png';
import sliderImg_01 from '../../img/img_01.jpg';
import PhotoImg from '../../img/photo_img.png';
import AwrardImg from '../../img/Awrard_img.png';

class tvFilm extends Component {
    render() {
        return (
<div className="wrapper">
<main>
    <div className="container-fluid">
        <div className="row">
            <FilmSlider/>
        </div>
        <div className="row">
            <div className="col">
                <div className="magPtitle text-center">
                    <h1 className="display-5">Syrie,<br /> le cri étouffé</h1>
                    <h3>
                        <strong>
                            Manon Loizeau
                        </strong>
                    </h3>
                    <hr />
                    <h4>DOCUMENTAIRE | 82 mn | ARTE | 2017</h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-lg-6 col-md-12">
                <p>
                    C’est une plainte. Une plainte étouffée, mais assourdissante. Un cri silencieux dont les
                    soubresauts déchirent les murs des prisons, des sous-sols, des anti chambres de la mort.
                    C’est le cri des femmes syriennes violées depuis six ans, des geôles de Bachar al Assad
                    à celles de Daech.
                </p>
                <div className="mt-2 mb-3 d-flex justify-content-center">
                    <h1 className="display-6 text-center ">
                        Un crime contre l’humain<br /> ignoré de tous.
                    </h1>
                </div>
            </div>
            <div className="col-md-3">

            </div>
        </div>
        <div className="row">
            <div className="col-lg-3  col-md-12 d-flex justify-content-center mt-3 mb-3">
                <img className="img-fluid photoImg mt-3 mb-3" src={PhotoImg} alt="" />
            </div>
            <div className="col-lg-6  col-md-12">
                <p>
                    Un crime organisé, réfléchi car il est fondé sur l’un des tabous les mieux ancrés dans la
                    société traditionnelle syrienne et il joue sur le silence des
                    victimes, convaincues de risquer le rejet par leur propre famille, voire une
                    condamnation à mort. Terrible double peine de milliers de femmes syriennes enfermées
                    dans la solitude de leur douleur muette, se sentant « coupables d’être victimes ».
                </p>
                <p>
                    Le viol comme arme de guerre en Syrie est aussi le crime le plus tu. C’est un moyen pour
                    détruire non seulement la femme et son identité, mais aussi pour briser sa famille, son
                    clan, et toute forme de résistance.
                </p>
                <div className="mt-2 mb-3 d-flex justify-content-center">
                    <h1 className="display-6 text-center ">
                        Comment en Syrie<br /> le corps de la femme est devenu<br /> territoire de guerre.
                    </h1>
                </div>
                <p>
                    C’est la question que soulève ce film en donnant la parole à des femmes jusque-là emmurées
                    dans la honte et le silence. Des témoignages
                    rares, exceptionnels, bouleversants.
                </p>
            </div>
        </div>
        <div className="row">
            <hr className="mt-4 mb-4 d-flex justify-content-center" />
        </div>
    </div>
    <div className="container mt-3 mb-3">
        <div className="row serviceIteam">
            <div className="col-sm">
                <h4 className="text-center my-3">EXTRAIT</h4>
                <img className="img-fluid" src={sliderImg_01} />
            </div>
            <div className="col-sm">
                <h4 className="text-center my-3">EXTRAIT</h4>
                <img className="img-fluid" src={sliderImg_01} />
            </div>
            <div className="col-sm">
                <h4 className="text-center my-3">EXTRAIT</h4>
                <img className="img-fluid" src={sliderImg_01} />
            </div>
        </div>
        <div className="row mt-3 mb-3 MgAuthor">
            <div className="col-4 d-none d-sm-block ">

            </div>
            <div className="col-md-6 col-xs-12 align-self-center">
                <div className="mAuthor">
                    <h5 className="px-xs-2 text-left">
                        <strong>
                            Syrie, le cri étouffé
                        </strong>
                    </h5>
                    <p className="px-xs-2 text-left"> Un film de Manon Loizeau
                        <br />Montage : Mathieu Goasguen
                        <br />Écrit par : Manon Loizeau et Annick Cojean
                        <br />Production : Magneto Presse
                        <br />Durée : 82 min
                        <br />Diffusé le Mardi 12 Décembre à 22h25 sur France 2
                    </p>
                </div>
            </div>
        </div>
        <div className="awardHeader">
            <hr />
            <span className="d-flex justify-content-center mb-4 mt-3">
                <img src={AwrardImg}/> </span> 
        </div>
                <div className="row">
                    <div className="col-3 d-none d-sm-block"></div>
                    <div className="col-md-6 col-xs-12 align-self-center awardsBlock">
                        <p>
                            <strong>
                                Grand Prix de l’Organisation mondiale contre la torture (OMCT) Festival du Film et
                                Forum
                                International sur les Droits Humains de Genève 2017
                            </strong>
                            <br />
                            <strong> • </strong><br />
                            <strong>Mention spéciale au 69ème Prix Italia </strong><br />
                            <strong> • </strong><br />
                            <strong>Prix Leipziger Ring (prix du public) au festival DOK Leipzig </strong><br />
                            <strong> • </strong><br />
                            <strong> Grand Prix Enjeux méditerranéens – PriMed 2017 </strong><br />
                            <strong> • </strong><br />
                            <strong>Mention spéciale pour le prix EDWARD SNOWDEN XVe festival International Signos
                            de la Noite,
                            à Lisbonne </strong><br />
                            <strong> • </strong><br />
                            <strong> Prix spécial du jury Compétition internationale + de 40 min FIGRA 2018 –
                                Saint-Omer</strong><br />
                        </p>
                    </div>
                </div>
        <hr />
        <div className="row">
            <div className="col-3 d-none d-sm-block"></div>
            <div className="col-md-6 col-xs-12 align-self-center PgSoLink">
                <h5 className="text-center mt-3">LINKS</h5>
                <ul className="d-flex justify-content-around">
                    <li><a href="#"> <img src={yLogo} /><span>YouTube</span></a></li>
                    <li><a href="#"> <img src={fLogo} /><span>French tv</span></a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        
        <div id="mixedSlider" className="my-3">
            <h5>Relate</h5>
            <div className="MS-content">
                <div className="item">
                    <div className="imgTitle">
                        <img src={sliderImg_01} alt="" />
                    </div>
                    <h6 className="blogTitle">titre 1</h6>
                </div>
                <div className="item">
                    <div className="imgTitle">
                        <img src={sliderImg_01} alt="" />
                    </div>
                    <h6 className="blogTitle">titre 2</h6>
                </div>
                <div className="item">
                    <div className="imgTitle">
                        <img src={sliderImg_01} alt="" />
                    </div>
                    <h6 className="blogTitle">titre 3</h6>
                </div>
                <div className="item">
                    <div className="imgTitle">
                        <img src={sliderImg_01} alt="" />
                    </div>
                    <h6 className="blogTitle">titre 4</h6>
                </div>
                <div className="item">
                    <div className="imgTitle">
                        <img src={sliderImg_01} alt="" />
                    </div>
                    <h6 className="blogTitle">titre 5</h6>
                </div>

            </div>
            <div className="MS-controls">
                <button className="MS-left"><img className="img-fluid" src={leftArrow} /></button>
                <button className="MS-right"><img className="img-fluid" src={rightArrow} /></button>
            </div>
        </div>
    </div>
</main>
</div>
        )
    }
}
export default tvFilm;