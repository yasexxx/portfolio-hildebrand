import React, { Component } from 'react'
import parse from 'html-react-parser';
import { Carousel } from 'react-responsive-carousel';
import * as showDown from 'showdown';

export default class Portfolio extends Component {


    propsPortfolio;
    constructor(props) {
        super(props)
        this.propsPortfolio = props.portfolios;
        this.state = {
        }

    }


    
    render() {
        const converter = new showDown.Converter();
        const t = converter.makeHtml(this.propsPortfolio.footer_description);
        const newData = t ? t : '<p></p>';

        return (
            <div className="card">
                <div className="card-header">
                    <strong>{this.propsPortfolio.header_title}</strong>
                </div>
                <div className=" card-body carousel-container">
                    <Carousel className="carousel-class">
                    {this.propsPortfolio.image_portfolios.map( (portfolio,li) => (
                            <div key={portfolio.id+123023}>
                            <img key={portfolio.name} className="custom-carousel" src={portfolio.image_url.url} alt={portfolio.name}></img>
                            <p key={portfolio.description} className="legend">{portfolio.description}</p>
                        </div>
                        ))}
                    </Carousel>
                </div>
                <div className="card-footer">
                    <span id="footerText"></span>
                    {parse(newData)}
                </div>
            </div>
        )
    }
}
