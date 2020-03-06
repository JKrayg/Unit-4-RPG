//Create variables for spongebob characters/
//their helth bars/victories and defeats

var spongebobHealth = 150;
var spongebobAttack = 11;
var spongebobCounter = 15;
var patrickHealth = 100;
var patrickAttack = 8;
var patrickCounter = 8;
var squidwardHealth = 120;
var squidwardAttack = 10
var squidwardCounter = 12;
var planktonHealth = 180;
var planktonAttack = 13;
var planktonCounter = 20;
var victories = 0;
var defeats = 0;

$("#spongebobhealth").text(spongebobHealth);
$("#patrickhealth").text(patrickHealth);
$("#squidwardhealth").text(squidwardHealth);
$("#planktonhealth").text(planktonHealth);

//create a selector for the character you choose
function playerSelection() {
        $("#spongebobCon").on("click", function () {
        $(this).appendTo($("#characterposition"));
        $(this).css("background-color", "lightgreen");
        $("#patrickCon").appendTo($("#enemiesposition"));
        $("#patrickCon").css("background-color", "red");
        $("#squidwardCon").appendTo($("#enemiesposition"));
        $("#squidwardCon").css("background-color", "red");
        $("#planktonCon").appendTo($("#enemiesposition"));
        $("#planktonCon").css("background-color", "red");
    });

    $("#patrickCon").on("click", function () {
        $(this).appendTo($("#characterposition"));
        $(this).css("background-color", "lightgreen");
        $("#spongebobCon").appendTo($("#enemiesposition"));
        $("#spongebobCon").css("background-color", "red");
        $("#squidwardCon").appendTo($("#enemiesposition"));
        $("#squidwardCon").css("background-color", "red");
        $("#planktonCon").appendTo($("#enemiesposition"));
        $("#planktonCon").css("background-color", "red");
    });

    $("#squidwardCon").on("click", function () {
        $(this).appendTo($("#characterposition"));
        $(this).css("background-color", "lightgreen");
        $("#spongebobCon").appendTo($("#enemiesposition"));
        $("#spongebobCon").css("background-color", "red");
        $("#patrickCon").appendTo($("#enemiesposition"));
        $("#patrickCon").css("background-color", "red");
        $("#planktonCon").appendTo($("#enemiesposition"));
        $("#planktonCon").css("background-color", "red");
    });

    $("#planktonCon").on("click", function () {
        $(this).appendTo($("#characterposition"));
        $(this).css("background-color", "lightgreen");
        $("#spongebobCon").appendTo($("#enemiesposition"));
        $("#spongebobCon").css("background-color", "red");
        $("#patrickCon").appendTo($("#enemiesposition"));
        $("#patrickCon").css("background-color", "red");
        $("#sqiudwardCon").appendTo($("#enemiesposition"));
        $("#sqiudwardCon").css("background-color", "red");
    });
}
playerSelection()


//figure out how to change color of character on click

//on.click functions for when they attack eachother
//and how much damage is dealt when attacked

//if else statement on what will happen when they attack eachother

//display winner
