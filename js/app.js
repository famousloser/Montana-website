let dianaLink = document.querySelector("a.diana");
let ogostaLink = document.querySelector("a.ogosta");
let othersLink = document.querySelector("a.others");

dianaLink.addEventListener("click", event => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      let article = document.querySelector(".first-article");

      article.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "../pages/diana.html");
  xhr.send();
});

ogostaLink.addEventListener("click", event => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      let article = document.querySelector(".first-article");

      article.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "../pages/ogosta.html");
  xhr.send();
});

othersLink.addEventListener("click", event => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      let article = document.querySelector(".first-article");

      article.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "../pages/others.html");
  xhr.send();
});
