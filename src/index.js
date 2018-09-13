import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: "Sarah",
    luckyNumber: LuckyNumber()
}

function LuckyNumber() {
    return Math.floor((Math.random() * 1000) + 1);
}

function Greeting(props) {
    return (
        <div className="container">
            <h1>Hello {props.name}</h1>
            <h2 className="text-muted">Your lucky number is {props.luckyNumber}</h2>
        </div>
    )
}
ReactDOM.render(
    <Greeting name={user.name} luckyNumber={user.luckyNumber}/>,
    document.getElementById('root')
);
