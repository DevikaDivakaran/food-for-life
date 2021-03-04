import React from 'react';

import CityItem from '../city-items/city-items.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'KOCHI',
          imageUrl: 'https://i.ytimg.com/vi/BNCKblnH390/maxresdefault.jpg',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'HYDERABAD',
          imageUrl: 'https://i.ytimg.com/vi/ZKxDXSpnP2I/hqdefault.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'BANGALORE',
          imageUrl: 'https://roofandfloor.thehindu.com/real-estate-blog/wp-content/uploads/sites/14/2018/12/Bangalore-2018-WRAP-UP-840x480.jpg',
          id: 3,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <CityItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;