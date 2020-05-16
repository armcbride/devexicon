// $(document).ready(function() {

//      function getDefinitions() {
//     $.ajax({
//       method: "GET",
//       url: "/api/definitions/",
//     }).then((res) => {
//       console.log(res);
//     //   div.append('<h3>' + res.Definitions.topic + '</h3>');
//     });
//   }
//     getDefinitions();
    
//     $('#add-btn').on('click', function(event){
//         event.preventDefault();

//         let newDefinition = {
//             topic: $('#topic').val().trim(),
//             definition: $('#definition').val().trim(),
//             example: $('#example').val().trim(),
//             language: $('#language').val().trim()
//         };
//         $.post("api/definition", newDefinition).then(function(response){
//             console.log(response);
//         });

//         $('#topic').val('');
//         $('#definition').val('');
//         $('#example').val('');
//         $('#language').val('');
//     });
// });

$(document).ready(function () {
    let div = document.getElementById('getDefinitions');

  function createDefinitions() {
    // $(".button").on("click", (event) => {
    //   event.preventDefault();

    //   var newTopic = {
    //     topic: $("#topic").val().trim(),
    //   };

    $.ajax("/api/definition", {
      method: "POST",
      data: 
      { 
        topic: "Variables", 
        definition: 'Stores data values that can be used to add dynanicism to the application.',
        example: 'var score = 0',
        language: 'Javascript'
      },
    }).then((res) => {
      console.log(res);
    });
    // });
  }
  createDefinitions();
});
