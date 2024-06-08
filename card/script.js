const container = document.querySelector('.container');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function() {
  container.style.boxShadow = `0px 0px 100px 0px ${getRandomColor()}`;
  container.style.borderColor = `${getRandomColor()}`;
}, 500);

