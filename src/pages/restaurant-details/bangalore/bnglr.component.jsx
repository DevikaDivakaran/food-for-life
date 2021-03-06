
import React from 'react';

import CityItem from '../city-items/city-items.component';

class BnglrPage extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
            {
                title: 'Fort House Restaurant',
                imageUrl: 'https://www.adequatetravel.com/blog/wp-content/uploads/2020/03/Fort-House-Hotel-768x410.jpg',
                id: 1,
                linkUrl: ''
              },
              {
                title: 'Malabar Cafe',
                imageUrl: 'https://www.adequatetravel.com/blog/wp-content/uploads/2020/03/The-rice-boat-768x326.jpg',
                id: 2,
                linkUrl: ''
              },
              {
                title: 'Thai Soul',
                imageUrl: 'https://image3.mouthshut.com/images/Restaurant/Photo/-81988_8621.jpg',
                id: 3,
                linkUrl: ''
              },
              {
                title: 'Kashi Art Cafe',
                imageUrl: 'https://www.adequatetravel.com/blog/wp-content/uploads/2020/03/Dhe-phuttu-768x465.jpg',
                id: 3,
                linkUrl: ''
              },
              {
                title: 'THAI SOUL',
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
  
export default BnglrPage;