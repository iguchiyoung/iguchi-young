# 井口ヤング 公式サイト 運用ガイド

> このサイトは **HTMLの知識がなくても記事を投稿できる**設計になっています。

---

## 📌 リポジトリ情報

| 項目 | 内容 |
|------|------|
| GitHub アカウント | iguchiyoung |
| リポジトリ名 | iguchi-young |
| GitHub URL | https://github.com/iguchiyoung/iguchi-young |
| 公開サイト URL | https://iguchiyoung.github.io/iguchi-young/ |

---

## 🗂️ ファイル構成

```
iguchi-young/
├── index.html         ← トップページ
├── team.html          ← チーム紹介
├── blog.html          ← 活動報告 一覧
├── post.html          ← 活動報告 記事表示（1枚で全記事を表示）
├── recruit.html       ← 部員募集・体験会（カレンダーあり）
├── contact.html       ← お問い合わせ（Googleフォーム）
├── admin-ig2025.html  ★ 記事投稿ツール（ここから投稿する）
│
├── config.js          ← チーム情報・SNS URL（変更時はここを編集）
├── news-list.js       ★ 記事データ（新記事を追加する場所）
│
├── images/            ← 写真はここに入れる
├── css/style.css      ← デザイン（通常編集不要）
└── js/common.js       ← 共通JS（通常編集不要）
```

---

## ✍️ 新しい記事を投稿する手順（5分でできます）

### ブラウザで `admin-ig2025.html` を使う（おすすめ）

1. **`admin-ig2025.html` をブラウザで開く**
2. **パスワードでログイン**（初回はセットアップが必要）
3. **フォームに入力**（タイトル・日付・カテゴリ・本文）
4. **「GitHubに投稿する」ボタンを押す**
5. **約1〜2分でサイトに反映！**

---

## 📝 試合結果の投稿

カテゴリで「⚾ 試合結果」を選ぶと本文テンプレートが自動挿入されます。

```
【日時】2026年6月2日（火）
【場所】井口小グラウンド
【対戦相手】相手チーム名
【結果】○勝ち / ×負け　スコア　X - X
【バッテリー】投手名ー捕手名（イニング）

【スコア表】
チーム名|1|2|3|4|5|6|7|計
井口ヤング| | | | | | | |0
相手チーム| | | | | | | |0
```

`|`（縦棒）区切りで入力するとサイト上に**スコア表として自動表示**されます。

---

## ✏️ 本文で使えるタグ一覧

| タグ | 表示 |
|------|------|
| `【見出し】タイトル` | 赤い小見出し |
| `【結果】スコア` | 試合結果の赤いボックス |
| `【スコア表】（次行からパイプ区切り）` | スコア表 |
| `【次回予告】内容` | 緑色の次回予告ボックス |
| `【紹介】内容` | 青色の紹介ボックス |
| `【ヒーロー】名前` | 金色のヒーローボックス |
| 空行 | 段落の区切り |

---

## 🖼️ 写真を追加する

1. 写真ファイル（JPEG推奨）を `images/` フォルダにアップロード
2. admin-ig2025.html の「画像ファイル名」欄にファイル名を入力（例: `blog4.jpg`）
3. **写真が不要な記事（試合結果など）は画像ファイル名を空欄のままでOK**

| 画像 | 推奨サイズ | 用途 |
|------|-----------|------|
| `logo.png` | 200×200px | ヘッダーロゴ |
| `main-hero.jpg` | 1920×1080px | トップ・各ページ背景 |
| `team-hero.jpg` | 1920×1080px | チーム紹介ページ背景 |
| `recruit-hero.jpg` | 1920×1080px | 部員募集ページ背景 |
| `gallery1〜6.jpg` | 800×800px | ギャラリー |
| `blog1.jpg〜` | 800×600px | 記事サムネイル |

---

## 🔧 チーム情報・URLを変更する

`config.js` を開いて書き換えるだけです：

```js
contact: {
  lineUrl:      "https://lin.ee/oZJ19DI",
  instagramUrl: "https://www.instagram.com/iguchiyoung/",
  facebookUrl:  "https://www.facebook.com/iguchiyoung",
  email:        "iguchiyoung@gmail.com",
}
```

---

## 📅 Google カレンダーの設定

`recruit.html` の `GOOGLE_CALENDAR_URL` を差し替えてください：

1. Googleカレンダーを開く
2. カレンダー名の「…」→「設定と共有」をクリック
3. 「このカレンダーへのアクセス権限」→「**一般公開する**」をON
4. 「カレンダーを埋め込む」のiframe src URLをコピー
5. `recruit.html` の `GOOGLE_CALENDAR_URL` と置き換える

---

## 📬 Google フォームの設定

`contact.html` の `GOOGLE_FORM_URL` を差し替えてください：

1. Googleフォームを開く
2. 右上「送信」→「`<>`（埋め込み）」タブをクリック
3. 表示された iframe の src URLをコピー
4. `contact.html` の `GOOGLE_FORM_URL` と置き換える

---

## 🔑 管理画面（admin-ig2025.html）の初回セットアップ

### Step 1: GitHub Token を作成
1. [GitHub → Settings → Fine-grained tokens](https://github.com/settings/tokens?type=beta) を開く
2. 「Generate new token」をクリック
3. **Repository access** → `iguchi-young` のみ選択
4. **Permissions** → Contents: `Read and write`
5. 生成されたトークン（`ghp_...`）をコピー

### Step 2: admin-ig2025.html で初回セットアップ
1. ブラウザで `admin-ig2025.html` を開く
2. セットアップ画面で**パスワード**と**Token**を入力して「セットアップ完了」
3. **このデバイスに保存されます（他のデバイスでは再設定が必要）**

### Step 3: 次回からはパスワードだけでOK
- タブを閉じるまでログイン状態が維持されます
- 複数の端末から同時にログインしてもOK

---

## 📱 SNSリンク一覧

| SNS | URL |
|-----|-----|
| LINE | https://lin.ee/oZJ19DI |
| Instagram | https://www.instagram.com/iguchiyoung/ |
| Facebook | https://www.facebook.com/iguchiyoung |
| メール | iguchiyoung@gmail.com |

---

## 🚀 GitHub Pages への公開確認

リポジトリの Settings → Pages で以下を確認してください：
- **Source**: Deploy from a branch
- **Branch**: `main` / `/(root)`
- 公開URL: `https://iguchiyoung.github.io/iguchi-young/`

---

*© 2025 井口ヤング*
