import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({ type, url, text, symbol, Target }) => {

    switch (type) {
        case "transparent":
            type = "btn-transparent"
            break;
        case "black":
            type = "btn-black"
            break;
        case "round":
            type = "btn-round"
            break;
        case "grey":
            type = "btn-grey"
            break;
        default:
            type = "btn"
            break;
    }

    return (
        <Link className={type} to={url} target={Target}>{text}<i className={symbol}></i></Link>
    )
}

export default Buttons