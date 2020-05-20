let html= $("#html");
let css= $('#css');
let javascript= $("#javascript");

let search= html || css || javascript;

$(document).ready(function(){
function getLanguage(){

        $.ajax({
            method: "GET",
            url: `api/definitions/language/${search}`
        })
}s


})