import React from 'react'
import './aboutme.scss'

export default function Aboutme() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="banner">About Me</div>
                <div className="wrapper">
                    <div className="left">
                    </div>
                    <div className="right">
                    <img src={require('../../../assets/comp1.gif').default } style={{ height: '40%', width: '50%' }} alt='' />
                    <img src={require('../../../assets/comp2.gif').default } style={{ height: '30%', width: '40%' }} alt='' /><br />
                    My name is Cody Sheets. I am an undergraduate Computer Science student at CSU: Sacramento, on track to graduate in December
                    2021 with a Bachelor's of Science and certification for Information Assurance and Security.<br /><br />
                    My interest in computing manifested from a childhood fascination with finding glitches and memory editing my favorite
                    video games. I wanted to know more about how the underlying systems to these games functioned, which blossomed into
                    my decision to pursue an education focused on software engineering and to seek out a career that reflects my passions.<br /><br />
                    Gradually, as I've began to teach myself new languages and frameworks for working on personal projects; I've come to love 
                    the process of self-driven learning (outside of academia) as I begin to see more results in my progress to become a 
                    professional software engineer.<br /><br />
                    I'm currently looking for opportunities to develop and contribute in an interactive work environment. I am detail-focused,
                    creative, an active/fast-paced learner, and enthusiastic to discover new approaches to solving technical problems.
                    </div>
                </div>
        </div>
    )
}
