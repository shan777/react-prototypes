import React, { Component } from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts';

class ContactList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contacts: contactData
        }
    }
    render() {
        // console.log('Contact Data: ', this.state.contacts);
        const list = this.state.contacts.map((item, index) => {
            return <ContactCard key={index} contact={item}/>
            // console.log('item:', item);
        }); 
        //loops through the contacts array to build a new array that holds JSX 
        //instead of the contact objects
        
        return(
            // <h1>Contact List</h1>
            <div className="col-8">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }

}

export default ContactList;