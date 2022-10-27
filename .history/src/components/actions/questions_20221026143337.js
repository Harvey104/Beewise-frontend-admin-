import axios from 'axios';

export const excelDataUpload = (uploadData) => {
    const axiosCfg = {
        headers: { Authorization: `Bearer ` }
    };

    const bodyParameters = {
      key: "value"
    };

    axios.post( 
      'http://localhost:8000/api/v1/get_token_payloads',
      bodyParameters,
      axiosCfg
    ).then((res) => {
      setProcess(100);
    }).catch(console.log);
}