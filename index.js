module.exports = () => {
  return {
    visitor: {
      //去执行一些逻辑
      Identifier() {
        console.log("Identifier");
      },
    },
  };
};
