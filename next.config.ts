// next.config.ts
import type { NextConfig } from "next";
import type { Configuration } from "webpack"; // Webpack の型定義をインポート (オプションですが推奨)

const nextConfig: NextConfig = {
  // 他の Next.js 設定があればここに記述します
  reactStrictMode: true, // 例

  // Webpack の設定をカスタマイズ
  webpack: (
    config: Configuration, // Webpack の設定オブジェクト
    { isServer, webpack } // isServer: サーバーサイドコンパイルか, webpack: Webpack インスタンス
  ): Configuration => {
    // 変更後の設定オブジェクトを返す

    // config.module.rules が存在することを確認してから push するのがより安全です
    config.module?.rules?.push({
      test: /\.md$/, // .md ファイルを対象
      use: "raw-loader", // raw-loader を使用
    });

    // 変更した config オブジェクトを返すことが重要です
    return config;
  },
};

export default nextConfig;
