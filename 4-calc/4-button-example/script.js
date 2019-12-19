function sayHi() {
    var inpName = document.querySelector('.input-name');
    var helloStr = "Hello my " + inpName.value;
    alert(helloStr);
}

function onDocumentLoad() {
    var myButton = document.getElementById('my-button');
    myButton.addEventListener('click', sayHi);
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);