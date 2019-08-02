import React from 'react';
const Panel = ({aim, price}) => {
  return ( 
    <div className="panel">
        <span> You want: {aim}</span> 
        <span> It costs: {price}</span>
      </div>
   );
}
 
export default Panel;