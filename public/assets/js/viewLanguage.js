let table = $('#table');

$(document).ready(function () {
    let table = $('#table');

    $('.language').on('click', function() {
        let languageSearch = $(this).html();

        $.get('/api/definitions/language/' + languageSearch, function(res) {
            console.log(res);
            res.forEach(language => {
                table.append('<p>' + language.id + '</p>');
                table.append('<p>Topic: ' + language.topic + '</p>');
                table.append('<p>Definition: ' + language.definition + '</p>');
                table.append('<p>Example:<textarea> ' + language.example + '</textarea></p>');
                table.append('<p>Language: ' + language.language + '</p>');
                table.append('<p>Created At: ' + language.createdAt + '</p>');
                table.append('<p>Updated At: ' + language.updatedAt + '</p>');
            });
        });
    });
});