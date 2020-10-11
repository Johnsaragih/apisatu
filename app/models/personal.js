const sql = require("./db.js");

//constructor
const Personal = function(personal) {
    this.nama = personal.nama;
    this.pid = personal.pid;
};

Personal.getAll = result => {
    sql.query("SELECT * from absen", (err, res)=> {
        if(err) {
            console.log("error:", err);
            result (null, err);
            return;
        }
        console.log("Personal:",res);
        result(null, res);
    });
};
Personal.findbyPid = (pid, result) => {
        sql.query(`SELECT * FROM personal WHERE pid = "${pid}"`,(err,res)=> {
        if(err) {
            console.log("error:",err);
            result(err,null);
            return;
        }
        if(res.length) {
            console.log("found data:",res[0]);
            result(null, res[0]);
             return;
        }  
        result({ kind: "not_found"}, null);
    });
};

module.exports = Personal;