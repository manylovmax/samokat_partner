import React from "react";
import LogoPNG from "../assets/img/logo.png"

export default function Navbar() { 
   return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={LogoPNG} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#advantages">Преимущества</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#calc">Калькулятор дохода</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">Ответы на вопросы</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#application-form">Оставить заявку</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}