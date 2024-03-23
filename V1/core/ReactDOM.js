function h(element, container) {
    const dom = element.type === "TEXT_NODE" ? document.createTextNode("") : document.createElement(element.type)
    Object.keys(element.props).forEach((key) => {
        if(key !== 'children') {
            dom[key] = element.props[key]
        }
    })
    element.props.children.forEach((child) => {
        h(child, dom)
    })
    container.append(dom)
}

const ReactDOM = {
    createRoot(container) {
        return {
            render(App) {
                h(App, container)
            }
        }
    }
}

export default ReactDOM