import { IonItem } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryComponent.css';

const CategoryCompomnent = ({_id, img, title, url}) => {
    return (
        <Link to={url}  className="divFlex">
            <img src={img} className="img"/>
            <span className="spanTitle">{title.toUpperCase()}</span>
        </Link>

    )
}   

export default CategoryCompomnent
