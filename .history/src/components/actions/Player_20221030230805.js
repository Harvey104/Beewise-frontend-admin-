import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addPlayerAction = (addData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/register',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : addData,
    };
    
    axios(config)
    .then(function (res) {
        console.log(res);
        res.data.message === 'success' ? callback(res.data) : err(res.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const editPlayerAction = (updateData, callback, err) => {
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

export const getPlayersAction = (callback) => {
    var config = {
        method: 'get',
        url: SERVER_URL + 'user/player_list',
    };

    axios(config)
    .then(function (res) {
        console.log(res);
        callback(res.data.users);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const getPlayersAction = (callback) => {
    var config = {
        method: 'get',
        url: SERVER_URL + 'user/player_list',
    };

    axios(config)
    .then(function (res) {
        console.log(res);
        callback(res.data.users);
    })
    .catch(function (error) {
        console.log(error);
    });
}