import React from 'react';
import './MainTopBackgroundView.css';

function MainTopBackgroundView () {
    return (
        <div className="">
        <MainImageView />
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

export default MainTopBackgroundView;