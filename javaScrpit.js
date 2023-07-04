var imageUrls = [
  "StonePaperScissors/stone.png",
  "StonePaperScissors/Paper.png",
  "StonePaperScissors/ScissorRight.png",
];

var removeImg = document.querySelector(".img-container");
removeImg.style.display = "none";

function getRandomImageUrl() {
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function resetFunction() {
  location.reload();
}

function startGame() {
  var startbtn = document.querySelector(".start");
  startbtn.style.display = "none";

  var resetbtn = document.querySelector(".reset");
  resetbtn.style.display = "inline-block";

  var playAgainbtn = document.querySelector(".playAgain");
  playAgainbtn.style.display = "inline-block";

  var removeImg = document.querySelector(".img-container");
  removeImg.style.display = "inline-block";

  var removeContent = document.querySelector(".content");
  removeContent.style.display = "none";

  var addImg1 = document.querySelector(".img-container .element .img1");
  addImg1.style.display = "inline-block";
  var addImg2 = document.querySelector(".img-container .element .img2");
  addImg2.style.display = "inline-block";

  var imageElement1 = document.querySelector(".img-container .img1");
  var imageElement2 = document.querySelector(".img-container .img2");
  var h1Element = document.querySelector("h1");

  var randomImageUrl1 = getRandomImageUrl();
  var randomImageUrl2 = getRandomImageUrl();

  if (randomImageUrl1 === imageUrls[0] && randomImageUrl2 === imageUrls[1]) {
    h1Element.innerHTML = "Player 2 Wins";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[0] && randomImageUrl2 === imageUrls[2]) {
    h1Element.innerHTML = "Player 1 Wins";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[0] && randomImageUrl2 === imageUrls[0]) {
    h1Element.innerHTML = "Draw";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[1] && randomImageUrl2 === imageUrls[0]) {
    h1Element.innerHTML = "Player 1 Wins";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[1] && randomImageUrl2 === imageUrls[1]) {
    h1Element.innerHTML = "Draw";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[1] && randomImageUrl2 === imageUrls[2]) {
    h1Element.innerHTML = "Player 2 Wins";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[2] && randomImageUrl2 === imageUrls[0]) {
    h1Element.innerHTML = "Player 2 Wins";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[2] && randomImageUrl2 === imageUrls[1]) {
    h1Element.innerHTML = "Player 1 Wins";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
  else if (randomImageUrl1 === imageUrls[2] && randomImageUrl2 === imageUrls[2]) {
    h1Element.innerHTML = "Draw";
    imageElement1.src = randomImageUrl1;
    imageElement2.src = randomImageUrl2;
  }
}

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const textBox = document.getElementById('textbox');

document.addEventListener('click', function (event) {
  const target = event.target;

  // Check if the click target is not the input or textarea
  if (target !== input1 && target !== input2 && target !== textBox) {
    // Restore the initial value to the input fields and textarea
    input1.placeholder = 'Enter Your Name';
    input2.placeholder = 'Enter Your Email';
    textBox.placeholder = 'Enter text here';
  }
});

input1.addEventListener('click', function () {
  input1.placeholder = '';
  input2.placeholder = 'Enter Your Email';
});

input2.addEventListener('click', function () {
  input1.placeholder = 'Enter Your Name';
  input2.placeholder = '';
});

textBox.addEventListener('click', function () {
  input1.placeholder = 'Enter Your Name';
  input2.placeholder = 'Enter Your Email';
  textBox.placeholder = '';
});
