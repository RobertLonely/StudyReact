const path = require("path");
//导入在内存中自动生成index页面的插件
const htmlWebpackPlugin = require("html-webpack-plugin");
//创建一个htmlWebpackPlugin的实例对象
const htmlPlugin = new htmlWebpackPlugin({
  //源文件
  template: path.join(__dirname, "./src/index.html"),
  //生成的内存中首页的名称
  filename: "index.html"
});
// 向外暴露一个打包的配置对象；因为webpack是基于Node构建的,所以webpack支持所有Node API和语法
module.exports = {
  mode: "development",
  plugins: [htmlPlugin],
  module: {
    rules: [
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader","css-loader"]},
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {// css-loader3.x以上“localIdentName”已移入模块密钥
                localIdentName: "[path][name]-[local]-[hash:5]"
              }
            }
          },
          { loader: "sass-loader" },
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: { "@": path.join(__dirname, "./src") }
  }
};
