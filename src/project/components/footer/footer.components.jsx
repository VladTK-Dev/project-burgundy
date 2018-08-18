import * as React from 'react';

import "./footer.scss";

export class Footer extends React.Component {
    render () {
        return <div className="footer">
            <p className="t-agency">T-Agency</p>
            <section className={"select"}>
                <select className="cs-select cs-skin-border">
                    <option value="" disabled selected>Currency</option>
                    <option value="US">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                </select>
            </section>
            <div className="company">
                <h3 className="footer-header">COMPANY</h3>
                <a><p className="links">About TripOp</p></a>
                <a><p className="links">Work with Us</p></a>
                <a><p className="links">Press Room</p></a>
                <a><p className="links">Become a Partner</p></a>
            </div>
            <div className="discover">
                <h3 className="footer-header">DISCOVER</h3>
                <a><p className={"links"}>How to Book?</p></a>
                <a><p className={"links"}>Methods of Payment</p></a>
                <a><p className={"links"}>General Conditions</p></a>
                <a><p className={"links"}>Privacy Policy</p></a>
                <a><p className={"links"}>Site Map</p></a>
            </div>
            <div className="connect">
                <h3 className="footer-header">CONNECT WITH US</h3>
                <a><p className={"links"}>Contact Us</p></a>
                <a><p className={"links"}>Facebook</p></a>
                <a><p className={"links"}>Instagram</p></a>
                <a><p className={"links"}>YouTube</p></a>
                <a><p className={"links"}>Newsletter</p></a>
            </div>
            <div className={"blog"}>
            <h3 className="footer-header">BLOG</h3>
                <a><p className="links">Choosing A Static Caravan</p></a>
                <a><p className="links">Cost Cutting Ideas For Your Wedding</p></a>
                <a><p className="links">Do A Sporting Stag Do In Birmingham</p></a>
                <a><p className="links">Mother Earth Hosts Our Travels</p></a>
                <a><p className="links">Trip To Iqaluit In Nunavut A Canadian Arctic City</p></a>
            </div>
            <p className="reserved">© 2016 All rights reserved.</p>
        </div>
    }
}