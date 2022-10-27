import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/quiz_post',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : uploadData
    };
    
    axios(config)
    .then(function (response) {
        callback();
    })
    .catch(function (error) {
        console.log(error);
    });
}