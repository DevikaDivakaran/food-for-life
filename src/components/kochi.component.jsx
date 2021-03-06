  
import React from 'react';

import CityItem from './city-items/city-items.component';

class KochiPage extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'KOCHI',
            imageUrl: 'https://c1.wallpaperflare.com/preview/988/16/35/sunset-kerala-aleppay-boat.jpg',
            id: 1,
            linkUrl: ''
          },
          {
            title: 'HYDERABAD',
            imageUrl: 'https://st2.depositphotos.com/1141099/6198/i/600/depositphotos_61983329-stock-photo-historic-charminar.jpg',
            id: 2,
            linkUrl: ''
          },
          {
            title: 'BANGALORE',
            imageUrl: 'https://image3.mouthshut.com/images/Restaurant/Photo/-81988_8621.jpg',
            id: 3,
            linkUrl: ''
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='directory-kochi'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <CityItem key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }
  }
  

/*
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