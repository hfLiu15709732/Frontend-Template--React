# 🎄 基于React的中后台管理平台模板

[![LICENSE](https://camo.githubusercontent.com/28827dde9943932643c38581d2ecffb68df42cf76ddb07626c83a9c969d417a5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f40646f7579696e66652f73656d692d7569)](https://github.com/DouyinFE/semi-design/blob/main/LICENSE)[![npm version](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)](https://www.npmjs.com/package/react)  <a href="https://github.com/facebook/react">    <img src="https://img.shields.io/badge/React-v18.1.1-blue" alt="React version" />  </a>[![BUILD-JS](https://camo.githubusercontent.com/53fa1eb4afa4c862b17278deb6b715a56ff257d7a4b9ba31a37b1440242e8378/68747470733a2f2f696d672e626164676573697a652e696f2f68747470733a2f756e706b672e636f6d2f40646f7579696e66652f73656d692d75692f646973742f756d642f73656d692d75692e6d696e2e6a733f6c6162656c3d73656d692e6d696e2e6a7326636f6d7072657373696f6e3d677a6970)](https://unpkg.com/browse/@douyinfe/semi-ui/dist/umd/semi-ui.min.js) [![BUILD-CSS](https://camo.githubusercontent.com/9eda8a7d20d57bd54cdb9df3fb988ba64c1e3001cb0f388aff350e3daeba85e2/68747470733a2f2f696d672e626164676573697a652e696f2f68747470733a2f756e706b672e636f6d2f40646f7579696e66652f73656d692d75692f646973742f6373732f73656d692e6d696e2e6373733f6c6162656c3d73656d692e6d696e2e63737326636f6d7072657373696f6e3d677a6970)](https://unpkg.com/browse/@douyinfe/semi-ui/dist/css/semi.min.css)

**`backendend_template for React` 由`jsx`和`Less`开发**

- **详细使用文档**：[Go](https://blog.hfliu.com/)
- **在线网站**：[Go](https://backend.react.hfliu.com/)
- **TS重构版本（还没弄完）**：[Go](https://backend.react.hfliu.com/)



## :city_sunrise:技术栈

> **React 18 + React Hooks  + Semi-Design 2.0  +  Axios  + Router V6** 



## ⭐️ 特性

- 💪 开箱即用，性能优异
- 💕 完美符合前端MVVM规范要求，可维护性强
- 🎨 组件基于Semi-Design的同一色彩管理，符合东方美学
- :tent: zustand全局状态管理，现代化状态管理库，相同功能，更小体积！
- :building_construction:前端路由映射基于Router V6 构架路由表，统一管理路由与页面
- 🚀 手动封装Axios拦截器与请求的集中式管理 复用性与维护性再飞跃
- ⚙️ 稳定的质量保障，覆盖单元测试、E2E测试、视觉回归测试等多种测试手段
- 🥳 暂时没有配置SSR和SEO的相关解决方案，以后会加的！
- 👏 暂时项目是基于JSX与Less的，以后会基于此进行TS的重构
- :mount_fuji: 未来项目会做VUE - 3的重构项目，敬请期待吧！

## 📦 开箱即用

### 克隆项目

```
git clone https://gitee.com/hfliu15709732/backend_template.git
```



## 💡 快速开始

### 安装项目所需依赖

```
$ yarn
```

> **如果你使用的是NPM，你也可以用npm i 来安装依赖**



### ✍🏻 本地启动项目

```
$ yarn run start
```

> **如果你使用的是NPM，你也可以用npm start来在本地启动项目**



### ✍🏻 项目测试

```
$ yarn run test
```

> **如果你使用的是NPM，你也可以用npm test来在本地启动项目**



### 📖 上线准备:打包构建

```
$ yarn run build
```

> **如果你使用的是NPM，你也可以用npm run build来在打包项目**



## 🗺 项目预览

**地址：https://backend.react.hfliu.com**

**预览图片还没上（那是别的项目的，可以先到预览地址直接看）**

| 开启页面                                                     | 登录页面                                                     | 平台主页                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [![img](https://camo.githubusercontent.com/c5009de37d7d71a9dc7a2ba07fb55e81318521af7369f608c0150eb3a8dd2c27/68747470733a2f2f696d7a62662e6769746875622e696f2f6d642d656469746f722d72742f696d67732f707265766965772d6c696768742e706e67)](https://camo.githubusercontent.com/c5009de37d7d71a9dc7a2ba07fb55e81318521af7369f608c0150eb3a8dd2c27/68747470733a2f2f696d7a62662e6769746875622e696f2f6d642d656469746f722d72742f696d67732f707265766965772d6c696768742e706e67) | [![img](https://camo.githubusercontent.com/aca8f1703097353f6a817e3afd0a67a85d7e83080c844ab4d87749e4102a8432/68747470733a2f2f696d7a62662e6769746875622e696f2f6d642d656469746f722d72742f696d67732f707265766965772d6461726b2e706e67)](https://camo.githubusercontent.com/aca8f1703097353f6a817e3afd0a67a85d7e83080c844ab4d87749e4102a8432/68747470733a2f2f696d7a62662e6769746875622e696f2f6d642d656469746f722d72742f696d67732f707265766965772d6461726b2e706e67) | [![img](https://camo.githubusercontent.com/741d47485720a836defd19a3148a15f33b0928cf057f9d2f5305a1dc64bd28c3/68747470733a2f2f696d7a62662e6769746875622e696f2f6d642d656469746f722d72742f696d67732f707265766965772d707265766965774f6e6c792e706e67)](https://camo.githubusercontent.com/741d47485720a836defd19a3148a15f33b0928cf057f9d2f5305a1dc64bd28c3/68747470733a2f2f696d7a62662e6769746875622e696f2f6d642d656469746f722d72742f696d67732f707265766965772d707265766965774f6e6c792e706e67) |





## 👌 平台兼容性

**本平台支持所有主流浏览器。**

| [![chrome](https://camo.githubusercontent.com/b2190c812cdeb59120252c1d54946efe7ebdb1c079444282aeb22cff5e20c76c/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f62726f777365722d6c6f676f732f37302e342e302f6368726f6d652f6368726f6d652e706e67)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/chrome/chrome.png) chrome | [![firefox](https://camo.githubusercontent.com/8141d69a4bdda1a697ade33caac70097d7d96fbcc8afe0e00f7f6dabbe9fb156/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f62726f777365722d6c6f676f732f37302e342e302f66697265666f782f66697265666f782e706e67)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/firefox/firefox.png) firefox | [![safari](https://camo.githubusercontent.com/897a53463ff25ae0d44115e471dc7ede9b4a132149228841afdbc0ac2ee55d88/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f62726f777365722d6c6f676f732f37302e342e302f7361666172692f7361666172692e706e67)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/safari/safari.png) safari | [![IE/Edge](https://camo.githubusercontent.com/9364c406ffd91434221cc3a986c569e327850256008ab9606ba7443e15e3de21/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f62726f777365722d6c6f676f732f37302e342e302f656467652f656467652e706e67)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/edge/edge.png) IE/Edge | [![electron](https://camo.githubusercontent.com/ef276bb538d20a28fa6032c1abedef8c74d116897b66199eaf0d5a44d24224cd/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f62726f777365722d6c6f676f732f37302e342e302f656c656374726f6e2f656c656374726f6e2e706e67)](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/electron/electron.png) Electron |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 最新两个大版本                                               | 最新两个大版本                                               | 最新两个大版本                                               | Edge所有版本                                                 | 最新两个大版本                                               |



## 🎈 协议

本项目 使用 [MIT 协议](https://github.com/DouyinFE/semi-design/blob/main/LICENSE)

