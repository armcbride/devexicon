$(document).ready(function () {
  let definitions = document.getElementById('table');

  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {
        console.log(res);
        
        // let newDefinition = JSON.stringify(res);
      
        // for(let i = 0; i < res.length; i++) {
        //  definitions.append('<h3>' + res[i].id + '</h3>');
        //  definitions.append('<h3>' + 'Topic: ' + res[i].topic + '</h3>');
        //  definitions.append('<h3>' + 'Definition: ' + res[i].definition + '</h3>');
        //  definitions.append('<h3>' + 'Example: ' + res[i].example + '</h3>');
        //  definitions.append('<h3>' + 'Language: ' + res[i].language + '</h3>');
        //  definitions.append('<h3>' + 'Created: ' + res[i].createdAt + '</h3>');
        //  definitions.append('<h3>' + 'Updated: ' + res[i].updatedAt + '</h3>');
        // };

        // ==============================================================================

        for(let i = 0; i < res.length; i++) {
          let ul = $('<ul/>')
            .appendTo(definitions);
            
          let li = $('<li/>')
            .appendTo(ul);

          // li.append('<h3>' + res[i].id + '</h3>');
          // li.append('<h3>Topic: ' + res[i].topic + '</h3>');
          // li.append('<h3>Definition: ' + res[i].definition + '</h3>');
          // li.append('<h3>Example: ' + res[i].example + '</h3>');
          // li.append('<h3>Language: ' + res[i].language + '</h3>');
          // li.append('<h3>Created: ' + res[i].createdAt + '</h3>');
          // li.append('<h3>Updated: ' + res[i].updatedAt + '</h3>');

          li.append('<p>' + res[i].id + '</p>');
          li.append('<p>Topic: ' + res[i].topic + '</p>');
          li.append('<p>Definition: ' + res[i].definition + '</p>');
          li.append('<p>Example: ' + res[i].example + '</p>');
          li.append('<p>Language: ' + res[i].language + '</p>');
          li.append('<p>Created: ' + res[i].createdAt + '</p>');
          li.append('<p>Updated: ' + res[i].updatedAt + '</p>');

         
         };
// ======================================================================

      });
    };
    getDefinitions();
});