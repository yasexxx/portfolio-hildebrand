import React, { Component } from 'react';
import reactDom from 'react-dom';
import Link from 'next/link';

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        this.handleScreen = this.handleScreen.bind(this);
        this.onShow = this.onShow.bind(this);
        this.state = {
            isScroll: false,
            isNavOpen: false
        }
    }
    
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScreen);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScreen);
    }

    handleScreen(event){
        const yScroll = window.scrollY;
        const screenWidth = window.innerWidth;
        if( yScroll >= 120 && screenWidth > 992 ){
            this.setState( {isScroll: true});
            return;
        } else if ( yScroll >= 71 && screenWidth < 992 ) {
          this.setState( { isScroll: true });
          return;
        }
        this.setState( {isScroll: false});
    }

    onShow(event){
        if((document !== undefined || document !== null) ){
            const nav = document.getElementById('navbarNav')
            reactDom.findDOMNode(nav).classList.remove("show");
        }
    }

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg bg-new ${this.state.isScroll ? 'navbar-dark' : 'navbar-light'}`}>
                    <div className={ `${this.state.isScroll ? 'lol' : ''} ${'container-fluid'}` }>
                      <Link href="/">
                        <a className="logo-link navbar-brand"><img src={`/img/logo.png`} alt="Hildebrand Logo"/><span>Hildebrand</span></a>
                      </Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ul">
                          <li className="nav-item" onClick={ this.onShow}>
                            <a className="nav-link active" aria-current="page" href="#about">About</a>
                          </li>
                          <li className="nav-item" onClick={ this.onShow}>
                            <a className="nav-link" href="#resume">Resume</a>
                          </li>
                          <li className="nav-item" onClick={ this.onShow}>
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                          </li>
                          <li className="nav-item" onClick={ this.onShow}>
                            <a className="nav-link" href="#contact" tabIndex="-1">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
            </div>
        )
    }
}

