import React from 'react';
import Table from './table';

const students = [
    {name: "Sarah", course: "Math", grade: 22 },
    {name: "Mia", course: "Vietnamese", grade: 99 },
    {name: "David", course: "Music", grade: 100 },
];

function App() {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
        
    );
}

export default App;