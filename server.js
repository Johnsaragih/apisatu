const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Route

app.get("/", (req,res)=> {
    res.json({ message : "Welcome to apisatu"});
});
require("./app/routes/personal.js")(app);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});
