import React from 'react'
import { Link } from 'react-router-dom'

const ListBox = ({ title, url, text1, text2, text3, text4 }) => {
    return (
        <div className="listBox">
            <h3 className="h-3">{title}</h3>
            <ul>
                <li><Link to={url}>{text1}</Link></li>
                <li><Link to={url}>{text2}</Link></li>
                <li><Link to={url}>{text3}</Link></li>
                <li><Link to={url}>{text4}</Link></li>
            </ul>
        </div>
    )
}

export default ListBox