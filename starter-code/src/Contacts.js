import React, { Component } from 'react';
import contacts from './contacts.json';

const contactList = contacts;

class Contacts extends Component {
    render() {
        return (
            contactList.map((el,idx) => (
                <tr key={idx}>
                    <td>  <img src = {el.pictureUrl} width='50px'></img> </td> <td > {el.name} </td>  <td> {el.popularity.toFixed(2)}</td>
                </tr>
            ))
        );
    }
}

export default Contacts;









