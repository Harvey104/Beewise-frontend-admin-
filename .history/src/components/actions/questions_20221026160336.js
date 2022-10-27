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
    //     res.message === 'success' ? callback() : err();
    //     callback();
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
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
  url: 'http://10.10.13.10:8080/api/admin/quiz_post',
  headers: { 
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