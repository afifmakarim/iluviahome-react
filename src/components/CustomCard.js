import React from 'react'
import './CustomCard.scss'
import bg2 from '../assets/2.png'

const CustomCard = ({title, desc, url}) => {
    return (
        <div className="iluvia-card" href={url}>
            {/* <img src={bg2} className="image"></img> */}
            <div className="wrapper">
                <div className="title">{title}</div>
                <div className="desc">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

const cardStyle = {
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 16.67%, rgba(77, 77, 77, 0.45) 100%, rgba(77, 77, 77, 0.5) 100%), url(../assets/1.png), #C4C4C4"
}

export default CustomCard
