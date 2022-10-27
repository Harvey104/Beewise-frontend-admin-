import axios from 'axios';
import {} from '..'

export const excelDataUpload = (uploadData, callback) => {
    const axiosCfg = {
        headers: { Authorization: `Bearer ` }
    };

    axios.post( 
      'http://localhost:8000/api/v1/get_token_payloads',
      uploadData,
      axiosCfg
    ).then((res) => {
      callback();
    }).catch(console.log);
}