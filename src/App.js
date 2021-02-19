// src/App.js

// import listarArticulos from './components/listarArticulos';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HeaderInventario from './components/HeaderInventario';
import FooterInventario from './components/FooterInventario.jsx';
import listArticulos from './components/listArticulos';
import Buscar from './components/Buscar';
import ListarBodegas from './components/listarBodegas';
import ListarCategorias from './components/ListarCategorias';
import CrearArticulo from './components/CrearArticulo';
/* class App extends Component {

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
} */

function App() {
  return (
    <div>
      <Router>
        <div class="container text-center " >
          <HeaderInventario />
        </div>
        <div className="container-fluid">
          <div>
            <div class="row">
              <div class="col-8">
                <ul class="nav nav-tabs" id="navId">
                  <li class="nav-item">
                    <a href="#tab1Id" class="nav-link active">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                    <Link to="/listar-articulos" class="nav-link">Articulos</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/listar-bodegas" class="nav-link">Bodegas</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/listar-categorias" class="nav-link">Categorias</Link>
                  </li>
                </ul>
              </div>
              <div class="col-4">
                <Buscar />
              </div>
            </div>
          </div>
        </div>
        <body class=" bg-light">
          <br/>
          <div class="container bg-white">
            <Switch>
              <Route path="/listar-articulos" exact component={listArticulos}></Route>
              <Route path="/listar-bodegas" exact component={ListarBodegas}></Route>
              <Route path="/listar-categorias" exact component={ListarCategorias}></Route>
              <Route path="/crear-articulo" exact component={CrearArticulo}></Route>
             </Switch>
          </div>
          <br/>
        <br/>
        </body>
        
        <footer>
          <FooterInventario />
        </footer>
      </Router>
    </div>

  );
}


export default App;