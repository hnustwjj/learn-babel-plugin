const { transformSync } = require("@babel/core");
const myPlugin = require("./index.js");
// 插件就是一个函数罢了
const code = `
if(DEBUG){
  // 到了prod环境会被移除
  const a = 1
  const b = 2
  console.log(a+b)
}
`;
const babelConfig = {
  plugins: [
    [
      "./index.js",
      {
        useRemove: true,
      },
    ],
  ], //指定插件
};
const output = transformSync(code, babelConfig);
console.log(output.code);
