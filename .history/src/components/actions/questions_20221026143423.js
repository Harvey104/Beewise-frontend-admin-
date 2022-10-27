import axios from 'axios';

export const excelDataUpload = (uploadData, ) => {
    const axiosCfg = {
        headers: { Authorization: `Bearer ` }
    };

    axios.post( 
      'http://localhost:8000/api/v1/get_token_payloads',
      uploadData,
      axiosCfg
    ).then((res) => {
      setProcess(100);
    }).catch(console.log);
}