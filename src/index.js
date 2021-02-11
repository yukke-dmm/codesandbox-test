// /* const,let等の変数宣言　*/
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数を再宣言
// var val1 = "再宣言";
// console.log(val1);

// ---------------------------------------

// //letについて
// let val2= "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let上書き";
// console.log(val2);

// //letは再宣言できない
// let val2 = "letを再宣言";

// ---------------------------------------

// // constについて
// const val3 = "const変数";
// console.log(val3);

// // constは上書きもできない
// val3 = "aaa"

// const val3 = "const変数を再宣言"

// ---------------------------------------

// constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "じゃけえ",
//   age: "28",
// };
// console.log(val4);

// val4.name = "ゆうすけ";
// val4.address = "大阪";
// console.log(val4);

// ---------------------------------------

//  constで定義した配列はプロパティの変更が可能

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

// ---------------------------------------
// ----------　テンプレート文字列　-------------
// ---------------------------------------

// const name  ="ゆうすけ";
// const age = "２８";

// // 私の名前はゆうすけです。年齢は２８歳です。
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// ---------------------------------------
// --------------　アロー関数　---------------
// ---------------------------------------

// 従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str)=>{
//   return str;
// }
// console.log(func2("おいしいよ"));
// * 引数が一つならカッコを省略できる。
// * 中の処理が一つならreturnがいらない。

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };

// console.log(func3(10,20));

// ---------------------------------------
// --------------　分割代入　---------------
// ---------------------------------------

// const myProfile = {
//   name: "ゆっけ",
//   age:28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["ゆっけ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// ---------------------------------------
// -------------- デフォルト値 ---------------
// ---------------------------------------

// const sayHello = (name　= "ゲスト") => {
//    console.log(`こんにちは${name}さん。`);
// }
// sayHello("ゆうすけ");
// sayHello();
// // 引数を入れない場合はundefindedさん
// // 変数の後にイコール入れると初期値を決められる。

// ---------------------------------------
// ------------- スプレット構文　--------------
// ---------------------------------------

// // 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// //  ドット３つを書いて変数を書くとそのまま並べてくれる。
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// //要素が順番に入れられるのでこれでもOK
// sumFunc(...arr1);

//ドット３つは「順番に」という意味

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 =[10,20];
// const arr5 =[30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
//スプレッド構文を使うと元の値は変わらない。

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
//arr8を変えたいのにarr4も変わってしまう。

// ---------------------------------------
// ------　mapやfilterを使った配列の処理　------
// ---------------------------------------

// const nameArr = ["田中","山田","森田"];

//従来の繰り返し
// for (let index = 0;index < nameArr.length;index++){
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

//mapの基本。順番に入れていく
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//mapはこう使うとforと同じ使い方ができる。
// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です`));

// filterは条件を決めて一部をとりだす。
// const numArr = [1,2,3,4,5];
// const newNumarr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })

// console.log(newNumarr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "森田"){
//     return name
//   }else{
//     return `${name}さん。`
//   }
// })
// console.log(newNameArr);

// ---------------------------------------
// -------------　三項演算子　---------------
// ---------------------------------------

//ある条件　？　条件がtrue : 条件がfalse
// const val1 = 1>0 ? 'trueです': 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
// //数値をtoLocaleStringとは３桁区切りにしてくれる。

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください.'
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '１００より大きい':'１００以下';
// }
// console.log(checkSum(86,2));

// ---------------------------------------
// -------------　論理演算子　---------------
// ---------------------------------------

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2){
//   console.log("1か2はtrueになります")
// }
// if (flag1 && flag2){
//   console.log("1も2もtrueになります")
// }

// 「または」や「かつ」ではない！！！！！！

// const num = 100;
// const fee = num || "金額未設定です。"
// console.log(fee);
// 「||」は左がfalseになるとき右を返す。という意味。

// const num2 = null;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2);
//「＆＆」左側がtrueなら右側を返す。という意味

// ---------------------------------------
// --------------　論理演算子　--------------
// ---------------------------------------
