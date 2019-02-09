// Functions

let start = () => {
  rButton.textContent = 'New Colors';
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block"
    } else {
      squares[i].style.display = "none";
    }
    squares[i].addEventListener("click", event => {
      let clicked = event.target.style.background;
      if (clicked === pickedColor) {
        document.getElementById('Status').textContent = "Correct";
        cc(clicked);
        topside.style.backgroundColor = pickedColor;
        rButton.textContent = "Restart?";
      } else {
        document.getElementById('Status').textContent = "Try Again";
        event.target.style.background = "#232323";
      }
    });
  }
}

let restart = () => {
  colors = generateRandomColors();
  pickedColor = pickColor();
  head.textContent = pickedColor.toUpperCase();
  topside.style.backgroundColor = "steelblue";
  document.getElementById('Status').textContent = "";
  start();
}

let cc = color => {
  for (let i = 0; i < difficulty; i++) {
    squares[i].style.background = pickedColor;
  }
}

let pickColor = () => {
  var number = Math.floor(Math.random() * colors.length);
  return colors[number];
}

let generateRandomColors = () => {
  let list = [];
  for (let i = 0; i < difficulty; i++) {
    let num1 = Math.floor(Math.random() * 255 + 1);
    num2 = Math.floor(Math.random() * 255 + 1),
      num3 = Math.floor(Math.random() * 255 + 1),
      color = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
    list.push(color);
  }
  return list;
}
// Setup 

let difficulty = 3,
  colors = generateRandomColors(),
  pickedColor = pickColor(),
  head = document.getElementById('code'),
  topside = document.getElementsByTagName('h1')[0],
  squares = document.querySelectorAll(".square"),
  rButton = document.getElementById('reset'),
  easy = document.getElementById('Easy'),
  hard = document.getElementById('Hard');

head.textContent = pickedColor.toUpperCase();
easy.classList.add('selected');

// Event Listeners

rButton.addEventListener('click', () => {
  restart();
});
easy.addEventListener('click', () => {
  difficulty = 3;
  hard.classList.remove('selected');
  easy.classList.add('selected');
  restart();
});
hard.addEventListener('click', () => {
  difficulty = 6;
  easy.classList.remove('selected');
  hard.classList.add('selected');
  restart();
});


// Init Game

start();
