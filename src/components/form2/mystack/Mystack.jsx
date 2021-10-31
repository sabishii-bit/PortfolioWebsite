import React from 'react'
import './mystack.scss'

export default function Mystack() {
    return (
        <div className="mystack" id="mystack">
            <div className="banner">My Stack</div>
            <div className="skillheader">Technologies I'm comfortable with:</div>
            <div className="icons">
                <img src={require('../../../assets/icons/java.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://www.java.com/en/'}} alt='' /> 
                <img src={require('../../../assets/icons/c++.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://www.cplusplus.com/'}} alt='' /> 
                <img src={require('../../../assets/icons/c-sharp.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://docs.microsoft.com/en-us/dotnet/csharp/'}} alt='' /> 
                <img src={require('../../../assets/icons/html.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://html.spec.whatwg.org/multipage/'}} alt='' /> 
                <img src={require('../../../assets/icons/javascript.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://www.javascript.com/'}} alt='' /> 
                <img src={require('../../../assets/icons/sql.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://dev.mysql.com/doc/'}} alt='' /> 
            </div><br />
            <div className="skillheader">Technologies I'm currently learning:</div>
            <div className="icons">
                <img src={require('../../../assets/icons/python.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://www.python.org/'}} alt='' /> 
                <img src={require('../../../assets/icons/react.png').default} style={{ height: '70%', width: '9.5%', padding: '3%', cursor: 'pointer' }} onClick={()=> {window.location.href = 'https://reactjs.org/'}} alt='' />
            </div>
        </div>
    )
}
