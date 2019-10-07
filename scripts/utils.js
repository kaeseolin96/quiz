class Utils {
    static createTemplate (container, template) {
        const clone = document.importNode(template, container, true);
        container.appendChild(clone);
        const children = container.children;

        return children[children.length -1];
    }
}