const express = require('express');
const routes = express();


routes.get("/", (req, res) => {
    res.render("index.ejs", {
        pagetitle: "صفحه اصلی سایت"
    });
});





module.exports = routes;