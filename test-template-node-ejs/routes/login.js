const express = require('express');
const routes = express();

routes.get("/login", (req, res) => {


    res.render("login.ejs", {
        pagetitle: "صفحه ورود به سایت"
    });

});

module.exports = routes;