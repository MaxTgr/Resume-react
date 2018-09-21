import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  openBurger(){
    let burgerAnim = document.querySelector(".navbar-burger");
    let menu = document.querySelector(".navbar-menu");
    burgerAnim.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  }

  render() {
    return (
      <section>
        <section className="hero is-light is-bold is-large">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <h1 className="title">Portfólio</h1>
                  </a>
                  <span className="navbar-burger burger" onClick={() => this.openBurger()} data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                      Inicio
                    </a>
                    <a className="navbar-item">
                      Sobre
                    </a>
                    <a className="navbar-item">
                      Projetos
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <div>
                <img src="./Tiger Tail.png" width="100rem" alt="logo"/>
                <h1 className="title is-size-3-touch is-size-1-desktop">
                  Raran "Max" C.
                </h1>
              </div>
              <p className="subtitle is-size-5-touch is-size-3-desktop">
                Desenvolvedor fullstack e mobile.
              </p>
              <div>
                <a>

                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">
                Title 1
              </h1>
              <p className="subtitle is-3">
                Subtitle
              </p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default App;
