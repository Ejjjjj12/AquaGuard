function updateClock() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  h = h.toString().padStart(2, '0');
  m = m.toString().padStart(2, '0');
  s = s.toString().padStart(2, '0');
  document.getElementById('clock').textContent = h + ':' + m + ':' + s + ' ' + ampm;
}
setInterval(updateClock, 1000);
updateClock();