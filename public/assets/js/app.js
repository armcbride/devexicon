$(document).ready(function() {
    function getDefinitions() {
        $.get('/api/definitions/', function(data, status) {
            console.log('Data: ' + data + '\nStatus: ' + status);
        });
    };
    getDefinitions();
});