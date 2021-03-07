import React from 'react';
import restaurant_data from './restaurant_data.js';
import Items from '../../components/restaurant-item/items.component';
class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collections : restaurant_data[this.props.match.param.id].items};

    console.log(restaurant_data.items);
  }


  render(){
  
      const { collections } = this.state;
          return(
              <div className='restaurantpage'>
                  {collections.map(({ id, ...otherSectionProps }) => (
                  <Items key={id} {...otherSectionProps} />
                  ))}
                </div>
  
            );
    
  }




}
export default RestaurantPage;