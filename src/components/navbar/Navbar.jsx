import "./navbar.scss";
import { LinkedIn, GitHub, EmailOutlined } from "@material-ui/icons"

export default function navbar() {
    return (
        <div className="navbar" id="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="logo"> &gt; welcome to the wired<span id="cursor"> █</span> </div>
                </div>
                <div className="center">
                    <img src={require('../../assets/mobiousIcon.gif').default} style={{height: "50%", width: "50%"}} alt="Love Lain" title="L̳͈͉̅̊O̵̷̪̰ͩ͆ͅV̷̬̈ͫ͢͢͝E̸̖̪̱͚ͨ̀͜ L̳͈͉̅̊Ȧ̶̵̗̳I̶̴̗̗̦͍ͨͭ̉͢͟N̰̜͉͔ͬ̽͢"/>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/cody-sheets-6a57b4204/" className="icon"><LinkedIn />LinkedIn</a>
                    </div>
                    <div className="itemContainer">
                        <a href="mailto:gmhlg@live.com" className="icon"><EmailOutlined />Email</a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/sabishii-bit" className="icon"><GitHub />Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
