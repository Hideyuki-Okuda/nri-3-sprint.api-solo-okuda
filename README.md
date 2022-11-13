# nri-3-sprint.api-solo-okuda

<details open="open">
<summary>Table of Contents</summary>

-   [About](#about)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
</details>

## About

API ソロプロジェクトの奥田成果物。  
飲食店(shop)の情報について、取得/編集/削除が可能。

## Getting Started

### プロジェクト初期化

npm 初期設定＆インストール

```
npm install
```

インストールされるパッケージは`package.json` を参照

### DB 構築

npm 初期設定＆インストール

```
//データベース作成
echo CREATE DATABASE gourmet_api; | psql -h localhost -p 5432 -U postgres

//接続確認
psql -h localhost -p 5432 -U postgres -d gourmet_api

//knex設定とテーブル作成
knex migrate:make create_shop_table
knex seed:make shop_seed
```

## API references

-   `GET /shops`

    -   ランチシステム上の全飲食店を返します。
        -   パスパラメータ：なし
        -   クエリパラメータ：なし
        -   リクエスト：
        -   レスポンス：

-   `POST /shops`
    -   飲食店データを追加します。
