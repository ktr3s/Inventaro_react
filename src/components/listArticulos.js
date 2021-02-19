import React, { Component } from 'react';
import ArticuloServices from '../services/ArticuloServices';
import axios from 'axios';

class ListArticulos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articulo: []
        }

         this.addArticulo = this.addArticulo.bind(this);
        // this.editArticuloaddArticulo = this.editArticuloaddArticulo.bind(this);
    }

    // editArticuloaddArticulo(idArticuloaddArticulo) {
    //     this.props.history.push("/update-ArticuloaddArticulo/${id}");
    // }

    componentDidMount() {
        ArticuloServices.getListarArticulos().then((res) => {
            this.setState({ articulo: res.data });
        });
    }

    eliminarArticulo = async (idArticulo) => {
        var opcion = window.confirm("El articulo se eliminara. ¿Desea continuar?");
        if (opcion == true) {
            await axios.delete('http://localhost:9000/api/borrar_articulo/' + idArticulo);
            window.location.href = '/listar-articulos';
        }
    }
    addArticulo() {
        this.props.history.push("/crear-articulo");
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Articulos</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addArticulo}><i class="fas fa-plus"></i> Crear un nuevo articulo</button>
                </div>
                <div className="row table-responsive">
                    <table className="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre Articulo</th>
                                <th>Cantidad</th>
                                <th>Precio $</th>
                                <th>Peso (lb)</th>
                                {/* <th>Iva</th> */}
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.articulo.map(
                                    articulo =>
                                        <tr key={articulo.idArticulo}>
                                            <td>{articulo.nombreArticulo}</td>
                                            <td>{articulo.cantidadArticulo}</td>
                                            <td>{articulo.precioArticulo}</td>
                                            <td>{articulo.pesoArticulo}</td>
                                            {/* <td>{articulo.ivaArticulo}</td> */}
                                            <td>
                                                <div class="row">
                                                    {/* <div class="col-4 ">
                                                    <a class="text-primary"><i class="fa fa-eye"></i> </a>
                                                    </div> */}
                                                    <div class="col-4">
                                                    <a class="text-success"><i class="fa fa-edit"></i> </a>
                                                    </div>
                                                    <div class="col-4 ">
                                                    <a class="text-danger" onClick={() => this.eliminarArticulo(articulo.idArticulo)}><i class="fa fa-trash"></i> </a>
                                                    </div>
                                                </div>
                                                {/* <a class="text-primary"><i class="fa fa-eye"></i> Ver</a> */}
                                                {/* <br></br> */}
                                                {/* <a class="text-success"><i class="fa fa-edit"></i> Editar</a> */}
                                                {/* <br></br> */}
                                                {/* <a class="text-danger"><i class="fa fa-trash"></i> Eliminar</a> */}
                                            </td>
                                            {/* <td>{ArticuloaddArticulo.idArticuloaddArticulo}</td>
                                            <td>{ArticuloaddArticulo.idProveedor}</td>
                                            <td>{ArticuloaddArticulo.detalleCuentaPagar}</td>
                                            <td>{ArticuloaddArticulo.fechasPagosVencidos}</td>
                                            <td>{ArticuloaddArticulo.documentoPendientePago}</td>
                                            <td>{ArticuloaddArticulo.diasGraciaVencimiento}</td>
                                            <td>
                                                <button onClick={() => this.editArticuloaddArticulo(ArticuloaddArticulo.idArticuloaddArticulo)} className="btn btn-info">Actualizar</button>
                                            </td> */}
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default ListArticulos;
