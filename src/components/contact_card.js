import React from 'react';

function ContactCard (props) {
    const {firstName, lastName, phone, email } = props.contact;

    return (
        <div className="col-6 my-3">
            <div className="card-header">
                {lastName}
            </div>
            <div className="card-block">
                <h4 className="card-title">{firstName} {lastName}</h4>
                <div className="card-text">
                    <p><b>Phone: {phone}</b></p>
                    <p><b>Email: {email}</b></p>
                </div>
            </div>
        </div> 
    );
}

export default ContactCard;