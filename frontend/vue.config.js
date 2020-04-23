module.exports = {
  "assetsDir": "static",
  "devServer": {
    "disableHostCheck": true,
    "proxy": "http://localhost:8080"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}