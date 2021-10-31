import React from 'react'
import './myprojects.scss'

class Myprojects extends React.Component {
    constructor() {
        super();
        this.stepForward = this.stepForward.bind(this);
        this.stepBackward = this.stepBackward.bind(this);

        const img0 = require('../../../assets/project1.gif').default;
        const img1 = require('../../../assets/project2.gif').default;
        const img2 = require('../../../assets/project3.gif').default;

        const desc0 = 'SkyMail 3000: A semester-wide coding project meant as an introduction to the use of an external API, employing various software design patterns and the use of trigonometry to create rudimentary enemy AI, as well as functional player controls. The UI consists of a timer, fuel, lives, HP and player heading (calculated in degrees).';
        const desc1 = 'Autumn Plains: A work-in-progress personal project intended for teaching myself the basics of 3D programming using Three.js and server-client communication in a game setting using Node.js and Socket.io. As of right now, the project has an obj file imported for the game world, and progress has begun to create the engine, which will focus on giving the player the ability to interact with the world in first-person.';
        const desc2 = 'Functional Restful API: A short side project I built to teach myself the basics of working with REST and how to work with Node.js and Express to create an API. Parses JSON data through http requests and contains functionality for GET, PUSH, POST and DELETE requests.';

        this.state = {
            index: 0,
            imgList: [img0, img1, img2],
            desc: [desc0, desc1, desc2]
        };
    } 

    stepForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState ({
                index: 0
            })
        
        } else {
            this.setState ({
                index: this.state.index + 1
            })
        }
    }

    stepBackward() {
        if (this.state.index - 1 === -1) {
            this.setState ({
                index: this.state.imgList.length - 1
            })
        } else {
            this.setState ({
                index: this.state.index - 1
            })
        }
    }

    render() {
        return (
            <div className="myprojects" id="myprojects">
                <div className="banner">Projects</div>
                <div className="wrapper">
                    <div className="left-button" onClick={this.stepBackward}>
                        &lt;&lt;
                    </div>
                    <div className="content">
                        <img src={this.state.imgList[this.state.index]} alt='' />
                    </div>
                    <div className="right-button" onClick={this.stepForward}>
                        &gt;&gt;
                    </div>
                </div>
                <div className="description" id="descbox">
                    {this.state.desc[this.state.index]}
                </div>
            </div>
        )
    }
}

export default Myprojects;
