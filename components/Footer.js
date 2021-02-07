import React, { Component } from 'react'
import style from './Footer.module.css';

export default class Footer extends Component {

    socialLinks; webUrl; webText; webName

    constructor(props) {
        super(props);
        if(!!(props?.socialLinks)){
            this.socialLinks = props.socialLinks;
        }
        if(!!(props?.websiteText)){
            this.webText = props.websiteText;
        }
        if(!!(props?.websiteName)){
            this.webName = props.websiteName;
        }
        if(!!(props?.websiteUrl)){
            this.webUrl = props.websiteUrl;
        }
        this.state = {
            
        }
    }

    render() {
        return (
            <div className={style.containerFooter}>
                { this.socialLinks && (
                    <div className={style.socialLink}>
                    <a href={this.socialLinks.facebook}><i className="ion-social-facebook"></i></a>
                    <a href={this.socialLinks.github}><i className="ion-social-github"></i></a>
                    <a href={this.socialLinks.instagram}><i className="ion-social-instagram"></i></a>
                    <a href={this.socialLinks.linkedin}><i className="ion-social-linkedin"></i></a>
                    <a href={this.socialLinks.google}><i className="ion-ios-email"></i></a>
                </div>
                )}
                { this.webName && this.webText && (
                    <div className={style.copyright}>
                    <span className={style.nameLabel}>&#169; &nbsp;{this.webName}</span> 
                    <a className={style.nameLabel} href={this.webUrl}>{this.webText}</a>
                    </div>
                )}
            </div>
        )
    }
}

