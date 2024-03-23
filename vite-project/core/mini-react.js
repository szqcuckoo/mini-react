/**
 * 创建文本节点
 * @param text
 * @param children
 * @returns {{type: string, props: {nodeValue, children: *[]}}}
 */
function createTextNode(text, ...children) {
    return {
        type: "TEXT_NODE",
        props: {
            nodeValue: text,
            children
        }
    }
}

/**
 * 创建 dom
 * @param type
 * @param props
 * @param children
 * @returns {{type, props: (*&{children: ({type: string, props: {nodeValue, children: *[]}}|*)[]})}}
 */
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => {  // 突然卡在这里，脑子一时没有反应过来，emmmm
                return typeof child === "string" ? createTextNode(child) : child
            })
        },
    }
}

/**
 * React
 * @type {{createElement: (function(*, *, ...[*]): {type: *, props: *&{children: ({type: string, props: {nodeValue, children: *[]}}|*)[]}})}}
 */
const React = {
    createElement
}
export default React