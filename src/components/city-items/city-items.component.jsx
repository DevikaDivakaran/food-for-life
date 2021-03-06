
import React from 'react';

import { withRouter } from 'react-router-dom';
import './city-items.styles.scss'
import {Link} from 'react-router-dom' //used for routing to the pages

const CityItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    
   
    <Link to='/restaurant'  
      
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
        
      </div>
      
    </Link>
    


  );
  export default withRouter(CityItem);