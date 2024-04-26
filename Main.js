
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');



for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
  }