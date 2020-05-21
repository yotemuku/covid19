# 東大阪市 新型コロナウイルス感染症対策サイト（非公式）

![](https://github.com/codeforosaka/covid19/workflows/production%20deploy/badge.svg)

[東大阪市 新型コロナウイルス感染症対策サイト（非公式）](https://w-higa.netlify.app/)

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## このサイトの大元

### 大阪府 新型コロナウイルス感染症対策サイト
[サイトへのリンク](https://covid19-osaka.info/)

[Githubへのリンク](https://github.com/codeforosaka/covid19)

## 開発者向け情報

### data.jsonの説明
* JSON形式のデータです
* 元のエクセルから自動生成され、差分が発生した場合にPull Requestを作成します。

#### patients
* 感染者数
* date：最終更新日
* data -> No：発表番号
* data -> リリース日：発症日（最後の`T08:00:00.000Z`は固定）(サイト上："調査中"->「調査中」、それ以外->「不明」と表示)
* data -> 職業：職業(サイト上：nullは「不明」と表示)
* data -> 年代：〜〜代まで
* data -> 性別：男性 or 女性
* data -> 退院：退院してたら「○」、死亡した場合は「死亡」、それ以外は「（空白）」
* data -> date：上のリリース日と同じでOK（フォーマットは違うけど）

#### patients_summary
* 日毎の感染者数
* date：最終更新日
* data -> 日付：発表された日（最後の`T08:00:00.000Z`は固定）
* data -> 小計：その日の感染者数（累計じゃないので注意）

#### inspections_summary
* 日毎の検査件数
* date：最終更新日
* data -> 日付：発表された日（最後の`T08:00:00.000Z`は固定）
* data -> 小計：その日の検査件数（累計じゃないので注意）

#### contacts1_summary
* 府民向け相談窓口への相談件数
* date：最終更新日
* data -> 日付：発表された日（最後の`T08:00:00.000Z`は固定）
* data -> 小計：その日の検査件数（累計じゃないので注意）

#### contacts2_summary
* 新型コロナ受診相談センターへの相談件数
* date：最終更新日
* data -> 府管轄保健所：日毎の府管轄保健所での相談件数（累計じゃないので注意）
* data -> 東大阪市：日毎の東大阪市での相談件数（累計じゃないので注意）
* labels：日付

#### treated_summary
* 陰性確認済（回復者）
* date：最終更新日
* data -> 退院した日（最後の`T08:00:00.000Z`は固定）
* data -> 小計：その日の退院件数（累計じゃないので注意）

#### main_summary
* 状況サマリー
* http://www.pref.osaka.lg.jp/iryo/osakakansensho/corona.html
* 上記ページの数字と合わせる（手作業）

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://w-higa.netlify.app/ が更新されます。

`staging` ブランチは運用しません。developからmasterにプルリクを投げてください

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://develop-hosakacovid19.netlify.app/ が更新されます。
