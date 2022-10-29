import axios from 'axios';
import {SERVER_URL} from '../../constant';

export const excelDataUpload = (uploadData, callback, err) => {
    // var config = {
    //     method: 'post',
    //     url: SERVER_URL + 'admin/quiz_post',
    //     headers: { 
    //         'Content-Type': 'application/json'
    //     },
    //     data : uploadData,
    // };
    
    // axios(config)
    // .then(function (res) {
    //     console.log(res);
    //     res.data.message === 'success' ? callback() : err();
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    // var axios = require('axios');
var data = JSON.stringify([
  {
    "category": "Geografía",
    "duration": 10,
    "firstAnswer": "Tornados",
    "firstAnswerAccuracy": 1,
    "fourthAnswer": "Ninguna",
    "fourthAnswerAccuracy": 0,
    "question": "¿Cuáles fueron los desastres naturales que más destruyeron ciudades en el Siglo XX?",
    "secondAnswer": "Incendios",
    "secondAnswerAccuracy": 0,
    "thirdAnswer": "Terremotos",
    "thirdAnswerAccuracy": 0,
    "type": 1,
    "videoUrl": ""
  }
]);

var config = {
  method: 'post',
  url: 'http://3.25.78.32:8080/api/admin/quiz_post',
  headers: { 
    // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2NjU0MDI1LCJleHAiOjE2NjY3NDA0MjV9.C7v1UrVeMMzCDAr5QQ-shKvC8DIfkMmp8ccbZeHs3YE', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

export const editQuestionAction = (updateData, callback, err) => {
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