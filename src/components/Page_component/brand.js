import React, { Component } from 'react'
import BrandSlider from '../brandSlid';
import '../../components/Page_component/brand.css';
import { Link }  from 'react-router-dom';
import addImg from '../../img/photo_add.JPG';


class brand extends Component {
    render() {
        return (
            <React.Fragment>
            <BrandSlider/>
            <div className="container-fluid">
                <div className=" row">
                    <nav className="teliNav">
                        <ul>
                            <li>
                                <div className="container">
                                    <Link to="/tvFilm" onClick = {this.onShowMenu}> films </Link>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> brand content </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> motion design </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href="">  captation live </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> programme court </a>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <a href=""> opération spéciale </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    </div>
                    <div  className="row my-3">
                        <div className="container">
                            <h6 className="text-left my-2">Ils nous ont fait confiance</h6>
                            <div className ="">

                            </div>
                        </div>
                    </div>
                    <div  className="row addressBar">
                        <div className="col-md-4 p-5">
                            <address>
                                <h6>contact</h6> <br/>
                                <stong>Juliette Bot</stong> <br/> 
                                <span>jbot.magneto@gmail.com</span> <br/>
                                <phone> +33 21 21 21 21 </phone>
                            </address>
                        </div>
                        <div className="col-md-3 addressIMG">
                            <img src={addImg}/>
                        </div>
                        <div className="col-md-5 p-5 addDisc">
                            <p className="text-left">
                            Diplômée d’un master en économie de la Saint Thomas University et de l’école de journalisme de Strasbourg, Juliette a commencé sa carrière en tant que journaliste à France 2 et à Culture Pub avant de devenir directrice Corporate et accompagner les directions de la communication de grands groupes comme Accor, Bouygues Telecom ou L’Oréal. Juliette est votre interlocutrice privilégiée.
                            </p>
                        </div>
                    </div>
            </div>
        </React.Fragment>
        )
    }
}

export default  brand;