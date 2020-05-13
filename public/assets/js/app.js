$(document).ready(function() {
    function getDefinitions() {
        $.get('/api/definitions/', function(data) {
            console.log(data);
        })
    }
    getDefinitions();
});