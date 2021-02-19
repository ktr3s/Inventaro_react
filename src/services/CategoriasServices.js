import axios from 'axios';

const LISTAR_Categorias_API = "http://localhost:9000/api/listar_categorias/";
const CREARCATEGORIA_API_POST_URL = "http://localhost:9000/api/crear_categoria";
// const CREARCATEGORIA_API_GET_BYID_URL = "http://localhost:8080/api/CREARCATEGORIA";

class CategoriasService{

    getListarCategorias(){
        return axios.get(LISTAR_Categorias_API);
    }

    createCategoria(Categoria){
        return axios.post(CREARCATEGORIA_API_POST_URL, Categoria);
    }

    // getCREARCATEGORIAById(CREARCATEGORIAId){
    //     return axios.get(CREARCATEGORIA_API_GET_BYID_URL + '/' + CREARCATEGORIAId);;
    // }

}

export default new CategoriasService()