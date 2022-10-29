import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addPlayer = (addData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/quiz_post',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : addData,
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

export const editPlayer = (updateData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/quiz_edit',
        headers: { 
            'Content-Type': 'application/json'
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

export const getQuestionList = (callback) => {
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/quiz_get',
    };

    axios(config)
    .then(function (res) {
        console.log(res);
        callback(res.data.quiz);
    })
    .catch(function (error) {
        console.log(error);
    });
}