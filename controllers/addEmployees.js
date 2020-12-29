const Employee = require("../models/employeeSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");


const addEmployees = (req, res, next) => {
     
      new Employee(req.body)
        .save()
        .then((data) => {
            sendResponse(200, "Employee added Succesfully", data ,req, res);
        })
        .catch((err) => {
            return sendErrorMessage(
                new AppError(400, "unsuccessful", "request body is inavlid"),
                req,
                res
              );
        });
    }

    module.exports.addEmployees=addEmployees;