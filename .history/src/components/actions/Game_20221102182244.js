import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addCompetitionAction = (addData, callback, err) => {
    var config = {
        method: 'post',
        url: SERVER_URL + 'admin/add_competition',
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
