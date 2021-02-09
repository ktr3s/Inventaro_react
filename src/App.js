// src/App.js

import React, { Component } from 'react';
import Articulos from './components/articulos';

class App extends Component {

  state = {
    articulos: []
  }
  componentDidMount() {
    fetch('http://localhost:9000/api/listar_articulos')
    
      .then(res => res.json())
      .then((data) => {
        this.setState({ articulos: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <Articulos articulos={this.state.articulos} />
    )
  }
}




export default App;