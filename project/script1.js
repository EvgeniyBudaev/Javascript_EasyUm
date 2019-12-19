
// IIFE - моментально вызываемая функциая
(function () {
    var myName = 'Petya';

    function sayName(name) {
        console.log('hi ', name);
    }

    sayName(myName);
})();