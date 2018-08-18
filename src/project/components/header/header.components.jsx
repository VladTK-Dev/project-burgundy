import * as React from 'react';

import "./header.scss";

export class Header extends React.Component {
    render () {
        return <div className={'page-header'}>
            <p className={'page-header__name'}>Burgundy</p>
            <p className={"page-header__description"}>Explore the luxury of Wine & Food</p>
        </div>

    }
}

export class PageNavBar extends React.Component {
    render () {
        return <span className={"nav_bar"}>
            <span><a href={""}><p className={"nav_bar__item"}>Summary</p></a></span>
            <span><a href={""}><p className={"nav_bar__item"}>General</p></a></span>
            <span><a href={""}><p className={"nav_bar__item"}>Sights</p></a></span>
            <span><a href={""}><p className={"nav_bar__item"}>Weather</p></a></span>
            <span><a href={""}><p className={"nav_bar__item"}>What to Do</p></a></span>
            <span><a href={""}><p className={"nav_bar__item"}>Residential Guide</p></a></span>
            <span><a href={""}><p className={"nav_bar__item"}>Photos</p></a></span>
            <div className={"divider"} id={"divider1"}></div>
        </span>
     }
}