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
    var config = {
        method: 'get',
        url: SERVER_URL + 'admin/team_ranking',
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
        let pending = [];
        let active = [];
        let finished = [];
        res.data.competitions.map((compete) => {
            if (new Date(compete.startDate) > new Date()) {
                pending.push(compete);
            }
            if (new Date(compete.startDate) > new Date() && new Date(compete.startDate) > new Date) {
                pending.push(compete);
            }
        });
        res.data.message === 'success' ? callback(res.data.competitions) : err(res.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}