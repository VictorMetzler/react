import React from 'react';

export default class extends React.Component {

    state = {
        isGoing: true,
        numberOfGuests: 2
    }

    handleInputChage = (event) => {
       const target = event.target;
       const value  = target.type === 'checkbox' ? target.checked : target.value; 
       const name   = target.name;

       this.setState({[name]: value});
       /*
        var partialState = {};
        partialState[name] = value;
        this.setState(partialState);       
       */
    }

    render() {
        return (
            <form>
                <label>
                    Estão indo:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChage} />
                </label>
                <br />
                <label>
                    Número de convidados:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChage} />                        
                </label>
            </form>             
        );
    }
}