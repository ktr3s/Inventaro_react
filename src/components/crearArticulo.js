import React, { Component } from 'react';
import ArticuloServices from '../services/ArticuloServices';

class CreateArticulo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // idArticulo:'',
            nombreArticulo: '',
            cantidadArticulo: '',
            precioArticulo: '',
            pesoArticulo: ''
            
        };
        // this.changeIdArticuloHandler=this.changeIdArticuloHandler.bind(this);
        this.changeNombreArticuloHandler = this.changeNombreArticuloHandler.bind(this);
        this.changeCantidadArticuloHandler = this.changeCantidadArticuloHandler.bind(this);
         this.changePrecioArticuloHandler = this.changePrecioArticuloHandler.bind(this);
         this.changePesoArticuloHandler = this.changePesoArticuloHandler.bind(this);
         this.saveArticulos = this.saveArticulos.bind(this);
    }

    saveArticulos = (e) => {
        e.preventDefault();
        let Articulos = { nombreArticulo: this.state.nombreArticulo, cantidadArticulo: this.state.cantidadArticulo, precioArticulo: this.state.precioArticulo, pesoArticulo: this.state.pesoArticulo };
        console.log('Articulos => ' + JSON.stringify(Articulos));

        ArticuloServices.createArticulos(Articulos).then(res => {
            this.props.history.push('/listar-articulos');
        });
    }

    // changeIdArticuloHandler = (event) => {
    //     this.setState({ idArticulo: event.target.value });
    // }

    changeNombreArticuloHandler = (event) => {
        this.setState({ nombreArticulo: event.target.value });
    }

    changeCantidadArticuloHandler = (event) => {
        this.setState({ cantidadArticulo: event.target.value });
    }

    changePrecioArticuloHandler = (event) => {
        this.setState({ precioArticulo: event.target.value });
    }

    changePesoArticuloHandler = (event) => {
        this.setState({ pesoArticulo: event.target.value });
    }


    cancel() {
        this.props.history.push('/listar-articulos');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Agregar un Articulo</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                        <label>Id Articulo:</label>
                                        <input placeholder="Id Articulo" name="idArticulo" className="form-control"
                                            value={this.state.idArticulo} onChange={this.changeIdArticuloHandler} />
                                    </div> */}
                                    <div className="form-group">
                                        <label>Nombre del Articulo:</label>
                                        <input type="text" placeholder="Nombre del Articulo" name="nombreArticulo" className="form-control" minlength="3"
                                            maxlength="30" required pattern="[A-Z a-z]{1,60}"
                                            title="Solo se permiten letras mayúsculas y minúsculas" required
                                            value={this.state.nombreArticulo} onChange={this.changeNombreArticuloHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Cantidad:</label>
                                        <input placeholder="Cantidad" name="cantidadArticulo" className="form-control" required
                                            value={this.state.cantidadArticulo} onChange={this.changeCantidadArticuloHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio:</label>
                                        <input placeholder="$" name="precioArticulo" className="form-control" 
                                            required value={this.state.precioArticulo} onChange={this.changePrecioArticuloHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Peso:</label>
                                        <input placeholder="Lb" name="pesoArticulo" className="form-control" 
                                            required value={this.state.pesoArticulo} onChange={this.changePesoArticuloHandler} />
                                    </div>
                                    <br/>
                                    <div class="container mx-auto">
                                    <button className="btn btn-success" onClick={this.saveArticulos}>Guardar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateArticulo;