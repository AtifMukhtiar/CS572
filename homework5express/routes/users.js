const axios = require('axios');

var express = require('express');
var router = express.Router({caseSensitive:false});
let response;
/* GET users listing. */
router.get('/', function (req, res, next) {

    response = res;
    getDataFromServer();


});


async function getDataFromServer() {
    try {
        let jsonData = await axios.get('https://randomuser.me/api/?results=1');
        console.log(`Data : ${JSON.stringify(jsonData.data)}`);
        response.send(JSON.stringify(jsonData.data));
    } catch (err) {
        console.log(err);
    }


    /*  .then(function (response) {
          let jsonData = JSON.stringify(response.data);
          response.send(jsonData);

      })
      .catch(function (error) {
          console.log(error);
      });*/
}// end of getDataFromServer

module.exports = router;
