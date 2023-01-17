'use strict';

(function () {
  const header = document.querySelector('h1');

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
  });
})();

const rgb = () => Math.floor(Math.random() * 256);
