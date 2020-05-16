$(document).ready(function () {
  let definitions = document.getElementById('table');

  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {
        console.log(res);
        let newDefinition = JSON.stringify(res);
        definitions.append(newDefinition);
      });
    };
    getDefinitions();
});