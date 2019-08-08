import React from 'react';

const Panel = ({aim, price}) => {
  return ( 
    <div className="panel">
        
      {aim.length > 0 ? <div className="panelsInfo__panel">
        <span > You want: {aim}</span> 
        <span> It costs: {price} $</span>
      </div> : ""}

      </div>
   );
}
 
export default Panel;