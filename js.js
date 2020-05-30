document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let circle = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  let size = Math.random() * 150;
  circle.style.width = 100 + size + "px";
  circle.style.height = 100 + size + "px";
  circle.style.borderRadius= 100 + size + "px";
  body.appendChild(circle);
  setTimeout(function() {
    circle.remove();
  }, 3800);
});