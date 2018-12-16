'use strict';

module.exports = function(Employee) {

    Employee.findSalary = function(value , cb) {

      Employee.find({
          where : {
            salary : {
                gte : value
            }
          }

      }, cb) ; 
    };

    Employee.remoteMethod("findSalary", {
        accepts:{
            arg:"salary",
            type: "number"
        },
        returns: {
            arg:"salarys",
            type: "array"
        },
        http:{
            path: "/find-salary",
            verb: "get"
        }
    });


};
