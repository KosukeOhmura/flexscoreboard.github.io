window.onload = function () {
  // Insert dynamic copyright
  Array.from(document.getElementsByClassName("copyright-kosukeohmura"))
    .forEach(elem => elem.innerText = (new Date()).getFullYear());
};
