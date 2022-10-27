import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback) => {
    var config = {
        method: 'post',
        url: 'http://localhost:8080/api/admin/quiz_post',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : uploadData
    };
    
    axios(config)
    .then(function (response) {
        
    })
    .catch(function (error) {
    console.log(error);
    });
}