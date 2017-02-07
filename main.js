

var inputButtonEl = document.querySelector('.button');
var overLayEl = document.querySelector('.u_overlay');

inputButtonEl.addEventListener('click', function(evt) {
  function decrease() {
    var countdownBoxEl = document.querySelector('.countdown-box');
    var minutes = parseInt(countdownBoxEl.innerText.substring(0,2));
    var seconds = parseInt(countdownBoxEl.innerText.substring(3,5));
    if(seconds != 0) {
      seconds -= 1;
    } else if (seconds === 0 && minutes != 0) {
      seconds = 59;
      minutes -= 1;
    }

    if(seconds >= 10) {
      countdownBoxEl.innerHTML = '<h1>' + minutes + ':' + seconds + '</h1>';
    } else {
      countdownBoxEl.innerHTML = '<h1>' + minutes + ':' + '0' + seconds + '</h1>';
    }

    if(seconds === 0 && minutes === 0) {
      countdownBoxEl.innerHTML = '<h1>' + 'Pomodoro Complete' + '</h1>';
      countdownBoxEl.className = 'countdown-box complete'
      window.clearInterval(intId);
      overLayEl.className = 'u_overlay disappear'
    }
  }
  var intId = setInterval(decrease, 1000);
  var inputTextEl = document.querySelector('.input-area')

  var textOutputEl = document.querySelector('.text-output');
  var content = document.createTextNode(inputTextEl.value); // creates text
  // ar newContent = document.createTextNode("Hi there and greetings!");
  textOutputEl.appendChild(content);

  inputTextEl.className = 'input-box disappear'
  inputButtonEl.className = 'button disappear'

})
