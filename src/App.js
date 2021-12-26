import React, {Component} from 'react'

import { CardList } from './components/cardList/cardlist.component';
import './App.css'

import {SearchBox} from './components/search_box/searchbox.jsx'

class MyCats extends Component{
  constructor(){
    super();

    this.state = {
      cats: [],
      searchCats: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({cats: users}))
  }
   
  handleChange = e => {
    this.setState({searchCats: e.target.value})
  }

  render(){
    const { cats, searchCats } = this.state; 
    const filteredCats = cats.filter(cat =>
      cat.username.toLowerCase().includes(searchCats.toLowerCase()))
    return (
      <div className="App">
          <div className="header">
            <h2>Cat Rolodex <img src={`https://robohash.org/$8?set=set4&size=30x30`}/></h2>
          </div>
          <SearchBox placeholder="Search Cats..."
          handleChange={this.handleChange}/>
          <CardList cats={filteredCats}/>

          <footer className="footer">
          <p>©Elly_Yoooo@2021<img src={`https://robohash.org/$14?set=set4&size=20x20`}/>❤</p>
        </footer>
      </div>
    );
  }
}

export default MyCats
