import React from 'react';
import './Menu.css';

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
            <div className='buttonText'><a href="">HOME</a></div>
            <div><a href="">PROJECT</a></div>
            <div><a href="">ABOUT</a></div>
            <div><a href="">SERVICES</a></div>
            <div><a href="">BLOG</a></div>
            <div><a href="">CONTACT</a></div>
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
            <img src="./resources/facebook-logo.png" alt="facebook"/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div> 
    )
}

export default Menu;