import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addPlayerAction = (addData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/user/invite',
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
        url: SERVER_URL + 'admin/user/list',
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

export const changeStateAction = (data, callback) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'user/change_state',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data,
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

export const addAdminAction = (addData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/add/admini',
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

export const getAdminsAction = (callback) => {
    var config = {
        method: 'get',
        url: SERVER_URL + 'user/admin_list',
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

export const removeAdminsAction = (ids, callback) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/remove/admini',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : ids,
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

export const playerRankingAction = (callback, err) => {
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/player_ranking',
    };
    
    axios(config)
    .then(function (res) {
        console.log(res);
        res.data.message === 'success' ? callback(res.data.list) : err(res.data.list);
    })
    .catch(function (error) {
        console.log(error);
    });
}