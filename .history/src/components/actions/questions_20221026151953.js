import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback) => {
    const axiosCfg = {
        headers: { Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2NjU0MDI1LCJleHAiOjE2NjY3NDA0MjV9.C7v1UrVeMMzCDAr5QQ-shKvC8DIfkMmp8ccbZeHs3YE` }
    };

    axios.post( 
      SERVER_URL + '/api/admin/quiz_post',
      uploadData,
      axiosCfg
    ).then((res) => {
      callback();
    }).catch(console.log);
}