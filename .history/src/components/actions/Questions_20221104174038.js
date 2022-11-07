import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addQuestionAction = (uploadData, callback, err) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/create_topic',
        headers: { 
            'Content-Type': 'application/json',
            'x-access-token': loginInfo.accessToken
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

export const editQuestionAction = (updateData, callback, err) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/quiz_edit',
        headers: { 
            'Content-Type': 'application/json',
            'x-access-token': loginInfo.accessToken
        },
        data : updateData,
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

export const getTopicsAction = (callback) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/topic_get',
        headers: { 
            'x-access-token': loginInfo.accessToken
        },
    };

    axios(config)
    .then(function (res) {
        console.log(res);
        callback(res.data.librari);
    })
    .catch(function (error) {
        console.log(error);
    });
}