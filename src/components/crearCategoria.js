import React, { Component } from 'react';
import CategoriasServices from '../services/CategoriasServices';

class CreateCategoria extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // idCategoria:'',
            nombreCategoria: '',
            tipoCategoria: '',
            descripcionCategoria: ''
            
        };
        // this.changeIdCategoriaHandler=this.changeIdCategoriaHandler.bind(this);
        this.changeNombreCategoriaHandler = this.changeNombreCategoriaHandler.bind(this);
        this.changeTipoCategoriaHandler = this.changeTipoCategoriaHandler.bind(this);
        this.changeDescripcionCategoriaHandler = this.changeDescripcionCategoriaHandler.bind(this);
         this.saveCategoria = this.saveCategoria.bind(this);
    }

    saveCategoria = (e) => {
        e.preventDefault();
        let Categoria = { nombreCategoria: this.state.nombreCategoria, tipoCategoria: this.state.tipoCategoria, descripcionCategoria: this.state.descripcionCategoria };
        console.log('Categoria => ' + JSON.stringify(Categoria));

        CategoriasServices.createCategoria(Categoria).then(res => {
            this.props.history.push('/listar-categorias');
        });
    }

    // changeIdCategoriaHandler = (event) => {
    //     this.setState({ idCategoria: event.target.value });
    // }

    changeNombreCategoriaHandler = (event) => {
        this.setState({ nombreCategoria: event.target.value });
    }

    changeTipoCategoriaHandler = (event) => {
        this.setState({ tipoCategoria: event.target.value });
    }

    changeDescripcionCategoriaHandler = (event) => {
        this.setState({ descripcionCategoria: event.target.value });
    }

    
    cancel() {
        this.props.history.push('/listar-categorias');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Agregar una Categoria</h3>
                            <div className="card-body">
                                <form>
                                    {/* <div className="form-group">
                                        <label>Id Categoria:</label>
                                        <input placeholder="Id Categoria" name="idCategoria" className="form-control"
                                            value={this.state.idCategoria} onChange={this.changeIdCategoriaHandler} />
                                    </div> */}
                                    <div className="form-group">
                                        <label>Nombre de la Categoria:</label>
                                        <input type="text" placeholder="Nombre de la Categoria" name="nombreCategoria" className="form-control"
                                            value={this.state.nombreCategoria} onChange={this.changeNombreCategoriaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tipo:</label>
                                        <input placeholder="Tipo" name="tipoCategoria" className="form-control"
                                            value={this.state.tipoCategoria} onChange={this.changeTipoCategoriaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Descripcion:</label>
                                        <input placeholder="Descripcion" name="descripcionCategoria" className="form-control"
                                            value={this.state.descripcionCategoria} onChange={this.changeDescripcionCategoriaHandler} />
                                    </div>
                                    <br/>
                                    <div class="container mx-auto">
                                    <button className="btn btn-success" onClick={this.saveCategoria}>Guardar</button>
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

export default CreateCategoria;