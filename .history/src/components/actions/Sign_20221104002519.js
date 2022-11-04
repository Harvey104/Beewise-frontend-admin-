import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const registerAction = (uploadData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/register',
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

export const loginAction = (loginData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'super/auth/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : loginData,
    };
    
    axios(config)
    .then(function (res) {
        console.log(res);
        res.data.message === 'success' ? callback(res.data.admin) : err();
    })
    .catch(function (error) {
        console.log(error);
    });
}
