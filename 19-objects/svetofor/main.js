/*
10s -> 'Green'
2s*2 -> 'Green Blink'
10s -> 'Yellow'
30s -> 'Red'
*/

function showLight(lightName) {
    console.log(lightName)
}

let tfLight = [
    ['Green', 3000],
    ['Green Blink', 1000],
    ['Green Blink', 1000],
    ['Green Blink', 1000],
    ['Yellow', 1000],
    ['Red', 2000]
];

function trafficLight() {
    let light = tfLight.shift();

    setTimeout(function (){
        showLight(light[0]);
        tfLight.push(light);
        trafficLight();
    }, light[1]);
}
trafficLight();



// function trafficLight() {
//     setTimeout(function () {
//         showLight('Green');
//
//         setTimeout(function () {
//             showLight('Green Blink');
//             setTimeout(function () {
//                 showLight('Green Blink');
//
//                 setTimeout(function () {
//                     showLight('Yellow');
//
//                     setTimeout(function () {
//                         showLight('Red');
//                         trafficLight();
//                     }, 5000)
//
//                 }, 2000)
//             }, 1000);
//         }, 1000);
//
//     }, 5000);
// }