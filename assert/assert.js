'use strict';

function assert(value, text) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(text));
    var results = document.getElementById("results");
    if (!results) {
      results = document.createElement("ul");
      results.setAttribute('id','results');

      if (!document.body) {
        document.addEventListener('DOMContentLoaded', function() {
          document.body.appendChild(results);
        });
      } else {
        document.body.appendChild(results);
      }
    }
    results.appendChild(li);
  }
  
  function pass(text) { assert(true, text); }
  function fail(text) { assert(false, text); }
  function report(text) { pass(text); }

  /**
   * Compare two arrays.
   * https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe
   * @param {Array} arr1 
   * @param {Array} arr2 
   */
  function compareArrays(arr1, arr2) {
    if(!arr1 || !arr2) return false;
    if(arr1.length != arr2.length) return false;
    var result;
   
   arr1.forEach(function (e1) {
        arr2.forEach( function (e2) {
          if (e1 instanceof Array && e2 instanceof Array && e1.length > 1 && e2.length) {
             result = compareArrays(e1,e2);
          } else if (e1 !== e2 ){
             result = false;
          } else {
             result = true;
          }
     });
    });
   return result;
  }