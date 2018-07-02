import React from 'react';
import "./MainMiddleBackgroundView.css";

function MainMiddleBackgroundView() {
    return (
        <div className="MainMiddleBackgroundView">
            <MainMiddleContent />
        </div>    
    )
}

function MainMiddleContent() {
    return (
        <div className="MainMiddleContent" >
            <img src="http://www.hdfinewallpapers.com/HDWallpapers/Big/House%20and%20Bungalow/White_and_Gray_Theme_Home_Interior.jpg" alt="middleImage" />
            <MainMiddleText />
        </div>
    )
}

function MainMiddleText() {
    return (
        <div className="MainMiddleText">
            <div className="MainMiddleText__TopText">WELCOME</div>
            <div className="MainMiddleText__Middle">
                <div className="MainMiddleText__Middle__Middle1Text">WHO</div>
                <div className="MainMiddleText__Middle__Middle2Text">WE ARE</div>        
            </div>
        </div>
    )
}

export default MainMiddleBackgroundView;