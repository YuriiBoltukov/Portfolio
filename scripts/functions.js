/**
 * Replacing before to after
 * @param node: HTMLElement
 * @param before: string
 * @param after: string
 */
function toggleClasses(node, before, after){
    node.classList.add(before);
    node.classList.remove(after);
}

/**
 * Replace classes for node
 * @param nodeList: HTMLElement[]
 * @param node: HTMLElement
 * @param classes: string[]
 */
function replacedClasses(nodeList, node, classes) {
    toggleClasses(node, classes[0], classes[1]);
    Array.from(nodeList)
        .filter(nodeItem => nodeItem.value !== node.value)
        .forEach(nodeItem => toggleClasses(nodeItem,classes[1],classes[0]));
}

/**
 * Change classes for node
 * @param nodeList: HTMLElement[]
 * @param node: HTMLElement
 * @param classes: string
 */
function changeClasses(nodeList, node, className) {
    node.classList.add(className)
    Array.from(nodeList)
        .filter(nodeItem => nodeItem.value !== node.value)
        .forEach(nodeItem => nodeItem.classList.remove(className));
}
