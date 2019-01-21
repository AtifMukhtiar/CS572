const express = require('express');
const Joi = require('joi');

const Course = require('../../pojo/Course');
const ResponseJson = require('../../models/ResponseJson');
const Keys = require('../../models/Keys');

const route = express.Router();

let course = new Course();
let responseJson = new ResponseJson();

/***
 * JSON DATA FORMAT FOR POST
 * {
	"ID":2,
	"name":"Mukhtiar",
	"grade":"A",
	"courseCode":"CS572",
	"courseName":"MWA"

}
 */


route.get('/', function (req, res, next) {
    let response = responseJson.getAllData();
    res.status(200).send(response);
});

route.get('/:id/', function (req, res, next) {
    console.log(req.params.id);
    let response = responseJson.getGradeById(req.params.id);
    res.status(200).send(response);
});

route.post('/', validation, handlerPostRequest, errorMethod);


const schema = Joi.object().keys({
    ID: Joi.number().required(),
    name: Joi.string().required(),
    grade: Joi.string().required(),
    courseCode: Joi.string().required(),
    courseName: Joi.string().required()
});

function validation(req, res, next) {
    course = req.body;
    Joi.validate(course, schema, function (err, value) {
        if (err === null) {
            return next();
        } else {
            return next(err);
        }
    });

}// end of validation
function errorMethod(err, req, res, next) {
    let response = responseJson.getPostError(err);
    res.status(400).send(response);
}

function handlerPostRequest(req, res) {
    course = req.body;
    let response = responseJson.getPostData(course);
    res.status(200).send(response);
}

route.put('/:id', function (req, res, next) {
    course = req.body;
    let response = responseJson.updateDataById(req.params.id, course);
    res.status(200).send(response)
});

route.delete('/:id', function (req, res, next) {
    let response = responseJson.deleteById(req.params.id);
    res.status(200).send(response)
});

module.exports = route;
