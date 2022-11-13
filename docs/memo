# nri-3-sprint.api-solo-okuda

API ソロプロジェクトの奥田成果物。

# このプロジェクトの作り方

## プロジェクト初期化

npm 初期設定＆インストール
`package.json` を参照

## DB 構築

npm 初期設定＆インストール

```
//データベース作成
echo CREATE DATABASE gourmet_api; | psql -h localhost -p 5432 -U postgres

//接続確認
psql -h localhost -p 5432 -U postgres -d gourmet_api

//knex設定とテーブル作成
npm install knex //実行後、作成されたknexfile.jsを修正
knex migrate:make create_shop_table
knex seed:make shop_seed
```

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

```

```
