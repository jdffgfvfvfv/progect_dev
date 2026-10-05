# progect_dev

React + Vite 项目，按 Figma 的“牌照与监管”节点 `8799:2773` 实现。

## 启动

双击 `启动项目.cmd`，浏览器打开 http://localhost:5173/。

已安装 npm 的环境也可以执行：

```powershell
npm install
npm run dev
```

构建：`npm run build`。

## 文件说明

- `src/main.jsx`：页面、导航、演示弹窗。
- `src/style.css`：页面样式与移动端适配。
- `src/fonts.css`：本地 Manrope 字体。
- `public/assets`：Figma 原始盾牌、Logo、图标和字体。
- `design`：设计源信息、参考图与浏览器验证记录。
- `node_modules`：安装的 React、Vite 等依赖，由包管理器生成。
- `dist`：生产构建结果。

桌面按 1920 × 1068 的设计尺寸实现，较窄桌面窗口等比例缩放；手机使用独立布局。
导航菜单和账户按钮提供本地演示交互，没有连接真实开户、登录或交易接口。

设计来源：https://www.figma.com/design/RQjxcqHQIuHRoLvJomJJiK/QBM?node-id=8799-2773
