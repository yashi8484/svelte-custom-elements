# Svelte for WebComponents

## 環境構築

```
$ yarn install
$ yarn dev
```

上記を実行すると、http://localhost:1111 でアプリケーション(custom elements の開発用)が動作します。

## custom elements build

```
$ yarn build
```

上記を実行すると、webpack build を行うとともに、build 結果(js)が React/Vue アプリケーション側にコピーされます。

## FAQ

### Q: What is Svelte？

A: https://svelte.dev 参照。

https://svelte.dev/tutorial
チュートリアル。ボリュームあるが丁寧。

ある程度やったら、https://svelte.dev/docs で API リファレンスを見ても良さそうです。

### Q: Hoge.svelte を作ったが、build 対象に含まれません

A: src/index.js に import を追加する必要があります。
