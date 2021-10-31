import './naviwin.scss';
import * as $ from 'jquery';

// Page trackers
let currentPage = 1;
const topPage = 1;
const bottomPage = 3;

export default function Naviwin() {
    return (
        <div className="naviwin" id="naviwin" >
            <div className="naviban" id="naviban">
            航海
            </div>
            <div className="avatar"><img src={require('../../assets/naviAvi.gif').default } style={{ height: '100%', width: '100%' }} alt='' /></div>
            <div className="bottom-box"><span>root@navi:~$</span> ようこそ 、
                                        <br />&quot;<spanip onLoad={ $.getJSON("https://api.ipify.org?format=json",
                                        function(data) {$("#ip").html(data.ip);})} id="ip"></spanip>@guest-user&quot;<br /><br /> 
                                        <span>root@navi:~$</span> You have entered my master's netsphere domain.
                                        Please allow this Navi-AI application to assist you
                                        in your traversal of this digital space.<br /><br /> 
                                        <span>root@navi:~$</span> Unfortunately, this domain is still under construction
                                        and not all features have been fully implemented yet. Features still requiring implementation are: 
                                        <span>&#123;PAGE POPULATION&#125;</span>,<span>&#123;MOBILE COMPATIBILITY&#125;</span>,<span>&#123;RESOLUTION SCALABILITY&#125;</span>,
                                        <span>&#123;NONESSENTIAL JS FUNCTIONS&#125;</span>.<br /><br /> 
                                        <span>root@navi:~$</span> At this time, guest users are only permitted to use the navigational arrows
                                        located at the bottom of this window. Please contact my master if you
                                        require elevated user privileges.<br /><br />
                                        <span>root@navi:~$</span> 滞在を楽しんで！</div>
            <div className="nav-buttons">
            <div className="left">
                <a href onClick={() => {
                    if (currentPage === topPage)
                        return;
                    else {
                        currentPage -= 1;
                        window.location.href = `#form${currentPage}`;
                    }
                  }
                }
                 style={{ textDecoration: 'none', color: '#ff054b', cursor: 'pointer' }}>
                      &lt;&lt;</a>
                </div> 
            <img src={require('../../assets/navi01.gif').default} alt='' /> 
            <div className="right">
                <a href onClick={() => {
                    if (currentPage === bottomPage)
                        return;
                    else {
                        currentPage += 1;
                        window.location.href = `#form${currentPage}`;
                    }
                  }
                }
                 style={{ textDecoration: 'none', color: '#ff054b', cursor: 'pointer' }}>
                     &gt;&gt;</a>
                </div>
            </div>
        </div>
    )
}