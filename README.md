## saga-test

### 概要
redux-saga を用いて 外部の API を呼ぶ最小限の Web サーバを作ることが目的。

画面に表示されたボタンを押すと、外部の API を呼び JSON を得る。

得た JSON の内容をリスト表示する。

### 環境
```
$ date
Thu Aug 13 22:02:41 JST 2020
$ node -v
v12.18.3
$ npm -v
6.14.6
$ yarn -v
1.22.4
```
環境を作成した手順は以下の通り。

```
$ create-react-app saga-test
$ yarn add redux react-redux
$ yarn add redux-saga
```

### 実行
```
yarn start
```