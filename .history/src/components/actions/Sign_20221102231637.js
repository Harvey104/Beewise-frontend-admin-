import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const registerAction = (uploadData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/quiz_post',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : uploadData,
    };
    
    axios(config)
    .then(function (res) {
        console.log(res);
        res.data.message === 'success' ? callback() : err();
    })
    .catch(function (error) {
        console.log(error);
    });
}
