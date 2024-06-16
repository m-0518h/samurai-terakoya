// 変数の初期化
let untyped = "";
// 入力済み文字列を入れる変数
let typed = "";
//スコアの初期値
let score = 0;
//タイピング数の初期値
let counter = 0;


// 必要なHTML要素の取得
const untypedfield = document.getElementById("untyped");//未入力
const typedfield = document.getElementById("typed");// 入力済み文字列を表示するためのHTML要素の取得
const wrap = document.getElementById("wrap");
const start = document.getElementById("start");
const number = document.getElementById("counter");


// 複数のテキストを格納する配列
const textLists =  [
  'Hello World',
  'This is my App',
  'How are you?',
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
   'programming'
];

// ランダムなテキストを表示
const createText =  () => {
  // ランダムに表示する
  console.log(Math.floor(Math.random() * textLists.length));

  // untyped = textLists[0];

  // 正タイプした文字列をクリア
  typed = "";
  typedfield.textContent = typed;


  // 配列のインデックス数からランダムな数値を生成する
  let random = (Math.floor(Math.random() * textLists.length));

  // 配列からランダムにテキストを取得し画面に表示する
  untyped = textLists[random];


  // 作成したuntypedfield要素にuntypedのテキストを追加する
  untypedfield.textContent = untyped;
};

createText();//ランダムなテキストを表示する関数




// キー入力の判定
//keyPressという名前の関数を定数として宣言
//"e"  は関数に渡されるイベントオブジェクト
const keyPress = e => {
// 押されたキーの値を出力
  console.log("入力された文字は" + e.key);
  counter++;
  console.log("押された回数は" + counter + "回");
  number.textContent = counter;


  // 誤タイプの場合
  if(e.key !== untyped.substring(0, 1)) {
    //要素(wrap)に(.misstyped)というクラスを追加する
    wrap.classList.add("misstyped");

    // 100ms後に背景色を元に戻す
    setTimeout(() => {
      wrap.classList.remove("misstyped");//要素(wrap)から(.misstyped)というクラスを削除する

    }, 100);
    return;
  }



  // 正タイプの場合
  // スコアのインクリメント
  score++;
  //要素(wrap)から(.misstyped)というクラスを削除する
  wrap.classList.remove('misstyped');
  typed += untyped.substring(0, 1);//表示されている先頭文字を取得し、変数typedの末尾に追加する
  console.log("typedの中身は" + typed);
  console.log("表示されている最初の文字は" + typed);

  console.log("表示されている文字列は" + untyped);

  untyped = untyped.substring(1);//最初に表示されている先頭文字を削除する
  console.log("先頭文字が削除されて" + untyped);


  
  typedfield.textContent = typed;//入力済み文字列を表示するためのHTML要素にtypedを入力
  console.log(typedfield);
  console.log(untypedfield);
  
  untypedfield.textContent = untyped;//表示済み文字列を表示するためのHTML要素にuntypedを入力

   // テキストがなくなったら新しいテキストを表示
   if(untyped === "") {
    createText();
   }
};




// タイピングスキルのランクを判定
const rankCheck = score => {
  //スコアの値を返す
  // return `${score}文字打てました!`;
  // テキストを格納する変数を作る
  let text = "";

  // スコアに応じて異なるメッセージを変数textに格納する
  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
  } else if(score < 300) {
    text = `あなたのランクはAです。\nAランクまであと${300 - score}文字です。`;
  } else if(score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます!`;
  }
  // 生成したメッセージと一緒に文字列を返す
  return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};




// ゲームを終了
const gameOver = id => {
  //タイマーを止める
  clearInterval(id);
  console.log("game over");
  //rankCheckの結果をresultに代入
  const result = confirm(rankCheck(score));
   // OKボタンをクリックされたらリロードする
   if(result == true) {
    window.location.reload();
   }
};




 // カウントダウンタイマー
const timer = () => {
  // タイマー部分のHTML要素（p要素）を取得する
  let time = count.textContent;
  //タイマーを動かす
  const id = setInterval(() => {
    console.log(time);

    // カウントダウンする
    time--;//変数の値を1減らす
    count.textContent = time;

    // カウントが0になったらタイマーを停止する
    if(time <= 0) {
      clearInterval(id);
      gameOver(id);
    }
  }, 1000);
};



 // ゲームスタート時の処理
start.addEventListener("click", () =>  {

  // カウントダウンタイマーを開始する
  timer();
  
  // ランダムなテキストを表示する
  createText();

  // 「スタート」ボタンを非表示にするプロパティ
  start.style.display = 'none';

  // キーボードのイベント処理
  document.addEventListener("keypress", keyPress);
});

untypedfield.textContent = "スタートボタンで開始";

 // キーボードのイベント処理
 document.addEventListener("keypress", keyPress);