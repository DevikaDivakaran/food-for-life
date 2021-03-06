import React from 'react';

import Items from '../../components/food-items/items.component';

class Bangalore extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
            id: 1,
            name: ' Beer and Nachos',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN85Lpbjxr-eUfDVuGBqEnSBQeM1D_JdsOVcnr6=w408-h272-k-no',
    
          },
          {
            id: 2,
            name: 'Bangalore Brasserie',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNFUtcgzzn0W6oZR_XotNHo189ZmCyf9mVV1r6C=w408-h611-k-no',
         
          },
          {
            id: 3,
            name: 'Alfresco',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNfGtxHv4NkaZbJsyX6Yu1470T2BEOaDeF3iMZd=w408-h280-k-no',
  
          },
          {
            id: 4,
            name: 'Hard Rock Cafe ',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOkV5ikfyvqJzX5-QrQkzQc0pE1FwAblOoh1T3a=w408-h240-k-no-pi-23.63344-ya123.71383-ro0-fo100',
        
          },
          {
            id: 5,
            name: 'Persian Terrace',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMGuHg7vEW-4L_n9tmATmizwzCzp7aqyVhdDi76=w408-h271-k-no',
          
          }
      ]
    };
  }

  render() {
    return (
      <div className='bangalorefood'>
        {this.state.sections.map(({ name, ...otherSectionProps }) => (
          <Items key={name} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Bangalore;