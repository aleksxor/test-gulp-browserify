(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var className, div, divSize;

className = 'ddd';

divSize = 70;

div = document.createElement('div');

div.className = className;

div.style.height = "" + divSize + "px";

div.style.width = "" + divSize + "px";

document.addEventListener('DOMContentLoaded', function() {
  return document.body.appendChild(div);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuanMiLCJzb3VyY2VzIjpbImZpcnN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHVCQUFBOztBQUFBLFNBQUEsR0FBWSxLQUFaLENBQUE7O0FBQUEsT0FDQSxHQUFVLEVBRFYsQ0FBQTs7QUFBQSxHQUVBLEdBQU0sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FGTixDQUFBOztBQUFBLEdBSUcsQ0FBQyxTQUFKLEdBQWdCLFNBSmhCLENBQUE7O0FBQUEsR0FLRyxDQUFDLEtBQUssQ0FBQyxNQUFWLEdBQW1CLEVBQUEsR0FBRSxPQUFGLEdBQVcsSUFMOUIsQ0FBQTs7QUFBQSxHQU1HLENBQUMsS0FBSyxDQUFDLEtBQVYsR0FBa0IsRUFBQSxHQUFFLE9BQUYsR0FBVyxJQU43QixDQUFBOztBQUFBLFFBUVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsU0FBQSxHQUFBO1NBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixHQUExQixFQUQwQztBQUFBLENBQTlDLENBUkEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzTmFtZSA9ICdkZGQnXG5kaXZTaXplID0gNzBcbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbmRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWVcbmRpdi5zdHlsZS5oZWlnaHQgPSBcIiN7ZGl2U2l6ZX1weFwiXG5kaXYuc3R5bGUud2lkdGggPSBcIiN7ZGl2U2l6ZX1weFwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ0RPTUNvbnRlbnRMb2FkZWQnLCAtPlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9