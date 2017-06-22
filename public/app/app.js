'use strict';


const config = ["$stateProvider", "$urlRouterProvider", Config];


angular
    .module("alienodev", ["ngAnimate", "ngResource", "ngCookies", "ui.router"])
    .config(config)


function Config($stateProvider, $urlRouterProvider) {
    const states = [
        {
            name: "fr",
            url: "/",
            component: "fr"
        },
        {
            name: "en",
            url: "/en",
            component: "en"
        }
    ];

    $urlRouterProvider.otherwise("/");

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

};
