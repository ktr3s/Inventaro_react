import React, { Component } from 'react';
import BodegasServices from '../services/BodegasServices';

class UpdateBodega extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            idBodega:this.props.match.params.idBodega,
            nombreBodega: '',
            tipoBodega: '',
            capacidadBodega: '',
            descripcionBodega: '',
            direccionBodega:''
            
        };
        // this.changeIdArticuloHandler=this.changeIdArticuloHandler.bind(this);
        this.changeNombreBodegaHandler = this.changeNombreBodegaHandler.bind(this);
        this.changeTipoBodegaHandler = this.changeTipoBodegaHandler.bind(this);
         this.changeCapacidadBodegaHandler = this.changeCapacidadBodegaHandler.bind(this);
         this.changeDescripcionBodegaHandler = this.changeDescripcionBodegaHandler.bind(this);
         this.changeDireccionBodegaHandler = this.changeDireccionBodegaHandler.bind(this);
         this.updateBodegas = this.updateBodegas.bind(this);
    }

    componentDidMount(){
        BodegasServices.getBodegaById(this.state.idBodega).then((res) =>{
           let bodega = res.data;
           this.setState({
              nombreBodega: bodega.nombreBodega,
              tipoBodega: bodega.tipoBodega,
              capacidadBodega: bodega.capacidadBodega,
              descripcionBodega: bodega.descripcionBodega,
              direccionBodega: bodega.direccionBodega
           });
        });
    }

    updateBodegas = (e) => {
        e.preventDefault();
        let Bodegas = {nombreBodega: this.state.nombreBodega, tipoBodega: this.state.tipoBodega, capacidadBodega: this.state.capacidadBodega, descripcionBodega: this.state.descripcionBodega, direccionBodega: this.state.direccionBodega};
        console.log('Bodegas => ' + JSON.stringify(Bodegas));
        window.location.href = '/listar-bodegas';
    }

    changeNombreBodegaHandler = (event) => {
        this.setState({ nombreBodega: event.target.value });
    }

    changeTipoBodegaHandler = (event) => {
        this.setState({ tipoBodega: event.target.value });
    }

    changeCapacidadBodegaHandler = (event) => {
        this.setState({ capacidadBodega: event.target.value });
    }

    changeDescripcionBodegaHandler = (event) => {
        this.setState({ descripcionBodega: event.target.value });
    }

    changeDireccionBodegaHandler = (event) => {
        this.setState({ direccionBodega: event.target.value });
    }

    cancel() {
        this.props.history.push('/listar-bodegas');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Modificar Bodega</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                        <label>Id Articulo:</label>
                                        <input placeholder="Id Articulo" name="idArticulo" className="form-control"
                                            value={this.state.idArticulo} onChange={this.changeIdArticuloHandler} />
                                    </div> */}
                                  
                                    <div className="form-group">
                                        <label>Nombre Bodega:</label>
                                        <input type="text" placeholder="Nombre bodega" name="nombreBodega" className="form-control"
                                            value={this.state.nombreBodega} onChange={this.changeNombreBodegaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tipo:</label>
                                        <input placeholder="Tipo de bodega" name="tipoBodega" className="form-control"
                                            value={this.state.tipoBodega} onChange={this.changeTipoBodegaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Capacidad:</label>
                                        <input placeholder="Capacidad de la bodega" name="capacidadBodega" className="form-control"
                                            value={this.state.capacidadBodega} onChange={this.changeCapacidadBodegaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Descripcion:</label>
                                        <input placeholder="Ingrese una descripcion" name="descripcionBodega" className="form-control"
                                            value={this.state.descripcionBodega} onChange={this.changeDescripcionBodegaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Direccion:</label>
                                        <input placeholder="Ingrese una direccion" name="direccionBodega" className="form-control"
                                            value={this.state.direccionBodega} onChange={this.changeDireccionBodegaHandler} />
                                    </div>
                                    <br/>
                                    <div class="container mx-auto">
                                    <button className="btn btn-success" onClick={this.updateBodegas}>Guardar</button>
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

export default UpdateBodega;