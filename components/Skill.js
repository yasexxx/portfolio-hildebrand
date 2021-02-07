import React, { Component } from 'react'

export default class Skill extends Component {

    propsSkill;
    strPercent;
    constructor(props) {
        super(props)
        this.propsSkill = props.skill;
        this.strPercent = (this.propsSkill?.progress).toString();
        this.state = {
        }
    }
    render() {
        const customStyle = { 
            width: `${this.strPercent}%`, 
            background: `${this.propsSkill.bar_color}`,
            color: `${this.propsSkill.text_color}`
        };
        
        return (
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={customStyle} aria-valuenow={this.strPercent} aria-valuemin="0" aria-valuemax="100">
                        <strong>{this.propsSkill?.name}</strong>
                        <span>{this.propsSkill?.score}/5</span>
                    </div>
                </div>
        )
    }
}
