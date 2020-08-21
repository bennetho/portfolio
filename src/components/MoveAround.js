// import React from 'react';
// import Ticker from 'react-ticker';

// const MoveAround = () => (
//   <Ticker className='ticker' mode='smooth'>
//     {({ index }) => (
//       <>
//         <h6 className='ticker'>
//           bennethossai@gmail.com &nbsp; +351-920-50-7060
//         </h6>
//       </>
//     )}
//   </Ticker>
// );

// export default MoveAround;

import React from 'react';
import Ticker from 'react-ticker';
import ContactsIcon from '@material-ui/icons/Contacts';

const MoveAround = () => (
  <div className='ticker' mode='smooth'>
    <span className='ticker_title px-2'>
      <ContactsIcon />
    </span>

    <Ticker offset={550}>
      {({ index }) => (
        <span className='ticker_content'>
          Are you looking for a developer? yes you are on the right place
          bennethossai@gmail.com +351-920-50-7060 &nbsp; <code></code>
        </span>
      )}
    </Ticker>
  </div>
);

export default MoveAround;
