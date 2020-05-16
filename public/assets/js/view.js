$(document).ready(function () {
  let definitions = document.getElementById('table');

  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {
        console.log(res);
        
        let newDefinition = JSON.stringify(res);
      
        for(let i = 0; i < res.length; i++) {
         definitions.append('<h3>' + res[i].id + '</h3>');
         definitions.append('<h3>' + 'Topic: ' + res[i].topic + '</h3>');
         definitions.append('<h3>' + 'Definition: ' + res[i].definition + '</h3>');
         definitions.append('<h3>' + 'Example: ' + res[i].example + '</h3>');
         definitions.append('<h3>' + 'Language: ' + res[i].language + '</h3>');
         definitions.append('<h3>' + 'Created: ' + res[i].createdAt + '</h3>');
         definitions.append('<h3>' + 'Updated: ' + res[i].updatedAt + '</h3>');
        };
      });
    };
    getDefinitions();
});