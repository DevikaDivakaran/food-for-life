import React from 'react';
import { withRouter } from 'react-router-dom';

const Items = ({ id, title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} items`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    
  </div>
  
);

export default withRouter(Items);