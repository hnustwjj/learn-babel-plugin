module.exports = ({ types: t }) => {
  return {
    visitor: {
      //去执行一些逻辑
      Identifier(path) {
        const isDebug = path.node.name === "DEBUG";
        const parentPathIsIf = t.isIfStatement(path.parentPath);
        if (isDebug && parentPathIsIf) {
          // 创建string类型的结点
          const node = t.stringLiteral("DEBUG");
          // 调用path的replaceWith方法去替换当前结点
          path.replaceWith(node);
        }
      },
      StringLiteral(path, state) {
        const isDebug = path.node.value === "DEBUG";
        const parentPathIsIf = t.isIfStatement(path.parentPath);
        console.log(state);
        if (isDebug && parentPathIsIf) {
          // 调用remove删除结点，那么它的孩子也都无了
          if (process.env.NODE_ENV === "production" && state.opts.useRemove)
            path.parentPath.remove();
        }
      },
    },
  };
};
