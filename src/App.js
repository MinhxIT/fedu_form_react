import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import TableData from './components/TableData';
import AddUser from './components/AddUser';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div className="searchForm">
         <div className="container">
           <div className="row">
             <SearchForm/>
             <TableData/>
             <AddUser/>
           </div>
         </div>
       </div>
      </div>
    );
  }
}

export default App;
