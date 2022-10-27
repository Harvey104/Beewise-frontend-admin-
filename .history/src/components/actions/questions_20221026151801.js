import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback) => {
    const axiosCfg = {
        headers: { Authorization: `Bearer ` }
    };

    axios.post( 
      SERVER_URL + 'http://localhost:8080/api/admin/quiz_post',
      uploadData,
      axiosCfg
    ).then((res) => {
      callback();
    }).catch(console.log);
}