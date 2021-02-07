import React, { Component } from 'react'
import educationStyle from './EducationList.module.css';

export default class EducationList extends Component {
    props;
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <p className={educationStyle.containerEdu}>
                {this.props.education?.degree}<br/>
                <a href={this.props.education?.university_url}>{this.props.education?.university}</a> , 
                <span> {this.props.education?.year}</span>
            </p>
        )
    }
}
