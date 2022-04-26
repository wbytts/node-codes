export default () => <h1>Hello</h1>;

// 导出一个配置对象，告诉zero
export const config = {
  noBundling: true // 只想呈现静态页面而不包含任何JavaScript
};