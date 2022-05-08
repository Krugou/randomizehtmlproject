const tags = "./json/tags.json";
let content;
let content2;
randomize();
function randomize() {
  fetch(tags)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "HTTP ERROR";
      }
    })
    .then((tags) => {
      for (let i = 0; i < tags.elementsmain.length; i++) {
        content2 += tags.elementsmain[i].tagStart
        content2 += tags.elementsmain[i].name
        content2 += tags.elementsmain[i].tagEnd;
        console.log(tags.elementsmain[i].tagStart);
        console.log(content2);
      }
      content =
        tags.elementsmain[0].tagStart +
        tags.elementsmain[0].name+" " +
        content2 +
        tags.elementsmain[0].tagEnd;
      console.log(content);
      let website = (document.body.innerHTML = content);
    });
}
