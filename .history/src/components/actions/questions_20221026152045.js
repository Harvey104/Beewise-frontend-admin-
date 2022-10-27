import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback) => {
    const axiosCfg = {
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    axios.post( 
      SERVER_URL + '/api/admin/quiz_post',
      uploadData,
      axiosCfg
    ).then((res) => {
      callback();
    }).catch(console.log);
}