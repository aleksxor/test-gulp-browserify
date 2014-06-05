(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(size, className) {
  var div;
  div = document.createElement('div');
  div.className = className;
  div.style.height = "" + size + "px";
  div.style.width = "" + size + "px";
  return div;
};


},{}],2:[function(require,module,exports){
var el;

el = require('./el');

document.addEventListener('DOMContentLoaded', function() {
  var tEl;
  tEl = el(70, 'ddd');
  return document.body.appendChild(tEl);
});


},{"./el":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9hbGVrc3hvci9Eb2N1bWVudHMvd29yay90ZXN0LWd1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbGVrc3hvci9Eb2N1bWVudHMvd29yay90ZXN0LWd1bHAtYnJvd3NlcmlmeS9zcmMvZWwuY29mZmVlIiwiL2hvbWUvYWxla3N4b3IvRG9jdW1lbnRzL3dvcmsvdGVzdC1ndWxwLWJyb3dzZXJpZnkvc3JjL2ZpcnN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsSUFBRCxFQUFPLFNBQVAsR0FBQTtBQUNiLE1BQUEsR0FBQTtBQUFBLEVBQUEsR0FBQSxHQUFNLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQU4sQ0FBQTtBQUFBLEVBRUEsR0FBRyxDQUFDLFNBQUosR0FBZ0IsU0FGaEIsQ0FBQTtBQUFBLEVBR0EsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFWLEdBQW1CLEVBQUEsR0FBRSxJQUFGLEdBQVEsSUFIM0IsQ0FBQTtBQUFBLEVBSUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFWLEdBQWtCLEVBQUEsR0FBRSxJQUFGLEdBQVEsSUFKMUIsQ0FBQTtTQU1BLElBUGE7QUFBQSxDQUFqQixDQUFBOzs7O0FDQUEsSUFBQSxFQUFBOztBQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsTUFBUixDQUFMLENBQUE7O0FBQUEsUUFFUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxTQUFBLEdBQUE7QUFDMUMsTUFBQSxHQUFBO0FBQUEsRUFBQSxHQUFBLEdBQU0sRUFBQSxDQUFHLEVBQUgsRUFBTyxLQUFQLENBQU4sQ0FBQTtTQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixHQUExQixFQUYwQztBQUFBLENBQTlDLENBRkEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSAoc2l6ZSwgY2xhc3NOYW1lKSAtPlxuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2RpdidcblxuICAgIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCIje3NpemV9cHhcIlxuICAgIGRpdi5zdHlsZS53aWR0aCA9IFwiI3tzaXplfXB4XCJcblxuICAgIGRpdlxuIiwiZWwgPSByZXF1aXJlICcuL2VsJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdET01Db250ZW50TG9hZGVkJywgLT5cbiAgICB0RWwgPSBlbCg3MCwgJ2RkZCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCB0RWxcbiJdfQ==
