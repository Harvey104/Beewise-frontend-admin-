import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const addCompetition = (addData, callback, err) => {
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
