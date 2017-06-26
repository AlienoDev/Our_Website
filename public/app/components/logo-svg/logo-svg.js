"use strict";

angular.module("alienodev")
    .component("logoSvg", {
        templateUrl: "app/components/logo-svg/logo-svg.html",
        controller: Logo
    })


function Logo() {
    const alien = new Vivus('alien', {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    })

    setInterval(function(){
         alien.play(-3)
         setTimeout(() => alien.play(), 2000)
    },7000)
       
}
