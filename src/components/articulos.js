// src/components/articulo.js

import React from 'react'

const Articulos = ({ articulos }) => {
    return (

        <div >
            <center><h1 class=" text-danger">Articulos</h1></center>
            {articulos.map((articulo) => (
                <div class="container">
                    <div class="col-lg">
                        <br></br>
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre Articulo</th>
                                    <th>Cantidad</th>
                                    <th>Precio $</th>
                                    <th>Peso (lb)</th>
                                    <th>Iva</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{articulo.nombreArticulo}</td>
                                    <td>{articulo.cantidadArticulo}</td>
                                    <td>{articulo.precioArticulo}</td>
                                    <td>{articulo.pesoArticulo}</td>
                                    <td>{articulo.ivaArticulo}</td>
                                    <td>
                                        <a class="btn btn-primary col-sm-9 "  ><i class="fa fa-eye"></i> Ver</a>
                                        <br></br>
                                        <a class="btn btn-secondary col-sm-9 "  ><i class="fa fa-edit"></i> Editar</a>
                                        <br></br>
                                        <a class="btn btn-danger col-sm-9" ><i class="fa fa-trash"></i> Eliminar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Articulos