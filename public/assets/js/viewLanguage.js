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
                htmlData.append(`<div style="font-family: 'Balsamiq Sans', cursive; font-size: 18px;"><p style= "text-decoration: underline;">${language.topic}</p>
                <p><div style= "font-weight: bold;">Definition:</div><br> ${language.definition}</p>
                <p><div style= "font-weight: bold;">Example:</div><br> <textarea readonly>${language.example}</textarea></p>
                <p><div style= "font-weight: bold;">Language:</div> ${language.language}</p></div>`);
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


