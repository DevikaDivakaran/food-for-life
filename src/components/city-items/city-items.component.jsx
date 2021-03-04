
import React from 'react';

import { withRouter } from 'react-router-dom';
import './city-items.styles.scss'
import {Link} from 'react-router-dom' //used for routing to the pages

const CityItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
      className={`${size} city-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span>
            <a className='subtitle' href='/restaurant'>Go</a>
        </span>
      </div>
    </div>
    
  );
  
  export default withRouter(CityItem);