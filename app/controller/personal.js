const Personal = require("../models/personal.js");

exports.findOne = (req, res) => {
    Personal.findbyPid(req.params.pid, (err,data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found emplo with pid ${req.params.pid}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Personal with NO id " + req.params.pid
                });
            }
        } else {
            res.send(data);
        }
});
};

exports.findAll = (req, res)=> {
    Personal.getAll((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || "Terjadi error"
            });
        } else {
            res.send(data);
        }
    });
};