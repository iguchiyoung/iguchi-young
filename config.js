/**
 * 井口ヤング 公式サイト 設定ファイル
 * ★ここを編集するだけでサイト全体の情報が更新されます★
 * HTMLの知識は不要です。値だけ書き換えてください。
 */

const SITE_CONFIG = {

  /* ───────── 基本情報 ───────── */
  name:        "井口ヤング",
  nameEn:      "IGUCHI YOUNG",
  tagline:     "仲間と明るく・楽しく・のびのび野球！",
  established: "1977",   // ← 実際の創設年に変更してください
  description: "東京都三鷹市の少年野球チーム・井口ヤング。小学1年生〜6年生 男女不問。体験会随時受付中！",

  /* ───────── 連絡先・SNS ───────── */
  contact: {
    lineUrl:          "https://lin.ee/oZJ19DI",
    lineId:           "@iguchiyoung",
    instagramUrl:     "https://www.instagram.com/iguchiyoung/",
    instagramHandle:  "@iguchiyoung",
    facebookUrl:      "https://www.facebook.com/iguchiyoung",
    email:            "iguchiyoung@gmail.com",

    // 練習場所（複数あるため代表を記載）
    practiceLocation: "三鷹市立 にしみたか学園 井口小学校グラウンド",
    practiceAddress:  "東京都三鷹市",
    practiceNote:     "三鷹市井口特設グラウンド・大沢グラウンドも使用します。詳細は公式LINEにてご確認ください。",
    practiceSchedule: "主に土曜・日曜・祝日 9:00〜17:00（学年により異なります）",
    experienceNote:   "事前申込不要。直接グラウンドにお越しください！都合の良い時間帯のみの参加もOK。",
  },

  /* ───────── ナビゲーション ───────── */
  nav: [
    { label: "ホーム",       href: "index.html"   },
    { label: "チーム紹介",   href: "team.html"    },
    { label: "活動報告",     href: "blog.html"    },
    { label: "部員募集",     href: "recruit.html" },
    { label: "お問い合わせ", href: "contact.html" },
  ],

  // news/ 配下から参照するときのナビ（../ が付く）
  navFromNews: [
    { label: "ホーム",       href: "../index.html"   },
    { label: "チーム紹介",   href: "../team.html"    },
    { label: "活動報告",     href: "../blog.html"    },
    { label: "部員募集",     href: "../recruit.html" },
    { label: "お問い合わせ", href: "../contact.html" },
  ],

  /* ───────── 数字で見るチーム ───────── */
  stats: [
    { label: "創設",     value: "1977年" },
    { label: "対象",     value: "1〜6年生" },
    { label: "男女",     value: "男女不問" },
    { label: "体験会",   value: "随時受付" },
  ],

  /* ───────── 実績 ───────── */
  achievements: [
    "2021年度 三鷹市少年軟式野球連盟 夏季大会 準優勝",
    "2021年度 東京都市町村対抗軟式野球大会 出場",
    "2021年度 三鷹市少年軟式野球連盟 秋季大会 ベスト4",
    "2021年度 三鷹市少年軟式野球連盟 秋季大会 Bチーム 準優勝",
  ],

  /* ───────── チームの理念 ───────── */
  philosophy: [
    { icon:"⚾", title:"楽しく・のびのびと",    desc:"「野球って楽しい！」という気持ちを何より大切に。思いっきり体を動かし、グラウンドで笑顔があふれる練習を目指しています。" },
    { icon:"😊", title:"明るく・仲間と一緒に",  desc:"勝ち負けより、仲間と一緒にプレーする喜びを。アットホームな雰囲気で誰もが安心してのびのびできるチームです。" },
    { icon:"🌱", title:"自分らしく成長する",    desc:"子供たちが自分のペースで成長できる環境を大切に。野球を通じて笑顔・自信・仲間との絆を育てます。" },
  ],

  /* ───────── よくある質問 ───────── */
  faq: [
    {
      q: "保護者の当番制（お茶当番など）はありますか？",
      a: "当番制はありません。共働きのご家庭も安心してご参加いただけます。ただし試合の引率や夏季練習など、できる範囲でのご協力をお願いすることがあります。",
    },
    {
      q: "道具は最初から全部揃えないといけませんか？",
      a: "ユニフォームや練習着、グローブ、バットなどは各自でご用意いただきます。ただし上の学年からのお下がりが出ることがありますので、代表・監督・コーチに相談しながら少しずつ揃えていきましょう。また定期的にお下がりのバザー（超格安！）も開催していますので、ぜひご利用ください。",
    },
    {
      q: "野球未経験でも大丈夫ですか？",
      a: "もちろん大歓迎！男女問わず経験不問です。のびのびと楽しめる環境で、自分のペースで上達できます。",
    },
    {
      q: "練習は必ず出なければいけませんか？",
      a: "都合が悪い時はお休みOKです。それぞれのご家庭の事情がありますので無理なく参加してください。ただし試合前はなるべく参加すると、本人のやる気も出てきます！",
    },
    {
      q: "会費・入会金はいくらですか？",
      a: "月会費はありません。年間費用などの詳細は、公式LINEまたはメール（iguchiyoung@gmail.com）にてお気軽にお問い合わせください。体験会への参加は無料です。",
    },
    {
      q: "体験はいつでも来られますか？",
      a: "事前連絡不要。都合の良い時間帯だけの参加もOKです。まずは公式LINEでグラウンドの場所・日程をご確認ください。",
    },
  ],

  /* ───────── 体験会の流れ ───────── */
  experienceFlow: [
    { step:"01", title:"LINEで日程を確認",       desc:"公式LINEで直近の練習日・グラウンドを確認。事前連絡なしで来てもOK！" },
    { step:"02", title:"動きやすい服装で来てね", desc:"運動できる服装・靴でOK。道具は貸し出します。手ぶらで来てください！" },
    { step:"03", title:"みんなと一緒に練習",     desc:"キャッチボールや簡単なゲームから体験。先輩部員がやさしく教えます。" },
    { step:"04", title:"保護者の方と懇談",       desc:"練習中に担当者がチームについて詳しくご説明。どんな疑問も遠慮なくどうぞ！" },
  ],

  /* ───────── 画像パス（images/ フォルダ内） ───────── */
  images: {
    logo:        "images/logo.png",
    heroMain:    "images/main-hero.jpg",
    teamPhoto:   "images/team-photo.jpg",
    teamHero:    "images/team-hero.jpg",
    recruitHero: "images/recruit-hero.jpg",
    ogImage:     "images/og-image.jpg",
    blogDefault: "images/blog-default.jpg",
    gallery: [
      "images/gallery1.jpg","images/gallery2.jpg","images/gallery3.jpg",
      "images/gallery4.jpg","images/gallery5.jpg","images/gallery6.jpg",
    ],
    coaches: [
      { name:"監督 氏名",   role:"監督",  img:"images/coach1.jpg" },
      { name:"コーチ 氏名", role:"コーチ", img:"images/coach2.jpg" },
      { name:"コーチ 氏名", role:"コーチ", img:"images/coach3.jpg" },
    ],
  },

  /* ───────── 最新の活動報告（仮データ） ───────── */
  /* ── トップページに表示する最新3件（news-list.js と同期してください）── */
  recentPosts: [
    { date:"2025年6月8日",  category:"試合結果", title:"春季大会 準決勝進出！熱戦を制して4強入り",  excerpt:"先週末に行われた春季大会の準々決勝で、井口ヤングが見事勝利！準決勝への切符を手にしました。", img:"images/blog1.jpg", href:"post.html?id=2025-06-08"  },
    { date:"2025年5月25日", category:"練習風景", title:"バッティング練習で全員ホームラン達成！",     excerpt:"今週の練習では全部員がホームラン性の当たりを放ちました。春の大会に向けて打撃絶好調です！", img:"images/blog2.jpg", href:"post.html?id=2025-05-25"  },
    { date:"2025年5月10日", category:"イベント",  title:"新入団員歓迎会！2名の仲間が加わりました", excerpt:"5月より2名の新しい仲間が入団。早速みんなと打ち解けて楽しく練習しています。",           img:"images/blog3.jpg", href:"post.html?id=2025-05-10"  },
  ],

};
