// 在页面上显示 mini-react
// v1
// const dom = document.createElement('div')
// dom.id = "app"
// const text_node = document.createTextNode('')
// text_node.nodeValue = "mini-react"
// dom.append(text_node)
// document.querySelector('#root').append(dom)

// V2 使用对象来模拟 dom 的属性

// const textEle = {
//     type: "TEXT_NODE",
//     props: {
//         nodeValue: "mini-react"
//     },
//     children: [] //
// }
//
// const ele = {
//     type: "div",
//     props: {
//         id: "app",
//         className: "app"
//     },
//     children: [
//         textEle
//     ] // 这里为什么是数组
// }


import App from "./App.js";
import ReactDOM from "./core/ReactDOM.js";


ReactDOM.createRoot(document.getElementById("root")).render(App)

// V3