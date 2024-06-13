// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById("btn");

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener("click", () => {

  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {

    //テキストに追加する
    text.textContent = "ボタンをクリックしました";
  }, 2000);

  console.log(text);
})