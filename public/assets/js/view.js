$(document).ready(function () {
  let list = document.querySelector('.list-group');

  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {

        res.forEach(definition => {
         let li = $('<li/>')
          .appendTo(list);

          li.append('<p>' + definition.id + '</p>');
          li.append('<p>Topic: ' + definition.topic + '</p>');
          li.append('<p>Definition: ' + definition.definition + '</p>');
          li.append('<p>Example: ' + definition.example + '</p>');
          li.append('<p>Language: ' + definition.language + '</p>');
          li.append('<p>Created: ' + definition.createdAt + '</p>');
          li.append('<p>Updated: ' + definition.updatedAt + '</p>');
        });
      });
    };
    getDefinitions();
});