import React from 'react';


const handleClose = () =>{

}
const Popup = ({aim}) => {
  console.log(aim);
  return ( 
    <div className="popup">
      <h1 className="popup__cong">Congratulations!</h1>
      <h3>Finally, you saved money for: {aim}</h3>
      <button className="popup__close" onClick="handleClose">Zamknij</button>
    </div>   
    
    );
}
 
export default Popup;