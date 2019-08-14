import React, { Component } from 'react'
import '../components/footer.css';

 class footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
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
            </footer>
        )
    }
}
export default footer;