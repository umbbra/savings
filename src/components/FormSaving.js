import React, { Component } from 'react';

class FormSaving extends Component {
  state = { 
    aim : "",
    price: "",
   }

   handleInput = (e) =>{
    const value = e.target.value;  
    const type = e.target.type;
    const name = e.target.name;

    if(type === "text" || type === "number"){
        this.setState({
          [name]: value,
        })
    }

   }

  render() { 
    const {aim, price} = this.state;
    return ( 
      <div>
        <h1>Welcome in savings application!</h1>
        <form>
          Please, write what is your aim:
          <input type="text" value={this.state.aim} onChange={this.handleInput} name="aim" required/>
           <br />
           and how much it costs: 
           <input type="number" value={this.state.price} onChange={this.handleInput} name="price" min="1" required/> $
           <br />
           <button type="submit" onClick={(e)=> {
             e.preventDefault();
             this.props.saveInformation(aim, price)
           }}>Let's go!</button>
        </form>
      </div>
     );
  }
}
 
export default FormSaving;