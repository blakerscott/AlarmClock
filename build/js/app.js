(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.clockTime = function(time) {
  this.time = time;
};

},{}],2:[function(require,module,exports){
// function displayTime() {
//     var time = moment().format('HH:mm:ss');
//     $('#clock').html(time);
//     setTimeout(displayTime, 1000);
// }
//
// $(document).ready(function() {
//     displayTime();
// });

var Clock = require('./../js/clock.js').Clock;

$(document).ready(function(){
  var alarm = null;
  $('#confirm').hide();
  $('#alarm-sounding').hide();

    //show clock
  setInterval(function() {
    $('#clockTime').text(moment().format("hh:mm a"));
  }, 1000);

  $('#alarm').submit(function(event){
    event.preventDefault();

    //get alarm and show it
    alarm = $('#alarm-time').val();
    console.log(alarm);
    $('#confirm').show();
    $('#alarm-confirm').text(alarm);
    $('#set-alarm-div').hide();
  });
     function setOffAlarm() {
       if (alarm) {
         if (moment().format("hh:mm a") === alarm) {
           $('#alarm-sounding').show();
           alarm = null;
         }
         else{
           console.log("not time yet");
         }
       }
       else{
         console.log("alarm not set");
       }

     }
     setInterval(setOffAlarm, 2000);
});



},{"./../js/clock.js":1}]},{},[2]);
