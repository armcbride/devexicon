$(document).ready(function () {
    function getDefinitions() {
        $.ajax({
          method: "GET",
          url: "/api/definitions/",
        }).then((res) => {
          console.log(res);
        //   div.append('<h3>' + res.Definitions.topic + '</h3>');
        });
      }
      getDefinitions();
})