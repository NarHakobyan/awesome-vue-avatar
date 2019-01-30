module.exports = {
  lintOnSave: false,
  publicPath: process.env.DEPLOY_ENV === 'gh-pages' ? 'https://narhakobyan.github.io/awesome-vue-avatar/': '/'
};
