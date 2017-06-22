"use strict";

const
    express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer'),
    favicon = require('serve-favicon'),
    path = require('path'),
    port = process.env.PORT || 9000;


app
    .all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.static('public'))
    .use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico')))


app.listen(port, function () {
    console.log("Adresse du serveur : http://localhost:" + port);
});