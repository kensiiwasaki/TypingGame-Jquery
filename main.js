// ワードをセットするための関数
function setWord() {
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  $target.text(word);
  loc = 0;
}

// ゲームスタートの関数
function Game() {
  if (isPlaying === true) {
    return;
  }

  isPlaying = true;
  startTime = Date.now();
  setWord();
}

// 変数の定義
const words = ["red", "blue", "pink"];
let word;
let loc = 0;
let startTime;
let isPlaying = false;

const $target = $("#target");

// Restartボタンを押すと画面がリロードされ初めからに戻る
$("#btn").click(() => {
  location.reload();
});

// 何かしらのクリック操作があったらゲーム関数を呼び出す
$(document).click(() => {
  Game();
});

// 何かしらのエンターキーを押す操作があったらゲーム関数を呼び出す
$(document).submit((event) => {
  event.preventDefault();
  Game();
});

// 何かしらキーが押された時
$(document).keydown((e) => {
  // 　画面の先頭の文字と違う文字なら即時リターン
  if (e.key !== word[loc]) {
    return;
  }

  //   画面と同じ文字ならテキストを'_'に変更する
  loc++;

  $target.text("_".repeat(loc) + word.substring(loc));

  //   全て終わったら時間を表示させる
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
