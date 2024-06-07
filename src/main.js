import { loadHTML } from './loadHtml.js';

const myObj = {
  queue: [],
  init: function () {
    let queue = this.queue;

    for (let key in queue) { // Обратите внимание на использование let
      let f = queue[key];
      if (typeof f == 'function') {
        f();
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  myObj.init();
});

myObj.queue.push(function() {
  loadHTML('header', '/partials/header.html');
  loadHTML('footer', '/partials/footer.html');
  document.querySelector('#about').innerHTML = 'Welcome to the About Page!';
});
