const tags = "./json/tags.json";
randomize();

// Fisher-Yates shuffle algorithm to randomize array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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
      // Shuffle the elements array
      const shuffledElements = shuffleArray(tags.elementsmain);
      
      let content = "";
      for (let i = 0; i < shuffledElements.length; i++) {
        content += shuffledElements[i].tagStart;
        content += shuffledElements[i].name;
        content += shuffledElements[i].tagEnd;
      }
      
      document.body.innerHTML = content;
    });
}
