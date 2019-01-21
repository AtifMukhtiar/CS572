const Response = require('./Response');
const Course = require('../pojo/Course');
const Keys = require('../models/Keys');

let course = new Course();
let response = new Response();

let responseArray = [];
let idGrade;
let itemPosition;

class ResponseJson {
    constructor() {
        responseArray = [];
        this.data = {};
    }

    getAllData() {
        if (responseArray.length > 0) {
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, responseArray);
            return response;
        } else {
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, {});
            return response;
        }
    }

    getGradeById(id) {
        idGrade = undefined;
        responseArray.forEach(function (grade) {
            if (grade.ID == id) {
                idGrade = grade;
            }
        });
        if (idGrade === undefined) {
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, {});
            return response;
        } else {
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, idGrade);
            return response;
        }
    }

    getPostData(data) {
        course = data;
        responseArray.push(course);
        response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, responseArray);
        return response;
    }

    getPostError(message) {
        response.getResponse(Keys.Inetegers.ERROR, message, {});
        return response;
    }

    updateDataById(id, data) {
        idGrade = undefined;
        itemPosition = undefined;
        responseArray.forEach(function (grade, position) {
            if (grade.ID == id) {
                idGrade = grade;
                itemPosition = position;
            }
        });

        if (idGrade === undefined) {
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, {});
            return response;
        } else {
            responseArray[itemPosition] = data;
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, responseArray);
            return response;
        }
    }

    deleteById(id) {
        idGrade = undefined;
        responseArray.forEach(function (grade, position) {
            if (grade.ID == id) {
                idGrade = id;
            }
        });

        console.log(idGrade)
        if (idGrade === undefined) {
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, {});
            return response;
        } else {
            responseArray = responseArray.filter(grade => grade.ID != idGrade);
            response.getResponse(Keys.Inetegers.STATUS, Keys.Strings.SUCCESS, responseArray.length == 0 ? {} : responseArray);
            return response;
        }

    }


}

module.exports = ResponseJson;