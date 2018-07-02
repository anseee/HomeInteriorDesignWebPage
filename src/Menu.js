import React from 'react';
import './Menu.css';
import facebookLogo from './images/facebookLogo.png';
import twitterLogo from './images/twitter.png';
import instagramLogo from './images/instagram.png';
import linkedinLogo from './images/linkedin-logo.png';

function Menu () {
    return (
        <div className='Menu'>
            <MenuTitle />            
            <MenuButtons />            
            <CopyrightInfo />            
            <SnsButtons />              
        </div>
    )
}

function MenuTitle () {
    return (
        <div className='Menu__Top'>{"Home Design"}</div>
    )
}

function MenuButtons () {
    return (
        <div className='Menu__Buttons'>
            <div className='Menu__Button__Home'><a href="">HOME</a></div>
            <div className='Menu__Button__PROJECT'><a href="">PROJECT</a></div>
            <div className='Menu__Button__ABOUT'><a href="">ABOUT</a></div>
            <div className='Menu__Button__SERVICES'><a href="">SERVICES</a></div>
            <div className='Menu__Button__BLOG'><a href="">BLOG</a></div>
            <div className='Menu__Button__CONTACT'><a href="">CONTACT</a></div>
        </div>
    )
}

function CopyrightInfo () {
    return (
        <div className='Menu__CopyrightInfo'>
            <div>Copyright 2018 All rights</div>
            <div>reserved | This template is made</div>
            <div>with by Levi</div>
            <div>Demo Images Ansi</div>
        </div>
    )
}

function SnsButtons () {
    return (
        <div className='Menu__SnsButtons'>
            <img src={facebookLogo} alt="" className="Menu__SnsButtons__facebookLogo"/>
            <img src={twitterLogo} alt="" className="Menu__SnsButtons__twitterLogo"/>
            <img src={instagramLogo} alt="" className="Menu__SnsButtons__instagramLogo"/>
            <img src={linkedinLogo} alt="" className="Menu__SnsButtons__linkedinLogo"/>
        </div> 
    )
}

export default Menu;