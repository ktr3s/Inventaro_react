import axios from 'axios';

const LISTAR_BODEGAS_API = "http://localhost:9000/api/listar_bodegas/";
// const CUENTAPROVEEDORES_API_POST_URL = "http://localhost:8080/api/addcuentaProveedores";
// const CUENTAPROVEEDORES_API_GET_BYID_URL = "http://localhost:8080/api/cuentaproveedores";

class BodegasService{

    getListarBodegas(){
        return axios.get(LISTAR_BODEGAS_API);
    }

    // createCuentaProveedores(cuentaProveedores){
    //     return axios.post(CUENTAPROVEEDORES_API_POST_URL, cuentaProveedores);
    // }

    // getCuentaProveedoresById(cuentaProveedoresId){
    //     return axios.get(CUENTAPROVEEDORES_API_GET_BYID_URL + '/' + cuentaProveedoresId);;
    // }

}

export default new BodegasService()