import React from 'react';

import Items from '../../components/food-item/items.component';

class Hyderabad extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
              id: 1,
              name: 'The Indi Grill',
              imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNh0GgcxqrZg7TYC2v7yK8RQ1FAt2MGcmegJP0c=w408-h271-k-no',
            },
            {
              id: 2,
              name: 'Fanooz Restaurant',
              imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMYlZDFguT8z-28487s0b78SAObG4S1wusKAxL_=w408-h306-k-no',
            },
            {
              id: 3,
              name: 'Jewel of Nizam',
              imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipM4gPjiQvc34AJnUAWl70Tz3yg21x4reIfnVMYC=w408-h339-k-no',
            },
            {
              id: 4,
              name: 'Okra',
              imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMZItTljiBAtDPjkARptI_rDxd-zFXYR0Sk6A-t=w408-h272-k-no',
            },
            {
              id: 5,
              name: 'Firdaus',
              imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMISlE68Q6qb69qm_94GWramBWiYDHCcAG6DT-_=w408-h306-k-no',
             
            }
        ]
      };
    }
  
    render() {
      return (
        <div className='hyderabadfood'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <Items key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }
  }
  
  export default Hyderabad;