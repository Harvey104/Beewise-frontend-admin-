import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback) => {
    const axiosCfg = {
        headers: { Authorization: `Bearer ` }
    };

    axios.post( 
      SERVER_URL + 'api/v1/get_token_payloads',
      uploadData,
      axiosCfg
    ).then((res) => {
      callback();
    }).catch(console.log);
}