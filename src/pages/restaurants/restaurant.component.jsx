  
import React from 'react';

import CityItem from '../../components/city-items/city-items.component';
import RESTAURANT_DATA from './restaurant.data';


class RestaurantPage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        <div id= 'KOCHI'>
  <span>Success!</span>
</div>
        
      ]
    };
  }

  render() {
    return (
      <div className='restaurant-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <RESTAURANT_DATA key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default RestaurantPage;