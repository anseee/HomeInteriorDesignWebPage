import React from 'react';
import './MainTopBackgroundView.css';

function MainTopBackgroundView () {
    return (
        <div className="">
        <MainImageView />
        <MainDescView />
        </div>
    )
}

function MainImageView() {
    return (
        <div className="MainImageView">
            <img src="http://viksistemi.com/wp-content/uploads/2018/02/home-interior-design-photos-hd-fine-designs-pics-regarding-rooms-homes-idea-decoration.jpg" alt="main"/>
        </div>
    )
}

function MainDescView() {
    return (
        <d className="MainDescView">
            <div className="MainDescView__Title">Levi's Home Interior</div>
            <div className="MainDescView__Desc">This is Levi's Make home interior page and awesome</div>
            <div className="MainDescView__MoveButton"><a href="">VIEW PROJECT →</a></div>
        </d>
    )
}

export default MainTopBackgroundView;