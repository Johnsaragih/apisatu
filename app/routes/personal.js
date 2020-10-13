module.exports = app => {

    const personal = require("../controller/personal.js");

    app.get("/emp/:pid",personal.findOne);    
    app.get("/person", personal.findAll);
    app.delete("/person/:pid", personal.delete);
    app.put("/person/:pid",personal.update);    
    app.post("/person", personal.create);
    app.delete("/person", personal.deleteAll);
};