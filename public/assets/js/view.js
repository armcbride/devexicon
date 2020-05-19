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

li.append(`<div class= "definitions">${definition.id}</p>
          <p>Topic: ${definition.topic}</p>
          <p>Definition: ${definition.definition}</p>
          <p>Example: <textarea>${definition.example}</textarea></p>
          <p>Language: ${definition.language}</p>
          <p>Created: ${definition.createdAt}</p>
          <p>Updated: ${definition.updatedAt}</p></div>`)
        });
      });
    };
    getDefinitions();
});