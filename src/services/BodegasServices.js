import axios from 'axios';

const LISTAR_BODEGAS_API = "http://localhost:9000/api/listar_bodegas/";
const CREARBODEGAS_API_POST_URL = "http://localhost:9000/api/crear_bodegas";
const CREARBODEGAS_API_GET_BYID_URL = "http://localhost:9000/api/actualizar_bodega";

class BodegasService{

    getListarBodegas(){
        return axios.get(LISTAR_BODEGAS_API);
    }

    createBodegas(Bodegas){
        return axios.post(CREARBODEGAS_API_POST_URL, Bodegas);
    }

    getBodegaById(idBodega){
        return axios.get(CREARBODEGAS_API_GET_BYID_URL + '/' + idBodega);
    }

}

export default new BodegasService()