function setWord() {
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  $target.text(word);
  loc = 0;
}

const words = ["red", "blue", "pink"];
let word;
let loc = 0;
let startTime;
let isPlaying = false;

const $target = $("#target");

$("#btn").click(() => {
    location.reload();
})

$(document).click(() => {
  if (isPlaying === true) {
    return;
  }

  isPlaying = true;
  startTime = Date.now();
  setWord();
});

$(document).keydown((e) => {
  if (e.key !== word[loc]) {
    return;
  }

  loc++;

  $target.text("_".repeat(loc) + word.substring(loc));

  if (loc === word.length) {
    if (words.length === 0) {
      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      const $result = $("#result");
      $result.text(`Finished ${elapsedTime} seconds`);
      return;
    }
    setWord();
  }
});
