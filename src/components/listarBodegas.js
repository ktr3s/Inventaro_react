import React, { Component } from 'react';
import BodegasServices from '../services/BodegasServices';
import axios from 'axios';

class ListarBodegas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bodega: []
        }

        this.addBodega = this.addBodega.bind(this);
        this.editBodega = this.editBodega.bind(this);
    }

    editBodega(idBodega) {
        this.props.history.push("/actualizar-bodega/${id}");
    }

    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        console.log(this.state.busqueda)
    }
    filter(event) {
        console.log(event.target.value)

        var text = event.target.value;
        const data = this.state.AjustesBackup;

        const newData = data.filter(function (item) {
            const itemData = item.fechaAjuste.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1

        })

        this.setState({
            ajustes: newData,
            textBuscar: text
        })
    }

    componentDidMount() {
        BodegasServices.getListarBodegas().then((res) => {
            this.setState({ bodega: res.data });
        });
    }

    eliminarBodega = async (idBodega) => {
        var opcion = window.confirm("La bodega se eliminara. ¿Desea continuar?");
        if (opcion == true) {
            await axios.delete('http://localhost:9000/api/borrar_bodega/' + idBodega);
            window.location.href = '/listar-bodegas';
        }
    }

    addBodega() {
        this.props.history.push("/crear-bodega");
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Bodegas</h2>
                <div className="row">
                    <div class="col">
                        <button className="btn btn-primary" onClick={this.addBodega}><i class="fas fa-plus"></i> Crear una bodega</button>
                    </div>
                    <div class="col">
                        <div class="input-group">
                            <div class="form-outline">
                                <input 
                                type="search"
                                placeholder="Buscar"
                                class="form-control"
                                name="busqueda"
                                value={this.state.text}
                                onChange={(text) => this.filter(text)}
                                 id="form1" />
                                {/* <label class="form-label" for="form1">Search</label> */}
                            </div>
                            <button type="button" class="btn btn-primary">
                            {" "}<i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

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
                                        <tr key={bodega.idBodega}>
                                            <td>{bodega.nombreBodega}</td>
                                            <td>{bodega.tipoBodega}</td>
                                            <td>{bodega.capacidadBodega}</td>
                                            <td>{bodega.descripcionBodega}</td>
                                            <td>{bodega.direccionBodega}</td>
                                            <td>
                                                <div class="row">
                                                    {/* <div class="col-4 ">
                                                        <a class="text-primary"><i class="fa fa-eye "></i> </a>
                                                    </div> */}
                                                    <div class="col-4">
                                                        <a class="text-success" onClick={ () => this.editBodega(bodega.idBodega)} ><i class="fa fa-edit"></i> </a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="text-danger" onClick={() => this.eliminarBodega(bodega.idBodega)}><i class="fa fa-trash"></i> </a>
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
