"use strict";

angular.module("alienodev")
    .component("team", {
        templateUrl: "app/components/team/team.html",
        controller: Team
    })


function Team() {
    new Vivus('test', {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE });
}
