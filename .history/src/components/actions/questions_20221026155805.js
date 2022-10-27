import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/quiz_post',
        headers: { 
            'Content-Type': 'application/json'
        },
        // data : uploadData,
        data: {}
    };
    
    axios(config)
    .then(function (res) {
        console.log(res);
        res.message === 'success' ? callback() : err();
        callback();
    })
    .catch(function (error) {
        console.log(error);
    });
}