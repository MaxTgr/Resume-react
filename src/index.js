import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as data from './data.json';

// creates the main link buttons on the first page
function SocialButtons(){

  let ret = [];

  // gets the data from the json and sends to react
  data.socialButtonsData.forEach((e, index) => {
      ret.push(<button key={index} className={e.style}><a href={e.link}><i className={e.icon}></i></a></button>);
  });

  return ret;
  
}

function Skills(){

  let ret = [];

  data.skillsData.forEach(e => {
    ret.push(
      <div>
        <span className="tag is-info">{e.area}</span>
        <p>{e.skillList}</p>
      </div>
    );
  });

  return ret;

}

class ProjectCards extends Component{

  renderIcons(index){
    let icons = [];

    data.projectCardsData[index].icons.forEach((e, insideIndex) => {
      icons.push(<i key={insideIndex} className={e}></i>);
    });

    return icons;
  }

  renderButtons(index){
    let buttons = [];

    data.projectCardsData[index].links.forEach((e, insideIndex) => {
      buttons.push(<a key={insideIndex} href={e.link} className="card-footer-item">{e.name}</a>);
    });
    
    return buttons;
  }

  render(){
    let ret = [];

    data.projectCardsData.forEach((e, index) => {
      ret.push(
      <div key={index} className="column is-one-fifth">
        <div className="card has-text-centered">
          <header className="card-header">
            <p className="card-header-title">
              {e.title}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {e.content}
              <br/><br/>
              <h1>{this.renderIcons(index)}</h1>
            </div>
          </div>
          <footer className="card-footer">
            {this.renderButtons(index)}
          </footer>
        </div>
      </div>)
    });

    return ret;
  }

}

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
        <section className="hero is-light is-bold is-medium">
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
              <div id="social-links" className="is-size-3-touch is-size-1-desktop">
                <SocialButtons />
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-info is-large">
          <div className="hero-body columns">
            <div className="is-one-third column">
                <article className="message is-link">
                  <div className="message-body">
                    <h1 className=" is-link is-size-3-touch is-size-1-desktop">Sobre:</h1>
                    <p>Programador a mais de 2 anos, uso no meu dia a dia em meus projetos mais recentes: nodejs, apis online e databases, amo desenvolvimento mobile, ja fiz 2 apps um deles na play store com mais de 100 downloads, entre meus projetos recentemente terminados tenho 1 chatbot para telegram e tambem um app desktop em electron.<br/><br/>Atualmente me foco estudando maneiras de testar minhas skills, tenho um app em fase de planejamento e um jogo mobile para ser lançado em dezembro!</p>
                  </div>
                </article>
            </div>
            <div className="is-one-third column">
              <article className="message is-link">
                <div className="message-header">
                  <p>Skills</p>
                </div>
                <div className="message-body">
                  <Skills />
                </div>
              </article>
            </div>
            <div className="is-one-third column">
              <iframe id="spotify-frame" title="spotify" src="https://open.spotify.com/embed/user/thefirstmax/playlist/1bl5ohKjwbTnEp0v1UYM5U" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        </section>
        <section className="hero is-link is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-size-3-touch is-size-1-desktop">
                Projetos
              </h1>
            </div>
            <br/>
            <div className="columns">
              <ProjectCards />
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              Made with <i className="fas fa-heart"></i> by <a href="http://github.com/maxtgr">MaxTgr</a> with Bulma and React
            </p>
            <a href="https://bulma.io">
              <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"/>
            </a>
          </div>
        </footer>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default App;
