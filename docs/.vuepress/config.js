const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "不开心就来soul",
  description: '欢迎来到我们的团队首页',
  base: '/lhj-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "fb0eba564cb24c2d5b54",
        clientSecret: "8f557ae43d8ea259e7abdd8b3a7c43e11a02acb7",
        owner: "julien0220",
        repo: "lhj-notes",
      },
    ],
  ], themeConfig,
}