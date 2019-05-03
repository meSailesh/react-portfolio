import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Avatar from '../profile.png';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="Landing-grid">
                <Cell col={12}>
                <img 
                src={Avatar}
                alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
                    <hr/>
                    <p>HTML/CSS | Bootstrap | React | Angular | Ionic | PHP | MySQL</p>

                    <div className="social-links">

                {/*Linked in */}
                <a href="https://www.linkedin.com/in/sailesh-dhakal/" target="_blank"  rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                 {/*Github */}
                 <a href="https://github.com/meSailesh/" target="_blank"  rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                 {/*Free codecamp */}
                 <a href="https://google.com" target="_blank"  rel="noopener noreferrer">
                <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                 {/*Youtube */}
                 <a href="https://google.com" target="_blank"  rel="noopener noreferrer">
                <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                </div>

                </div>
        
                </Cell>

                </Grid>
            </div>
        );
    }
}

export default LandingPage;