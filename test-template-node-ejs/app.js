const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const homeRoutes = require('./routes/home');
const loginRoutes = require('./routes/login');

const {
    setStatic
} = require('./utils/static');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(homeRoutes);
app.use(loginRoutes);


setStatic(app);


app.use((req, res) => {
    // res.sendFile(path.join(__dirname,"../", "views", "404.ejs"))
    res.render("404", {
        pagetitle: "یافت نشد!"
    });

});
app.listen(3000);