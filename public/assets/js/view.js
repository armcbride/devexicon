$(document).ready(function () {
  // let list = document.querySelector('.list-group');
  const $deck=$('.deck')
  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {

        res.forEach(definition => {
        //  let li = $('<li/>')
        //   .appendTo(list);

        // <div class= "definitions">${definition.id}</p>
        //   <p>Topic: ${definition.topic}</p>
        //   <p>Definition: ${definition.definition}</p>
        //   <p>Example: <textarea readonly>${definition.example}</textarea></p>
        //   <p>Language: ${definition.language}</p></div>
         

$deck.append(` <div class="card" style="width: 18rem; box-shadow: 5px 10px; margin: 5px;">

<div class="card-body">
  <h3 class="card-title">${definition.language}</h3>
  <p class="card-text">Topic: ${definition.topic}</p>
  <p class="card-text">Definition: ${definition.definition}</p>
  <p class="card-text">Example: <textarea readonly>${definition.example}</textarea></p>
</div>
</div>`)
        });
      });
    }
    getDefinitions();
});