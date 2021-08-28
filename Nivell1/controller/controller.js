$(document).ready(function () {
    $.get((URL = "http://api.icndb.com/jokes/1"), function (data) {
      let dataValue = data.value;
      let joke = dataValue.joke;
      document.querySelector("#chiste1").innerHTML = joke;
    });
    $("#chiste").click(function (element) {
      element.preventDefault();
      $.get((URL = "http://api.icndb.com/jokes/random"), function (data) {
        let dataValue = data.value;
        let joke = dataValue.joke;
        document.querySelector("#chiste1").innerHTML = joke;
      });
    });
  });
  