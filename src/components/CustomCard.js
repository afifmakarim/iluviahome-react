import React from 'react'
import './CustomCard.scss'

const CustomCard = ({title, desc, url, bg}) => {
    return (
        <div className="iluvia-card" href={url}>
            <img src={bg} className="overlay-image"></img>
            <div className="wrapper">
                <div className="title">{title}</div>
                <div className="desc">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomCard
