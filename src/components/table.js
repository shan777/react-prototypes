import React from 'react';

export default (props) => {
    const tableRows = props.data.map(function(itemFromTheArray, index) {
    //const tableRows = props.data.map((itemFromTheArray, index) => {

        // console.log(itemFromTheArray);
        // return tableRows;
        return (
            <tr key={index}>
                <td>{itemFromTheArray.name}</td>
                <td>{itemFromTheArray.course}</td>
                <td>{itemFromTheArray.grade}</td>
            </tr>);
    });

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                 {tableRows}
            </tbody>
        </table>
    );

}
