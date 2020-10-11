module.exports = app => {

    const personal = require("../controller/personal.js");

    app.get("/emp/:pid",personal.findOne);    
    app.get("/person", personal.findAll);
 
};