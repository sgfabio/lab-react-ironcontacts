import React, { Component } from 'react';
import Contacts from './Contacts'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>

        <div className ='listaContatos'>
        <table>
            <thead>
              <tr>
                  <th> <h2> Picture </h2>  </th> 
                  <th> <h2> Name </h2> </th> 
                  <th> <h2> Popularity </h2> </th>
              </tr>
            </thead>
            <tbody>
              <Contacts> </Contacts>
            </tbody>
        </table>
        </div>

      </div>
    );
  }
}

export default App;
