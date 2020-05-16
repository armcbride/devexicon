$(document).ready(function () {
  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {
        console.log(res);
      });
    };
    getDefinitions();
});