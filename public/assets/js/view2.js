$(document).ready(function () {
    // let list = document.querySelector('.list-group');
    const $deck=$('.deck');
    function getDefinitions() {
        $.ajax({
          method: "GET",
          url: "/api/definitions/",
        }).then((res) => {
  
          res.forEach(definition => {
          //  let li = $('<li/>')
          //   .appendTo(list);
    $deck.append
    (`  <div id="html" class="container-fluid bg-warning" style="padding-top:70px;padding-bottom:70px">
    <h1>${definition.language}</h1>
    <span class="badge badge-primary">Topic: ${definition.topic}</span>
    <p>${definition.definition}</p>
    <div>Example: <textarea readonly>${definition.example}</div>
    </div>
    <div id="css" class="container-fluid bg-primary" style="color:white;padding-top:70px;padding-bottom:70px">
        <h1 style="color:white">CSS</h1>
        <p>stuff</p>
        </div>
        <div id="javascript" class="container-fluid bg-danger" style="padding-top:70px;padding-bottom:70px">
            <h1>Javascript</h1>
            <p>stuff</p>
            </div>`)    




//   $deck.append
//   (`<div class="uk-card uk-card-hover uk-card-body uk-section uk-preserve-color uk-section-primary uk-width-1-2@m">
//   <div class="uk-card-header">
//       <div class="uk-card-badge uk-label">${definition.language}</div>
//       <h3 class="uk-card-title">Topic: ${definition.topic}</h3>
//       <p>Definition: ${definition.definition}</p>
//       <div>Example: <textarea readonly>${definition.example}</div>
//       <div class="uk-card-footer"></div>
//   </div>`);
  
  
          });
        });
      }
      getDefinitions();
  });