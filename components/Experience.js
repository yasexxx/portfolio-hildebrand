import React, { Component } from 'react'
import expStyle from './Experience.module.css';

export default class Experience extends Component {
    propsObj;
    constructor(props) {
        super(props);
        this.propsObj = props.experience;
        this.state = {
             
        }
    }

    render() {
        return (
            <div className={expStyle.containerExperience}>
                <strong>{this.propsObj?.company_name}</strong><br/>
                <span className={expStyle.numYear}>{this.propsObj?.start_year} - {this.propsObj?.end_year}</span>
                    { this.propsObj?.experience_json.map( (exp, index) => (
                        <li key={this.propsObj?.end_year+exp?.description+index} >{exp?.description}</li>
                    ))}
            </div>
        )
    }
}
