import axios from 'axios';

const LISTAR_ARTICULOS_API = "http://localhost:9000/api/listar_articulos";
const CREAR_ARTICULOS = "http://localhost:9000/api/crear_articulo";
// const ARTICULOS_API_GET_BYID_URL = "http://localhost:8080/api/ARTICULOS";

class ArticuloService{

    getListarArticulos(){
        return axios.get(LISTAR_ARTICULOS_API);
    }

    createArticulos(Articulos){
        return axios.post(CREAR_ARTICULOS, Articulos);
    }

    // getARTICULOSById(ARTICULOSId){
    //     return axios.get(ARTICULOS_API_GET_BYID_URL + '/' + ARTICULOSId);;
    // }

}

export default new ArticuloService()