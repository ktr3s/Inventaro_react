import React, { Component } from 'react';
import BodegasServices from '../services/BodegasServices';

class ListarBodegas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bodega: []
        }

        // this.addCuentaProveedor = this.addCuentaProveedor.bind(this);
        // this.editCuentaProveedor = this.editCuentaProveedor.bind(this);
    }

    // editCuentaProveedor(idCuentaProveedor) {
    //     this.props.history.push("/update-CuentaProveedor/${id}");
    // }

    componentDidMount() {
        BodegasServices.getListarBodegas().then((res) => {
            this.setState({ bodega: res.data });
        });
    }

    // addCuentaProveedor() {
    //     this.props.history.push("/add-CuentaProveedor");
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Bodegas</h2>
                {/* <div className="row">
                    <button className="btn btn-primary" onClick={this.addCuentaProveedor}>Crear una cuenta de proveedor</button>
                </div> */}
                <div className="row table-responsive">
                    <table className="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre bodega</th>
                                <th>Tipo</th>
                                <th>Capacidad</th>
                                <th>Descripcion</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.bodega.map(
                                    bodega =>
                                        <tr key={bodega.id}>
                                            <td>{bodega.nombreBodega}</td>
                                            <td>{bodega.tipoBodega}</td>
                                            <td>{bodega.capacidadBodega}</td>
                                            <td>{bodega.descripcionBodega}</td>
                                            <td>{bodega.direccionBodega}</td>
                                            <td>
                                                <div class="row">
                                                    <div class="col-4 ">
                                                    <a class="text-primary"><i class="fa fa-eye "></i> </a>
                                                    </div>
                                                    <div class="col-4">
                                                    <a class="text-success"><i class="fa fa-edit"></i> </a>
                                                    </div>
                                                    <div class="col-4">
                                                    <a class="text-danger"><i class="fa fa-trash"></i> </a>
                                                    </div>
                                                </div>
                                                {/* <a class="text-primary"><i class="fa fa-eye"></i> Ver</a> */}
                                                {/* <br></br> */}
                                                {/* <a class="text-success"><i class="fa fa-edit"></i> Editar</a> */}
                                                {/* <br></br> */}
                                                {/* <a class="text-danger"><i class="fa fa-trash"></i> Eliminar</a> */}
                                            </td>
                                            {/* <td>{cuentaProveedor.idCuentaProveedor}</td>
                                            <td>{cuentaProveedor.idProveedor}</td>
                                            <td>{cuentaProveedor.detalleCuentaPagar}</td>
                                            <td>{cuentaProveedor.fechasPagosVencidos}</td>
                                            <td>{cuentaProveedor.documentoPendientePago}</td>
                                            <td>{cuentaProveedor.diasGraciaVencimiento}</td>
                                            <td>
                                                <button onClick={() => this.editCuentaProveedor(cuentaProveedor.idCuentaProveedor)} className="btn btn-info">Actualizar</button>
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

export default ListarBodegas;
