
import React from 'react';
//import './city-items.styles.scss'
import {Link} from 'react-router-dom' //used for routing to the pages

const CityItem = ({title}) =>(
    <div 
    className='news-item'>
                <div className='content'>
                <h1 className='title'>{title}</h1>
                <span>
                <Link className="option" to="/article">Go... </Link>  
                </span>
            </div>
        </div>
)
export default CityItem;
