var code = document.getElementById("code"),
    view = document.getElementById("view");
var template = "<html>\n  <body>\n    \n  </body>\n</html>";

function loadData() {
    var data = localStorage.getItem("code");
    if (data == undefined) {
        code.value = template;
    } else {
        code.value = data;
    }
}

function saveData() {
    localStorage.setItem("code", code.value);
}

function run() {
    view.contentDocument.body.innerHTML = code.value;
}