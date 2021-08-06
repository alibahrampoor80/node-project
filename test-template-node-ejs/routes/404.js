const express = require('express');
const routes = express();

routes.get((req, res) => {
    res.render("404.ejs", {
        pagetitle: "صفحه مورد نظر پیدا نشد"
    });
});







module.exports = routes;