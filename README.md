# nri-3-sprint.api-solo-okuda

API ソロプロジェクトの奥田成果物。

# このプロジェクトの作り方

## プロジェクト初期化

npm 初期設定＆インストール

```
npm init -y
npm install -D eslint
npm install -D prettier
npm install swagger-ui-express swagger-jsdoc
npm install -D nodemon
```

必要に応じて `package.json` を書き換え

## express 実装

```
touch index.js
mkdir routes
touch routes/books.js
```

# 使い方

## セットアップ

```
git clone <this repository>
cd express-swagger-demo/
npm install
```

## サーバ起動

```
npm run dev
```

Swagger UI へアクセス: http://localhost:3000/api-docs
