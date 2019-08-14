import React, { Component } from 'react';
import '../components/header.css';
import mgMenubar from '../img/menu_exp.svg';
import searchIcon from '../img/Nav_Search.svg';
import mgPageLogo from '../img/logo.png';
import mglogo from '../img/mg_logo_Head.png';
import { Link }  from 'react-router-dom';


 class header extends Component {

    state = {
        showMenu:true,
        showSearch:true
    }
    onShowMenu= e => {
        this.setState({showMenu:!this.state.showMenu});
    };

    showInput= c =>{
        this.setState({showSearch:!this.state.showSearch});
    }
    render(){
        const { showMenu,showSearch } = this.state;
        return (
            <header>            
            <div className="navbar-fixed-top" role="navigation">
                <div className="navTopBar">
                <div className="container-fluid">
                     <div className="row ">
                        <div className="col-12 col-md-6 justify-content-left">
                            <div className="navMenu">                           
                                <span className="navBtn">                                                             
                                    <Link   to="/"  onClick = {this.onShowMenu}>
                                       <img className="menuExpand" src={mgMenubar} alt="" />
                                    </Link>          
                                    {showMenu ? (                         
                                       true ): (<div id="brand_logo"> 
                                            <img onClick = {this.onShowMenu} src={mglogo} className="Mglogo" alt=""/>
                                            <b className="pageLable">/{}</b>
                                    </div>)}
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 justify-content-end d-none d-sm-block">
                            <div id="MainSearch" className="float-right mb-3 mt-3 mr-5">
                                    <div class="input-group-append">
                            {showSearch ? ( <div className="input-group mb-3 mt-3">
                                    <input type="text" className="form-control mainSearchINP" placeholder="Search"/>                               
                                </div>  ) : null }                               
                                        <button class="btn MenuSearchBtn" type="submit" onClick = {this.showInput}>
                                            <img class="SeachBtn" src="img/Nav_Search.svg" />
                                        </button>
                                    </div>                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {showMenu ? ( 
                            <div className="container-fluid" >
                            <div className="row ">
                                <nav id="myNav" className="overlay">
                                <div className="navbg">
                                    <div className="row ">
                                    <ul className="overlay-content">
                                        <li>
                                            <Link to="/"  onClick = {this.onShowMenu}>
                                                <div className="container">
                                                    television
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="/Cinema" onClick = {this.onShowMenu}>
                                            <div className="container">
                                            cinema
                                            </div>
                                        </Link>
                                        </li>
                                        <li>
                                        <Link to="/brand" onClick = {this.onShowMenu}>
                                            <div className="container">
                                            brand
                                            </div>
                                        </Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className=" row">
                                    <div className="container">
                                        <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 align-left">
                                            <div className="brandBlock">
                                                <div className="row">
                                                    <a href=''>
                                                    <img className="FLogo " src={mgPageLogo} alt="" />
                                                    </a><br />
                                                </div>
                                                <div className="row">
                                                    <h2>telling stories since 2008</h2>
                                                </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="navFooter ">
                                    <div className="row">
                                    <div className="col-md-5 col-sm-12 d-flex justify-content-around">
                                        <ul className="socialIcon mt-3 mb-3 align-items-center">
                                            <li><a href="#"><i className="far fa-envelope"></i></a></li>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 col-sm-12 d-flex justify-content-around">
                                        <h2 className="mt-3">Qui sommes-nous?</h2>
                                    </div>
                                    <div className="col-md-2 col-sm-12 d-flex justify-content-around">
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary active">Fr</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Eng</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>                               
                                </nav>
                            </div>
                            </div>
                        ) : null}
          </div>
            </header>
        )
    }
}
export default header;