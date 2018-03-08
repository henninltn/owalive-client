module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "trunk-client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    script: [
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ih1h1Lsrq7F-ou9sv4dcnxLiiVHCNl0' }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
  ** Mode
  */
  mode: "spa",
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: ['~plugins/buefy']
};
