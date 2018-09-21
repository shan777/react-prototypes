import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = { //setting the initial state
            form: {
                firstName: '',
                lastName: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        });
        // console.log(value);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
    }

    render() {
        const {firstName, lastName} = this.state.form;
        
        return(
            <form onSubmit={this.handleSubmit}>Contact form
                <div className="form-group">
                    <label>First Name</label>
                    <input value={firstName} name="firstName" type="text" className="form-control" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input value={lastName} name="lastName" type="text" className="form-control" onChange={this.handleInputChange}/>
                </div> 
                <button>Add Contact</button>
            </form>
        );
    }
}

export default ContactForm;