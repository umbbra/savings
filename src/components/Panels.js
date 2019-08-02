import React from 'react';



const Panels = ({aim, price}) => {
  return ( 
    <div className="panelsInfo">
      {aim.length > 0 ? <div className="panelInfo">
        <span> You want: {aim}</span> 
        <span> It costs: {price}</span>
      </div> : ""}
    </div>
   );
}
 
export default Panels;