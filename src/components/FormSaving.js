import React, { Component } from 'react';

class FormSaving extends Component {
  state = { 
    aim : "",
    price: 0,
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
      <div className="headerForm">
        <h1 className="headerForm__slogan">Welcome in savings application!</h1>
        <form className="form">
          <label className="form__label"> Please, write what's your aim:
          <input className="form__label__aim" type="text" value={this.state.aim} onChange={this.handleInput} name="aim" required/> </label>
           <br />
          <label className="form__label">and how much it costs: 
           <input className="form__label__price" type="text" value={this.state.price} onChange={this.handleInput} name="price" min="1" required/> $ </label> 
           <br />
           <button className="form__button" type="submit" onClick={(e)=> {
             e.preventDefault();
             this.props.saveInformation(aim, price)
           }}>Let's go!</button>
        </form>
      </div>
     );
  }
}
 
export default FormSaving;