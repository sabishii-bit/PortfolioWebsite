import "./form1.scss"
import Aboutme from "./aboutme/Aboutme"
import Naviwin from "../naviwin/Naviwin"


export default function Form1() {
    return (
        <div className="form1" id="form1">
            <Naviwin/>
            <Aboutme/>
        </div>
    )
}
