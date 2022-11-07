import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addCompetitionAction = (addData, callback, err) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/competition/create',
        headers: { 
            'Content-Type': 'application/json',
            'x-access-token': loginInfo.accessToken
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

export const teamRankingAction = (callback, err) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/team_ranking',
        headers: {
            'x-access-token': loginInfo.accessToken
        }
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

export const playerRankingAction = (callback, err) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/player_ranking',
        headers: {
            'x-access-token': loginInfo.accessToken
        }
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

export const getCompetitionList = (callback, err) => {
    let loginInfo = JSON.parse(localStorage.getItem('admin-auth'));
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/competition/list',
        headers: {
            'x-access-token': loginInfo.accessToken
        }
    };
    
    axios(config)
    .then(function (res) {
        console.log(res);
        res.data.message === 'success' ? callback(res.data.competitions) : err(res.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}