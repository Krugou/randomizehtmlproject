const tags = "./json/tags.json";

let website = (document.body.innerHTML = randomize());

function randomize() {
  fetch(tags)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "HTTP ERROR";
      }
    })
    .then((jsonData) => {
      tags.
    });
}
