let table = $('#table');

$(document).ready(function () {
    let table = $('#table');

    $('.language').on('click', function() {
        let languageSearch = $(this).html();

        $.get('/api/definitions/language/' + languageSearch, function(res) {
            console.log(res);
            res.forEach(language => {
                table.append(`<p>${language.id}</p>
                                <p>Topic: ${language.topic}</p>
                                <p>Definition: ${language.definition}</p>
                                <p>Example: <textarea>${language.example}</textarea></p>
                                <p>Language: ${language.language}</p>`);
            });
        });
    });
});
