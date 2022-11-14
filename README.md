# nri-3-sprint.api-solo-okuda

<details open="open">
<summary>Table of Contents</summary>

-   [About](#about)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
</details>

# About

API ソロプロジェクトの奥田成果物。  
飲食店(shop)の情報について、取得/編集/削除が可能。

# Getting Started

## ダウンロード

```
git clone <this repository>
cd nri-3-sprint.api-solo-okuda/
npm install　#インストールされるパッケージはpackage.json参照
```

## DB 構築

```
touch .env.local
```

作成された`.env.local` に、下記内容を記述する

```
例）
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password01
DB_NAME=gourmet_api
```

```
echo "CREATE DATABASE gourmet_api;" | psql
npm run migrate
npm run seed
```

## サーバ起動

```
npm run dev
```

# API references

### ドキュメント

-   サーバ起動した状態で下記を参照  
    http://localhost:3000/api-docs

### メソッド一覧

-   `GET /shops`
-   `GET /shops/{idOrName}`
-   `POST /shops`
-   `PATCH /shops/{id}`
-   `DELETE /shops/{id}`
