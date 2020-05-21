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
         

$deck.append(` <div class="card" style="width: 18rem;">

<div class="card-body">
  <h5 class="card-title">Topic: ${definition.language}</h5>
  <p class="card-text">Example: <textarea readonly>${definition.example}</textarea></p>
  <p class="card-text">Definition: ${definition.definition}</p>
  <p class="card-text">Topic: ${definition.topic}</p>
</div>
</div>`)
        });
      });
    };
    getDefinitions();
});