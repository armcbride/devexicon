let htmlData = $('#htmlData');
let cssData = $('#cssData');
let javascriptData = $('#javascriptData');

$(document).ready(function () {

    $('#html').on('click', function() {
        htmlData.empty();

        let languageSearch = $(this).html();

        $.get('/api/definitions/language/' + languageSearch, function(res) {
            console.log(res);
            res.forEach(language => {
                htmlData.append(`<p style="font-size: 18px">${language.topic}</p>
                <p style="font-size: 18px">Definition: ${language.definition}</p>
                <p style="font-size: 18px">Example: <textarea readonly>${language.example}</textarea></p>
                <p style="font-size: 18px">Language: ${language.language}</p>`);
            });
        });
    });

    $('#css').on('click', function() {
        cssData.empty();

        let languageSearch = $(this).html();

        $.get('/api/definitions/language/' + languageSearch, function(res) {
            console.log(res);
            res.forEach(language => {
                cssData.append(`<p>${language.id}</p>
                <p>Topic: ${language.topic}</p>
                <p>Definition: ${language.definition}</p>
                <p>Example: <textarea readonly>${language.example}</textarea></p>
                <p>Language: ${language.language}</p>`);
            });
        });
    });

    $('#javascript').on('click', function() {
        javascriptData.empty();
        
        let languageSearch = $(this).html();

        $.get('/api/definitions/language/' + languageSearch, function(res) {
            console.log(res);
            res.forEach(language => {
                javascriptData.append(`<p>${language.id}</p>
                <p>Topic: ${language.topic}</p>
                <p>Definition: ${language.definition}</p>
                <p>Example: <textarea readonly>${language.example}</textarea></p>
                <p>Language: ${language.language}</p>`);
            });
        });
    });
});


