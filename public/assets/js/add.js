$(document).ready(function() {
    $('#add-btn').on('click', function(event){
        event.preventDefault();

        let newDefinition = {
            topic: $('#topic').val().trim(),
            definition: $('#definition').val().trim(),
            example: $('#example').val().trim(),
            language: $('#language').val().trim()
        };
        $.post("api/definition", newDefinition).then(function(response){
            console.log(response);
        });

        $('#topic').val('');
        $('#definition').val('');
        $('#example').val('');
        $('#language').val('');
    });
  });
