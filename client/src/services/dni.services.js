import axios from 'axios'

export default class DniService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5500/api/ocr',
            withCredentials: true
        })
    }


    //saveDNI = img => this.api.get(`saveDNI/${img}`) 
    createNewDoc = photourl => this.api.post('/doc',photourl)
    updateNewDoc = id => this.api.put(`/form/${id}`)

    showCreatedDoc = photourl => this.api.get('/showdoc',photourl)
    getListDoc = () => this.api.get('/listarchive') //FUNCIONA
    getOneDoc = id => this.api.get(`/detailsdni/${id}`)
    editDoc = (id, dni) => this.api.put(`/editdoc/${id}`,dni)
    deleteDoc = id => this.api.delete(`/detailsdni/delete/${id}`)
   



}