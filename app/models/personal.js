const personal = require("../routes/personal.js");
const sql = require("./db.js");

//constructor
const Personal = function(personal) {
    this.nama = personal.nama;
    this.pid = personal.pid;
    this.kota = personal.kota;
    this.agama = personal.agama;
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
        sql.query(`SELECT * FROM personal WHERE pid = ?`,pid,(err,res)=> {
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

Personal.remove = (pid, result)=> {
    sql.query("delete from absen where pid = ?", pid, (err,res)=>{
        if(err) {
            console.log("error:",err); 
            result(null, err);
            return;
        }
        if(res.affectedRows ==0) {
            result({ kind: "not_found"}, null);
            return;
        }
        console.log("delete sukses");
        result(null, res);
    });
};

Personal.updatebyPid = (pid,personal,result)=> {
    sql.query("update personal set kota =?,agama=? where pid =?",
    [personal.kota,personal.agama,pid], (err, res)=> {
        if(err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        if(res.affectedRows==0) {
            result({kind: "not_found"},null);
            return;
        }
        console.log("update sukses",{pid:pid,...personal});
        result(null,{pid:pid, ...personal});
    });    
    
};
module.exports = Personal;