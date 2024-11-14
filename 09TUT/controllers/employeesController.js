const data = {
    employees = require('../model/employees.json');
    setEmployees: function (data) {this.employees = data}
}

const getAllEmployees = (req, res)=>{
    res.json(data.employees); 
}
createNewEmployee = (req, res)=>{
    res.json({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName
    });
}
const updateEmployee = (req, res)=>{
    res.json({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName
    });
}
const deleteEmployee = (req, res)=>{
    res.json({"id":req.body.id});
}
const getEmployee = (req, res)=>{
    res.json({"id":req.params.id});
}
module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}