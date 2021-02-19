import React, { Component } from 'react';
import CategoriasServices from '../services/CategoriasServices';

class ListarCategorias extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categoria: []
        }

        // this.addCuentaProveedor = this.addCuentaProveedor.bind(this);
        // this.editCuentaProveedor = this.editCuentaProveedor.bind(this);
    }

    // editCuentaProveedor(idCuentaProveedor) {
    //     this.props.history.push("/update-CuentaProveedor/${id}");
    // }

    componentDidMount() {
        CategoriasServices.getListarCategorias().then((res) => {
            this.setState({ categoria: res.data });
        });
    }

    // addCuentaProveedor() {
    //     this.props.history.push("/add-CuentaProveedor");
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Categorias</h2>
                {/* <div className="row">
                    <button className="btn btn-primary" onClick={this.addCuentaProveedor}>Crear una cuenta de proveedor</button>
                </div> */}
                <div className="row table-responsive">
                    <table className="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre categoria</th>
                                <th>Tipo</th>
                                <th>Descripcion</th>
                                {/* <th>Peso (lb)</th> */}
                                {/* <th>Iva</th> */}
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.categoria.map(
                                    categoria =>
                                        <tr key={categoria.id}>
                                            <td>{categoria.nombreCategoria}</td>
                                            <td>{categoria.tipoCategoria}</td>
                                            <td>{categoria.descripcionCategoria}</td>
                                            {/* <td>{categoria.pesocategoria}</td> */}
                                            {/* <td>{categoria.ivacategoria}</td> */}
                                            <td>
                                                <div class="row">
                                                    <div class="col-4 ">
                                                    <a class="text-primary"><i class="fa fa-eye"></i> </a>
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

export default ListarCategorias;
